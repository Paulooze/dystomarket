import { prisma } from '@dystomarket/db';

export async function getSmartRandomCompany() {
  const companies = await prisma.company.findMany({
    include: {
      rivalCompany: true,
      stockPrices: {
        orderBy: { timestamp: 'desc' },
        take: 2,
      },
      sector: true,
      subIndustry: true,
      ceo: true,
    },
  });
  // Fetch recent news to see which companies had major events
  const recentNews = await prisma.newsArticle.findMany({
    orderBy: { timestamp: 'desc' },
    take: 10, // Look at the last 10 news events
  });

  const companyWeights = companies.map((c) => {
    const recentMentions = recentNews.filter(
      (n) => n.companyId === c.id,
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
