import { prisma } from '@dystomarket/db';
import { FastifyPluginCallback } from 'fastify';

const companyRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/companies', async (_, res) => {
    try {
      const companies = await prisma.company.findMany({
        include: {
          stockPrices: {
            orderBy: { timestamp: 'desc' },
            take: 2,
          },
          sector: true,
          subIndustry: true,
        },
        orderBy: [{ latestPrice: 'desc' }],
      });

      const formattedCompanies = companies.map((company) => {
        const latestPrice = company.stockPrices[0]?.price || null;
        const previousPrice = company.stockPrices[1]?.price || null; // Get previous price

        return {
          id: company.id,
          name: company.name,
          tickerSymbol: company.tickerSymbol,
          description: company.description,
          logoUrl: company.logoUrl,
          latestPrice: latestPrice,
          previousPrice: previousPrice,
          sector: company.sector,
          subIndustry: company.subIndustry,
        };
      });

      return formattedCompanies;
    } catch (error) {
      console.error('Error fetching companies:', error);
      return res.status(500).send({ error: 'Failed to fetch companies.' });
    } finally {
      await prisma.$disconnect();
    }
  });

  fastify.get('/companies/:tickerSymbol', async (req, res) => {
    const { tickerSymbol } = req.params as { tickerSymbol: string };
    try {
      const company = await prisma.company.findUnique({
        where: { tickerSymbol: tickerSymbol },
        include: {
          ceo: true,
          stockPrices: {
            orderBy: { timestamp: 'desc' },
            take: 2,
          },
          sector: true,
          subIndustry: true,
          financialData: true,
        },
      });

      if (!company) {
        return res.status(404).send({ error: 'Company not found' });
      }
      return {
        id: company.id,
        name: company.name,
        tickerSymbol: company.tickerSymbol,
        description: company.description,
        logoUrl: company.logoUrl ?? '',
        sector: company.sector,
        subIndustry: company.subIndustry,
        latestPrice: company.latestPrice,
        ceo: company.ceo
          ? {
              name: company.ceo.name,
              imageUrl: company.ceo.imageUrl,
              personality: company.ceo.personality,
              bio: company.ceo.bio,
            }
          : null,
        financialData: company.financialData ? company.financialData : null,
      };
    } catch (error) {
      console.error('Error fetching company:', error);
      return res.status(500).send({ error: 'Failed to fetch company.' });
    } finally {
      await prisma.$disconnect();
    }
  });

  fastify.get('/companies/:tickerSymbol/prices', async (req, res) => {
    const { tickerSymbol } = req.params as { tickerSymbol: string };
    try {
      const company = await prisma.company.findUnique({
        where: { tickerSymbol: tickerSymbol },
      });

      if (!company) {
        return res.status(404).send({ error: 'Company not found' });
      }

      const stockPrices = await prisma.stockPrice.findMany({
        where: { companyId: company.id },
        orderBy: { timestamp: 'asc' },
      });

      const formattedPrices = stockPrices.map((price) => ({
        timestamp: price.timestamp.toISOString(),
        price: price.price,
      }));

      return formattedPrices;
    } catch (error) {
      console.error('Error fetching companies:', error);
      return res.status(500).send({ error: 'Failed to fetch companies.' });
    } finally {
      await prisma.$disconnect();
    }
  });
  done();
};

export default companyRouter;
