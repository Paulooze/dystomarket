import { PrismaClient } from '@prisma/client';
import { makeCompaniesData } from './companies.mjs';
import { ceosData } from './ceos.mjs';
import { makeFinancialData } from './financial-data.mjs';
import { makeNews } from './news.mjs';

const prisma = new PrismaClient();

async function assignRivalCompanies() {
  const rivalries = [
    { company: 'Black Mesa', rival: 'Aperture Science' },
    { company: 'Wayne Enterprises', rival: 'LexCorp' },
    { company: 'Stark Industries', rival: 'Oscorp' },
    { company: 'Umbrella Corporation', rival: 'Vault-Tec Corporation' },
    { company: 'Buy n Large', rival: 'MomCorp' },
    { company: 'Cyberdyne Systems', rival: 'Militech' },
  ];

  for (const pair of rivalries) {
    const company = await prisma.company.findUnique({
      where: { name: pair.company },
    });
    const rival = await prisma.company.findUnique({
      where: { name: pair.rival },
    });

    if (company && rival) {
      await prisma.company.update({
        where: { id: company.id },
        data: { rivalCompanyId: rival.id },
      });
      console.log(`🔗 Rivalry set: ${company.name} vs. ${rival.name}`);
    }
  }
}

assignRivalCompanies()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function main() {
  const companies = await prisma.company.findMany();
  const companyMap = Object.fromEntries(companies.map((c) => [c.name, c])); // Create a map { "Company Name": id }

  const financialData = makeFinancialData(companyMap);

  const financials = await prisma.$transaction(
    financialData.map((data) =>
      prisma.financialData.create({
        data,
      })
    )
  );
  console.log('Financial data seeded.');
  const financialMap = new Map();
  financials.forEach((financial) => {
    financialMap.set(financial.companyId, financial);
  });

  const newsData = makeNews(companyMap);
  const news = await prisma.$transaction(
    newsData.map((data) => {
      const { company, ...rest } = data;
      console.log(company);
      return prisma.newsArticle.create({
        data: {
          ...rest,
          company: {
            connect: { id: company.id, name: company.name },
          },
        },
      });
    })
  );
  console.log('News data seeded.' + news.length);

  // --- 1. Create Sectors ---

  const sectors = await prisma.$transaction([
    prisma.sector.upsert({
      where: { name: 'Energy' },
      update: {},
      create: { name: 'Energy' },
    }),
    prisma.sector.upsert({
      where: { name: 'Materials' },
      update: {},
      create: { name: 'Materials' },
    }),
    prisma.sector.upsert({
      where: { name: 'Industrials' },
      update: {},
      create: { name: 'Industrials' },
    }),
    prisma.sector.upsert({
      where: { name: 'Consumer Discretionary' },
      update: {},
      create: { name: 'Consumer Discretionary' },
    }),
    prisma.sector.upsert({
      where: { name: 'Consumer Staples' },
      update: {},
      create: { name: 'Consumer Staples' },
    }),
    prisma.sector.upsert({
      where: { name: 'Health Care' },
      update: {},
      create: { name: 'Health Care' },
    }),
    prisma.sector.upsert({
      where: { name: 'Financials' },
      update: {},
      create: { name: 'Financials' },
    }),
    prisma.sector.upsert({
      where: { name: 'Information Technology' },
      update: {},
      create: { name: 'Information Technology' },
    }),
    prisma.sector.upsert({
      where: { name: 'Communication Services' },
      update: {},
      create: { name: 'Communication Services' },
    }),
    prisma.sector.upsert({
      where: { name: 'Utilities' },
      update: {},
      create: { name: 'Utilities' },
    }),
    prisma.sector.upsert({
      where: { name: 'Real Estate' },
      update: {},
      create: { name: 'Real Estate' },
    }),
  ]);

  // Create a map for easy sector lookup
  const sectorMap = new Map();
  sectors.forEach((sector) => sector && sectorMap.set(sector.name, sector));

  // --- 2. Create Sub-Industries ---
  const subIndustries = await prisma.$transaction([
    // Energy
    prisma.subIndustry.upsert({
      where: { name: 'Energy Equipment & Services' },
      update: {},
      create: {
        name: 'Energy Equipment & Services',
        sectorId: sectorMap.get('Energy').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Oil, Gas & Consumable Fuels' },
      update: {},
      create: {
        name: 'Oil, Gas & Consumable Fuels',
        sectorId: sectorMap.get('Energy').id,
      },
    }),

    // Materials
    prisma.subIndustry.upsert({
      where: { name: 'Chemicals' },
      update: {},
      create: { name: 'Chemicals', sectorId: sectorMap.get('Materials').id },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Metals & Mining' },
      update: {},
      create: {
        name: 'Metals & Mining',
        sectorId: sectorMap.get('Materials').id,
      },
    }),

    // Industrials
    prisma.subIndustry.upsert({
      where: { name: 'Aerospace & Defense' },
      update: {},
      create: {
        name: 'Aerospace & Defense',
        sectorId: sectorMap.get('Industrials').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Machinery' },
      update: {},
      create: { name: 'Machinery', sectorId: sectorMap.get('Industrials').id },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Transportation' },
      update: {},
      create: {
        name: 'Transportation',
        sectorId: sectorMap.get('Industrials').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Scientific Research' },
      update: {},
      create: {
        name: 'Scientific Research',
        sectorId: sectorMap.get('Industrials').id,
      },
    }),

    // Consumer Discretionary
    prisma.subIndustry.upsert({
      where: { name: 'Automobiles' },
      update: {},
      create: {
        name: 'Automobiles',
        sectorId: sectorMap.get('Consumer Discretionary').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Hotels, Restaurants & Leisure' },
      update: {},
      create: {
        name: 'Hotels, Restaurants & Leisure',
        sectorId: sectorMap.get('Consumer Discretionary').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Media' },
      update: {},
      create: {
        name: 'Media',
        sectorId: sectorMap.get('Consumer Discretionary').id,
      },
    }),

    // Consumer Staples
    prisma.subIndustry.upsert({
      where: { name: 'Food & Staples Retailing' },
      update: {},
      create: {
        name: 'Food & Staples Retailing',
        sectorId: sectorMap.get('Consumer Staples').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Food Products' },
      update: {},
      create: {
        name: 'Food Products',
        sectorId: sectorMap.get('Consumer Staples').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Beverages' },
      update: {},
      create: {
        name: 'Beverages',
        sectorId: sectorMap.get('Consumer Staples').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Household Products' },
      update: {},
      create: {
        name: 'Household Products',
        sectorId: sectorMap.get('Consumer Staples').id,
      },
    }),

    // Health Care
    prisma.subIndustry.upsert({
      where: { name: 'Pharmaceuticals' },
      update: {},
      create: {
        name: 'Pharmaceuticals',
        sectorId: sectorMap.get('Health Care').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Biotechnology' },
      update: {},
      create: {
        name: 'Biotechnology',
        sectorId: sectorMap.get('Health Care').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Health Care Equipment & Supplies' },
      update: {},
      create: {
        name: 'Health Care Equipment & Supplies',
        sectorId: sectorMap.get('Health Care').id,
      },
    }),

    // Financials
    prisma.subIndustry.upsert({
      where: { name: 'Banks' },
      update: {},
      create: { name: 'Banks', sectorId: sectorMap.get('Financials').id },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Diversified Financials' },
      update: {},
      create: {
        name: 'Diversified Financials',
        sectorId: sectorMap.get('Financials').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Insurance' },
      update: {},
      create: { name: 'Insurance', sectorId: sectorMap.get('Financials').id },
    }),

    // Information Technology
    prisma.subIndustry.upsert({
      where: { name: 'Software & Services' },
      update: {},
      create: {
        name: 'Software & Services',
        sectorId: sectorMap.get('Information Technology').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Technology Hardware & Equipment' },
      update: {},
      create: {
        name: 'Technology Hardware & Equipment',
        sectorId: sectorMap.get('Information Technology').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Semiconductors' },
      update: {},
      create: {
        name: 'Semiconductors',
        sectorId: sectorMap.get('Information Technology').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Experimental Technology' },
      update: {},
      create: {
        name: 'Experimental Technology',
        sectorId: sectorMap.get('Information Technology').id,
      },
    }),

    // Communication Services
    prisma.subIndustry.upsert({
      where: { name: 'Telecommunication Services' },
      update: {},
      create: {
        name: 'Telecommunication Services',
        sectorId: sectorMap.get('Communication Services').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Media & Entertainment' },
      update: {},
      create: {
        name: 'Media & Entertainment',
        sectorId: sectorMap.get('Communication Services').id,
      },
    }),

    // Utilities
    prisma.subIndustry.upsert({
      where: { name: 'Electric Utilities' },
      update: {},
      create: {
        name: 'Electric Utilities',
        sectorId: sectorMap.get('Utilities').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Gas Utilities' },
      update: {},
      create: {
        name: 'Gas Utilities',
        sectorId: sectorMap.get('Utilities').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Water Utilities' },
      update: {},
      create: {
        name: 'Water Utilities',
        sectorId: sectorMap.get('Utilities').id,
      },
    }),
    prisma.subIndustry.upsert({
      where: { name: 'Multi-Utilities' },
      update: {},
      create: {
        name: 'Multi-Utilities',
        sectorId: sectorMap.get('Utilities').id,
      },
    }),

    // Real Estate
    prisma.subIndustry.upsert({
      where: { name: 'Real Estate Management & Development' },
      update: {},
      create: {
        name: 'Real Estate Management & Development',
        sectorId: sectorMap.get('Real Estate').id,
      },
    }),
  ]);

  const subIndustryMap = new Map();
  subIndustries.forEach(
    (subIndustry) =>
      subIndustry && subIndustryMap.set(subIndustry.name, subIndustry)
  );

  const ceosTransations = ceosData.map((ceo) =>
    prisma.cEO.upsert({
      where: {
        name: ceo.name,
      },
      update: ceo,
      create: ceo,
    })
  );

  const ceos = await prisma.$transaction(ceosTransations);
  console.log('CEO data seeded.');

  const ceoMap = new Map();
  for (const ceo of ceos) {
    if (ceo) {
      //Check if not null
      ceoMap.set(ceo.name, ceo);
    }
  }

  console.log(sectorMap);
  // return;
  const companiesData = makeCompaniesData(ceoMap, sectorMap, subIndustryMap);

  for (const companyData of companiesData) {
    const { initialPrice, ceo, sectorId, subIndustryId, ...rest } = companyData;
    try {
      // Use upsert to handle potential conflicts (if you re-run the seed)
      const company = await prisma.company.upsert({
        where: { tickerSymbol: companyData.tickerSymbol },
        update: {
          ...rest,
          ceoId: ceo?.id ?? null,
          sector: {
            connect: {
              id: sectorId,
            },
          },
          subIndustry: {
            connect: { id: subIndustryId },
          },
          financialData: financialMap.get(companyData.id)?.id
            ? {
                connectOrCreate: {
                  where: {
                    companyId: financialMap.get(companyData.id).id,
                    year: financialMap.get(companyData.id).year,
                  },
                  create: financialMap.get(companyData.id),
                },
              }
            : undefined,
          ceo: ceo
            ? {
                connectOrCreate: {
                  where: { id: ceo.id },
                  create: {
                    name: ceo.name,
                    bio: ceo.bio,
                    imageUrl: ceo.imageUrl,
                  },
                },
              }
            : undefined,
        },
        create: {
          ...rest,
          ceoId: ceo?.id ?? null,
          sector: {
            connect: {
              id: sectorId,
            },
          },
          subIndustry: {
            connect: { id: subIndustryId },
          },
          ceo: ceo
            ? {
                connectOrCreate: {
                  where: { id: ceo.id },
                  create: {
                    name: ceo.name,
                    bio: ceo.bio,
                    imageUrl: ceo.imageUrl,
                  },
                },
              }
            : undefined,
          financialData: financialMap.get(companyData.id)?.id
            ? {
                connectOrCreate: {
                  where: {
                    companyId: financialMap.get(companyData.id).id,
                    year: financialMap.get(companyData.id).year,
                  },
                  create: financialMap.get(companyData.id),
                },
              }
            : undefined,
          stockPrices: {
            create: {
              price: initialPrice,
            },
          },
        },
      });
      console.log(`Created/updated company: ${company.name}`);
    } catch (error) {
      console.error(
        `Error creating/updating company ${companyData.name}:`,
        error
      );
    }
  }

  const indicesData = [
    {
      name: 'Fictional 500',
      tickerSymbol: 'F500',
      description: 'Tracks the top 500 fictional companies.',
    },
    {
      name: 'Tech 100',
      tickerSymbol: 'TECH100',
      description: 'Tracks the top 100 fictional tech companies.',
    },
    {
      name: 'Galactic Industrial Average',
      tickerSymbol: 'GIA',
      description: 'An index for a fictional galactic economy.',
    }, //Added index
  ];

  for (const indexData of indicesData) {
    const index = await prisma.index.upsert({
      where: { tickerSymbol: indexData.tickerSymbol },
      update: {},
      create: indexData,
    });
    console.log(`Created/updated index: ${index.name}`);
  }
  // --- Index-Company Relationships (Market Cap Weighted) ---

  // Helper function to calculate market cap weighted indices
  async function calculateAndSeedIndexWeights(indexTicker, companyFilter = {}) {
    const index = await prisma.index.findUnique({
      where: { tickerSymbol: indexTicker },
    });
    if (!index) {
      console.error(`Index not found: ${indexTicker}`);
      return;
    }

    const companies = await prisma.company.findMany({
      where: companyFilter,
      include: {
        stockPrices: {
          //Including this, so that we have an initial stock value
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
      },
    });

    let totalMarketCap = 0;
    for (const company of companies) {
      // Use the latest price from the included stockPrices, or default to 100 if no prices yet.
      const latestPrice = company.stockPrices[0]?.price || 100;
      totalMarketCap += latestPrice * company.sharesOutstanding;
    }

    for (const company of companies) {
      const latestPrice = company.stockPrices[0]?.price || 100; // Get the price
      const marketCap = latestPrice * company.sharesOutstanding;
      const weight = totalMarketCap === 0 ? 0 : marketCap / totalMarketCap;

      await prisma.indexCompany.upsert({
        where: {
          indexId_companyId: {
            indexId: index.id,
            companyId: company.id,
          },
        },
        update: { weight: weight },
        create: {
          indexId: index.id,
          companyId: company.id,
          weight: weight,
        },
      });
    }
    console.log(`Seeded index weights for: ${indexTicker}`);
  }

  // Fictional 500 (all companies)
  await calculateAndSeedIndexWeights('F500');

  // Tech 100 (only tech companies)
  await calculateAndSeedIndexWeights('TECH100', {
    OR: [
      {
        sector: { id: { equals: sectorMap.get('Information Technology').id } },
      },
      {
        sector: { id: { equals: sectorMap.get('Communication Services').id } },
      },
      {
        subIndustry: {
          id: { equals: subIndustryMap.get('Aerospace & Defense').id },
        },
      },
      { subIndustry: { id: { equals: subIndustryMap.get('Machinery').id } } },
    ],
  });

  // Galactic Industrial Average (Specific Companies)
  await calculateAndSeedIndexWeights('GIA', {
    tickerSymbol: {
      in: ['WAYN', 'STK', 'ACME', 'CYB', 'WYUT', 'CHOM', 'KUAT', 'MOM', 'SPCY'], // Add your desired companies
    },
  });

  // Function to seed initial index prices
  async function seedInitialIndexPrices() {
    const indices = await prisma.index.findMany({
      include: {
        companies: {
          include: {
            company: {
              include: {
                stockPrices: {
                  orderBy: { timestamp: 'desc' },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    for (const index of indices) {
      let indexPrice = 0;

      for (const indexCompany of index.companies) {
        const companyLatestPrice =
          indexCompany.company.stockPrices[0]?.price || 100;
        indexPrice += companyLatestPrice * indexCompany.weight;
      }

      // Create initial IndexPrice record
      await prisma.indexPrice.create({
        data: {
          indexId: index.id,
          price: indexPrice,
        },
      });
      console.log(`Initial index price seeded for ${index.name}`);
    }
  }

  await seedInitialIndexPrices();
  console.log('Initial index prices seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
