import { NewsArticle } from '@dystomarket/db';

// ✅ Configure Redis
const redisConnection = {
  url: process.env.REDIS_DB_URL,
};

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { Worker } = await import('bullmq');
    const { prisma } = await import('@dystomarket/db');
    const worker = new Worker<NewsArticle>(
      'news-result',
      async (job) => {
        const { data: body } = job;
        const company = await prisma.company.findUnique({
          where: { id: body.companyId },
          include: {
            stockPrices: {
              orderBy: { timestamp: 'asc' },
              take: 1,
            },
          },
        });
        console.log(`📩 Received AI news result for ${company!.name}`);

        const sentiment = body.sentiment ?? 0;
        const baseImpact = Math.abs(sentiment) * (Math.random() * 0.15 + 0.05); // 5% to 20% range
        const priceChangeMultiplier =
          sentiment > 0 ? 1 + baseImpact : 1 - baseImpact;

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
            sentiment > 0 ? 1 - rivalImpact : 1 + rivalImpact;
          rivalNewPrice = Math.max(
            1,
            (rivalCompany.latestPrice ??
              rivalCompany.stockPrices[0]?.price ??
              100) * rivalMultiplier
          ); // Prevents negative prices
        }

        const transactions = [
          prisma.newsArticle.create({
            data: {
              companyId: company!.id,
              timestamp: body.timestamp,
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

        await prisma.$transaction(transactions);

        console.log(
          `📰 AI News Published: ${body.headline} (Sentiment: ${body.sentiment})`
        );

        console.log(`✅ News article stored in database.`);
      },
      { connection: redisConnection }
    );

    console.log(`Worker with an id ${worker.id} has been registered.`);
  }
}
