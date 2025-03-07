import { prisma } from '@dystomarket/db';
import { FastifyPluginCallback } from 'fastify';

const sectorsRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/sectors', async (_, res) => {
    try {
      const sectors = await prisma.sector.findMany({
        include: {
          subIndustries: {
            orderBy: { name: 'asc' }, // Order sub-industries alphabetically
          },
        },
        orderBy: { name: 'asc' }, // Order sectors alphabetically
      });

      // Format the data for the frontend
      const formattedSectors = sectors.map((sector) => ({
        id: sector.id,
        name: sector.name,
        subIndustries: sector.subIndustries.map((subIndustry) => ({
          id: subIndustry.id,
          name: subIndustry.name,
        })),
      }));

      return formattedSectors;
    } catch (error) {
      console.error('Error fetching sectors:', error);
      res.status(500).send({ error: 'Failed to fetch sectors.' });
    } finally {
      await prisma.$disconnect();
    }
  });
  done();
};

export default sectorsRouter;
