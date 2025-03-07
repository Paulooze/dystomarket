import { prisma, Prisma } from '@dystomarket/db';
import { FastifyPluginCallback } from 'fastify';

const newsRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/news', async (req, res) => {
    try {
      const searchParams = new URLSearchParams(
        req.query as Record<string, string>,
      );
      const ticker = searchParams.get('ticker');

      const whereClause: Prisma.NewsArticleWhereInput = {};

      if (ticker) {
        whereClause.company = {
          tickerSymbol: ticker.toUpperCase(),
        };
      }

      const news = await prisma.newsArticle.findMany({
        where: whereClause,
        include: {
          company: {
            select: {
              name: true,
              tickerSymbol: true,
            },
          },
        },
        orderBy: { timestamp: 'desc' }, // Order by most recent first
      });

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

      return formattedNews;
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).send({ error: 'Failed to fetch news.' });
    } finally {
      await prisma.$disconnect();
    }
  });
  done();
};

export default newsRouter;
