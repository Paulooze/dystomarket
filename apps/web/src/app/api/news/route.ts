import { prisma, Prisma } from '@dystomarket/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const ticker = searchParams.get('ticker');

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
      orderBy: { timestamp: 'desc' }, // Order by most recent first
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
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const company = await prisma.company.findUnique({
    where: { id: body.companyId },
    include: {
      stockPrices: {
        orderBy: { timestamp: 'asc' },
        take: 1,
      },
    },
  });

  const baseImpact = Math.abs(body.sentiment) * (Math.random() * 0.15 + 0.05); // 5% to 20% range
  const priceChangeMultiplier =
    body.sentiment > 0 ? 1 + baseImpact : 1 - baseImpact;

  const newPrice =
    (company!.latestPrice ?? company?.stockPrices[0]?.price ?? 100) *
    priceChangeMultiplier;

  // Fetch the rival company
  const rivalCompany = company!.rivalCompanyId
    ? await prisma.company.findUnique({
        where: { id: company!.rivalCompanyId },
        include: {
          stockPrices: {
            orderBy: { timestamp: 'asc' },
            take: 1,
          },
        },
      })
    : null;

  let rivalNewPrice: number | null = null;
  if (rivalCompany) {
    const rivalImpact = baseImpact * 0.5; // Rival effect is 50% of main impact
    const rivalMultiplier =
      body.sentiment > 0 ? 1 - rivalImpact : 1 + rivalImpact;
    rivalNewPrice = Math.max(
      1,
      (rivalCompany.latestPrice ?? rivalCompany.stockPrices[0]?.price ?? 100) *
        rivalMultiplier
    ); // Prevents negative prices
  }

  const transactions = [
    prisma.newsArticle.create({
      data: {
        companyId: company!.id,
        timestamp: new Date(),
        headline: body.headline,
        content: body.content,
        sentiment: body.sentiment,
        reaction: body.reaction,
        source: 'AI Market Watch',
      },
    }),
    prisma.stockPrice.create({
      data: {
        companyId: company!.id,
        price: newPrice,
      },
    }),
    prisma.company.update({
      where: { id: company!.id },
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
  console.log(
    `📰 AI News Published: ${body.headline} (Sentiment: ${body.sentiment})`
  );
  console.log(
    `📉 ${company!.name} Stock Updated: $${company!.latestPrice?.toFixed(
      2
    )} → $${newPrice.toFixed(2)}`
  );
  return NextResponse.json({
    message: 'News article created successfully.',
  });
}

export const dynamic = 'force-dynamic';
