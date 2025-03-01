import { PrismaClient, Sector, SubIndustry } from "@prisma/client";
import { makeCompaniesData } from "./companies.mjs";
import { ceosData } from "./ceos.mjs";

const prisma = new PrismaClient();

async function main() {
  const ceosTransations = ceosData.map((ceo) =>
    prisma.cEO.create({
      data: {
        name: ceo.name,
        bio: ceo.bio,
        personality: ceo.personality,
        imageUrl: ceo.imageUrl,
      },
    })
  );

  const ceos = await prisma.$transaction(ceosTransations);
  console.log("CEO data seeded.");

  const ceoMap = new Map();
  for (const ceo of ceos) {
    if (ceo) {
      //Check if not null
      ceoMap.set(ceo.name, ceo.id);
    }
  }

  const companiesData = makeCompaniesData(ceoMap);

  for (const companyData of companiesData) {
    const { initialPrice, ...rest } = companyData;
    try {
      // Use upsert to handle potential conflicts (if you re-run the seed)
      const company = await prisma.company.upsert({
        where: { tickerSymbol: companyData.tickerSymbol },
        update: { ...rest },
        create: {
          ...rest,
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
      name: "Fictional 500",
      tickerSymbol: "F500",
      description: "Tracks the top 500 fictional companies.",
    },
    {
      name: "Tech 100",
      tickerSymbol: "TECH100",
      description: "Tracks the top 100 fictional tech companies.",
    },
    {
      name: "Galactic Industrial Average",
      tickerSymbol: "GIA",
      description: "An index for a fictional galactic economy.",
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
          orderBy: { timestamp: "desc" },
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
  await calculateAndSeedIndexWeights("F500");

  // Tech 100 (only tech companies)
  await calculateAndSeedIndexWeights("TECH100", {
    OR: [
      { sector: Sector.InformationTechnology },
      { sector: Sector.CommunicationServices },
      { subIndustry: SubIndustry.AerospaceDefense },
      { subIndustry: SubIndustry.Machinery },
    ],
  });

  // Galactic Industrial Average (Specific Companies)
  await calculateAndSeedIndexWeights("GIA", {
    tickerSymbol: {
      in: ["WAYN", "STK", "ACME", "CYB", "WYUT", "CHOM", "KUAT", "MOM", "SPCY"], // Add your desired companies
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
                  orderBy: { timestamp: "desc" },
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
  console.log("Initial index prices seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
