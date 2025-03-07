import { prisma } from '@dystomarket/db';
import { FastifyPluginCallback } from 'fastify';
import { setInterval } from 'node:timers/promises';

async function getData() {
  const companies = await prisma.company.findMany({
    select: {
      tickerSymbol: true,
      stockPrices: {
        orderBy: { timestamp: 'desc' },
        take: 2,
      },
    },
  });
  const indices = await prisma.index.findMany({
    include: {
      indexPrices: {
        orderBy: { timestamp: 'desc' },
        take: 2,
      },
    },
  });

  const formattedIndices = indices.map((index) => ({
    tickerSymbol: index.tickerSymbol,
    previousPrice: index.indexPrices[1]?.price || null,
    latestPrice: index.indexPrices[0]?.price || null,
  }));
  const formattedCompanies = companies.map((company) => ({
    tickerSymbol: company.tickerSymbol,
    previousPrice: company.stockPrices[1]?.price || null,
    latestPrice: company.stockPrices[0]?.price || null,
  }));

  // Format the data as a Server-Sent Event
  const data = {
    companies: formattedCompanies.map((c) => ({
      ticker: c.tickerSymbol,
      previousPrice: c.previousPrice,
      latestPrice: c.latestPrice,
    })),
    indices: formattedIndices.map((i) => ({
      ticker: i.tickerSymbol,
      previousPrice: i.previousPrice,
      latestPrice: i.latestPrice,
    })),
  };

  return data;
}

const streamRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/stream', async (req, res) => {
    return res.sse(
      (async function* () {
        const data = await getData();
        yield { data: JSON.stringify(data) };

        for await (const _ of setInterval(5000)) {
          const data = await getData();
          yield { data: JSON.stringify(data) };
        }
      })(),
    );
  });
  done();
};

export default streamRouter;
