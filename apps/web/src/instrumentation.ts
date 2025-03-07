import { NewsArticle } from '@dystomarket/db';

// ✅ Configure Redis
const redisConnection = {
  url: process.env.REDIS_DB_URL,
};

const getNewStockData = (
  stock: { momentum: number; price: number },
  news: NewsArticle
) => {
  const sentiment = news.sentiment ?? 0;
  let changeFactor = sentiment * 0.05;
  let momentum = stock.momentum || 0;

  if (momentum > 0 && sentiment > 0) changeFactor *= 1.5;
  if (momentum < 0 && sentiment < 0) changeFactor *= 1.5;

  momentum *= 0.9;

  const randomness = (Math.random() - 0.5) * 0.02;
  changeFactor += randomness;

  return {
    newPrice: (stock.price += stock.price * changeFactor),
    newMomentum: momentum + changeFactor,
    changeFactor,
  };
};

type ExtendedNewsArticle = NewsArticle & {
  targetCompany: string;
};

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { Worker } = await import('bullmq');
    const { prisma } = await import('@dystomarket/db');

    const worker = new Worker<ExtendedNewsArticle>(
      'news-result',
      async (job) => {
        const { data: body } = job;
        const company = await prisma.company.findUnique({
          where: { tickerSymbol: body.targetCompany },
          include: {
            stockPrices: {
              orderBy: { timestamp: 'desc' },
              take: 1,
              select: {
                momentum: true,
                price: true,
              },
            },
          },
        });
        const rivalCompanies = await prisma.company.findMany({
          where: {
            sector: { id: company?.sectorId },
            id: { not: company?.id },
            subIndustryId: company?.subIndustryId,
          },
          include: {
            stockPrices: {
              orderBy: { timestamp: 'desc' },
              take: 1,
              select: {
                momentum: true,
                price: true,
              },
            },
          },
        });
        const { changeFactor, newMomentum, newPrice } = getNewStockData(
          company!.stockPrices[0],
          body
        );

        console.log(`📩 Received AI news result for ${company!.name}`);
        console.log(`Updating price: ${company?.latestPrice} -> ${newPrice}`);

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
              momentum: newMomentum,
            },
          }),
          prisma.company.update({
            where: { id: company!.id },
            data: { latestPrice: newPrice },
          }),
        ];

        for (const rCompany of rivalCompanies) {
          transactions.push(
            prisma.company.update({
              where: { id: rCompany.id },
              data: {
                latestPrice: rCompany.latestPrice! + changeFactor * 0.5,
              },
            }),
            prisma.stockPrice.create({
              data: {
                companyId: rCompany.id,
                price: rCompany.latestPrice! + changeFactor * 0.5,
              },
            })
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
