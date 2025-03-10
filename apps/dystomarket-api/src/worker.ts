import { NewsArticle, prisma } from '@dystomarket/db';
import { Queue, Worker } from 'bullmq';
import { pubRedis } from './redis';

const redisConnection = {
  url: process.env.REDIS_DB_URL,
};

const getNewStockData = (
  stock: { momentum: number; price: number },
  news: NewsArticle,
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

const stockPriceBuffer = new Map<
  number,
  { newPrice: number; timestamp: number }
>();

function queueStockPriceUpdate(companyId: number, newPrice: number) {
  stockPriceBuffer.set(companyId, { newPrice, timestamp: Date.now() });
}

type ExtendedNewsArticle = NewsArticle & {
  targetCompany: string;
};

const priceQueue = new Queue('price-update', { connection: redisConnection });

export async function registerWorkers() {
  const newsWorker = new Worker<ExtendedNewsArticle>(
    'news-result',
    async (job) => {
      console.log(`📩 Received AI news result for ${job.data.targetCompany}`);
      const { data: body } = job;
      console.log(body);
      const company = await prisma.company
        .findUnique({
          where: { tickerSymbol: body.targetCompany },
          include: {
            stockPrices: {
              orderBy: { timestamp: 'desc' },
              take: 1,
              select: {
                price: true,
                momentum: true,
              },
            },
          },
        })
        .catch(console.log);

      if (company == null) {
        console.log(`❌ Company not found: ${body.targetCompany}`);
        return;
      }
      console.log(`📈 Found company: ${company.name}`);

      const rivalCompanies = await prisma.company.findMany({
        where: {
          sector: { id: company.sectorId },
          id: { not: company.id },
          subIndustryId: company.subIndustryId,
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
        company.stockPrices[0],
        body,
      );

      console.log(`Updating price: ${company.latestPrice} -> ${newPrice}`);

      const transactions = [
        prisma.newsArticle.create({
          data: {
            companyId: company.id,
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
            companyId: company.id,
            price: newPrice,
            momentum: newMomentum,
          },
        }),
        prisma.company.update({
          where: { id: company.id },
          data: { latestPrice: newPrice },
        }),
      ];

      for (const rCompany of rivalCompanies) {
        if (rCompany.latestPrice == null) continue;
        transactions.push(
          prisma.company.update({
            where: { id: rCompany.id },
            data: {
              latestPrice: rCompany.latestPrice + changeFactor * 0.5,
            },
          }),
          prisma.stockPrice.create({
            data: {
              companyId: rCompany.id,
              price: rCompany.latestPrice + changeFactor * 0.5,
            },
          }),
        );
      }

      await prisma.$transaction(transactions);

      const decayFactor = 0.1; // Faster decay (effect weakens quickly)
      const maxIntervals = 12; // Effect fully fades in 12 intervals (~1 hour)
      const intervalDuration = 5 * 1000; // 5 seconds per update (TEST ONLY)
      let currentPrice = newPrice;

      for (let i = 0; i < maxIntervals; i++) {
        const priceChange = (changeFactor / maxIntervals) * (1 - decayFactor);
        currentPrice = Math.max(0, currentPrice + currentPrice * priceChange); // Ensure no negatives
        await priceQueue.add(
          'delayed-price-update',
          {
            ticker: company.tickerSymbol,
            companyId: company.id,
            price: currentPrice,
          },
          {
            delay: i * intervalDuration,
          },
        );
      }

      console.log(
        `📰 AI News Published: ${body.headline} (Sentiment: ${body.sentiment})`,
      );

      console.log(`✅ News article stored in database.`);
    },
    { connection: redisConnection },
  );

  const delayedPriceWorker = new Worker<{
    ticker: string;
    price: number;
    companyId: number;
  }>(
    'price-update',
    async (job) => {
      const { data } = job;
      console.log(`📈 Updating price for ${data.ticker} to ${data.price}`);
      queueStockPriceUpdate(data.companyId, data.price);

      pubRedis.publish(
        'stock-price-update',
        JSON.stringify({ companyId: data.companyId, price: data.price }),
      );

      setInterval(async () => {
        if (stockPriceBuffer.size === 0) return; // Nothing to update

        const updates = Array.from(stockPriceBuffer.entries()).map(
          ([companyId, data]) => ({
            companyId,
            price: data.newPrice,
            timestamp: new Date(data.timestamp),
          }),
        );

        // Bulk update in PostgreSQL
        await prisma.$transaction(
          updates.map(({ companyId, price, timestamp }) =>
            prisma.stockPrice.create({
              data: { price, timestamp, companyId },
            }),
          ),
        );

        console.log(`✅ Processed ${updates.length} stock price updates.`);

        stockPriceBuffer.clear(); // Clear the buffer after writing
      }, 5000);
    },
    { connection: redisConnection, concurrency: 3 },
  );

  console.log(
    `Dystomarket-api: News Worker with an id ${newsWorker.id} has been registered.`,
  );
  console.log(
    `Dystomarket-api: Delayed Price Worker with an id ${delayedPriceWorker.id} has been registered.`,
  );
}
