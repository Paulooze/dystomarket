import { prisma } from '@dystomarket/db';
import { Queue } from 'bullmq';
import { FastifyPluginCallback } from 'fastify';
import { getSmartRandomCompany } from './simulate.helpers';

const redisConnection = {
  url: process.env.REDIS_DB_URL,
};

console.log(redisConnection);

const newsQueue = new Queue('news-generation', { connection: redisConnection });

const simulateRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post('/simulate', async () => {
    console.log('Simulating news generation');
    const randomCompany = await getSmartRandomCompany();
    const recentNews = await prisma.newsArticle.findMany({
      where: {
        companyId: randomCompany.id,
      },
      orderBy: {
        timestamp: 'desc',
      },
      take: 5,
    });

    await newsQueue.add('generate-news', {
      company: randomCompany,
      recentNews,
    });

    return { message: 'News generation started.' };
  });
  done();
};

export default simulateRouter;
