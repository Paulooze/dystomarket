import { generateAINewsArticle } from "@/lib/ai";
import { eventEmitter, NEWS_PUBLISH_KEY } from "@/lib/event-emitter";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const ticker = searchParams.get("ticker");

    // Build the Prisma query based on the presence of the 'ticker' parameter
    const whereClause: Prisma.NewsArticleWhereInput = {}; // Start with an empty where clause

    if (ticker) {
      // If 'ticker' is provided, filter by company's ticker symbol
      whereClause.company = {
        tickerSymbol: ticker.toUpperCase(), // Convert to uppercase for consistency
      };
    }

    const news = await prisma.newsArticle.findMany({
      where: whereClause, // Apply the dynamic where clause
      include: {
        company: {
          select: {
            name: true,
            tickerSymbol: true, // Include ticker for display
          },
        },
      },
      orderBy: { timestamp: "desc" }, // Order by most recent first
    });

    // Format the response (optional, but good for consistency)
    const formattedNews = news.map((article) => ({
      id: article.id,
      headline: article.headline,
      content: article.content,
      timestamp: article.timestamp.toISOString(),
      companyName: article.company?.name || null, // Handle potential null company
      tickerSymbol: article.company?.tickerSymbol || null,
      sentiment: article.sentiment, // Include sentiment
      source: article.source,
    }));

    return NextResponse.json(formattedNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

async function getSmartRandomCompany() {
  const companies = await prisma.company.findMany({
    include: {
      rivalCompany: true,
      stockPrices: {
        orderBy: { timestamp: "desc" },
        take: 2,
      },
      sector: true,
      subIndustry: true,
      ceo: true,
    },
  });
  // Fetch recent news to see which companies had major events
  const recentNews = await prisma.newsArticle.findMany({
    orderBy: { timestamp: "desc" },
    take: 10, // Look at the last 10 news events
  });

  const companyWeights = companies.map((c) => {
    const recentMentions = recentNews.filter(
      (n) => n.companyId === c.id
    ).length;
    return {
      company: c,
      weight: recentMentions > 0 ? Math.pow(2, recentMentions) : 1, // Exponential boost for active companies
    };
  });

  // Weighted selection
  const totalWeight = companyWeights.reduce((sum, cw) => sum + cw.weight, 0);
  const random = Math.random() * totalWeight;
  let cumulativeWeight = 0;

  for (const { company, weight } of companyWeights) {
    cumulativeWeight += weight;
    if (random < cumulativeWeight) {
      return company;
    }
  }

  return companies[Math.floor(Math.random() * companies.length)]; // Fallback
}

export async function POST() {
  const randomCompany = await getSmartRandomCompany();
  const recentNews = await prisma.newsArticle.findMany({
    where: { companyId: randomCompany.id },
    orderBy: { timestamp: "desc" },
    take: 5,
  });
  const news = await generateAINewsArticle(randomCompany, recentNews);

  const baseImpact = Math.abs(news.sentiment) * (Math.random() * 0.15 + 0.05); // 5% to 20% range
  const priceChangeMultiplier =
    news.sentiment > 0 ? 1 + baseImpact : 1 - baseImpact;

  console.log(randomCompany.latestPrice!);
  console.log(randomCompany.latestPrice! * priceChangeMultiplier);

  const newPrice = (randomCompany?.latestPrice ?? 100) * priceChangeMultiplier;

  // Fetch the rival company
  const rivalCompany = randomCompany.rivalCompanyId
    ? await prisma.company.findUnique({
        where: { id: randomCompany.rivalCompanyId },
      })
    : null;

  let rivalNewPrice: number | null = null;
  if (rivalCompany) {
    const rivalImpact = baseImpact * 0.5; // Rival effect is 50% of main impact
    const rivalMultiplier =
      news.sentiment > 0 ? 1 - rivalImpact : 1 + rivalImpact;
    rivalNewPrice = Math.max(
      1,
      (rivalCompany?.latestPrice ?? 100) * rivalMultiplier
    ); // Prevents negative prices
  }

  const transactions = [
    prisma.newsArticle.create({
      data: {
        companyId: randomCompany.id,
        timestamp: new Date(),
        headline: news.headline,
        content: news.content,
        sentiment: news.sentiment,
        source: "AI Market Watch",
      },
    }),
    prisma.stockPrice.create({
      data: {
        companyId: randomCompany.id,
        price: newPrice,
      },
    }),
    prisma.company.update({
      where: { id: randomCompany.id },
      data: { latestPrice: newPrice },
    }),
  ];
  if (rivalCompany) {
    transactions.push(
      prisma.company.update({
        where: { id: rivalCompany.id },
        data: { latestPrice: rivalNewPrice },
      })
    );
    transactions.push(
      prisma.stockPrice.create({
        data: {
          companyId: rivalCompany.id,
          price: rivalNewPrice!,
        },
      })
    );
    console.log(
      `🔄 Rival Reaction: ${
        rivalCompany.name
      } Stock Updated: $${rivalCompany.latestPrice?.toFixed(
        2
      )} → $${rivalNewPrice!.toFixed(2)}`
    );
  }
  const [newArticle] = await prisma.$transaction(transactions);

  console.log(newArticle);

  eventEmitter.emit(NEWS_PUBLISH_KEY, newArticle);

  console.log(
    `📰 AI News Published: ${news.headline} (Sentiment: ${news.sentiment})`
  );
  console.log(
    `📉 ${
      randomCompany.name
    } Stock Updated: $${randomCompany.latestPrice?.toFixed(
      2
    )} → $${newPrice.toFixed(2)}`
  );
  return NextResponse.json({
    message: "News article created successfully.",
  });
}

export const dynamic = "force-dynamic";
