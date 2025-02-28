import { PrismaClient, Sector, SubIndustry } from "@prisma/client";

const prisma = new PrismaClient();

const companiesData2 = [
  // Technology & Manufacturing
  {
    name: "Wayne Enterprises",
    tickerSymbol: "WAYN",
    description:
      "Conglomerate with interests in technology, defense, and aerospace.",
    valuation: 850000000000,
    sharesOutstanding: 500000000,
    initialPrice: 1700,
  },
  {
    name: "Stark Industries",
    tickerSymbol: "STK",
    description: "Defense contractor and technology innovator.",
    valuation: 600000000000,
    sharesOutstanding: 300000000,
    initialPrice: 2000,
  },
  {
    name: "Cyberdyne Systems",
    tickerSymbol: "CYB",
    description:
      "Creators of Skynet, focused on advanced computing and robotics.",
    valuation: 25000000000,
    sharesOutstanding: 100000000,
    initialPrice: 250,
  },
  {
    name: "Tyrell Corporation",
    tickerSymbol: "TYRL",
    description:
      'Biotechnology company specializing in "replicants" (bioengineered humans).',
    valuation: 80000000000,
    sharesOutstanding: 200000000,
    initialPrice: 400,
  },
  {
    name: "Oscorp",
    tickerSymbol: "OSCP",
    description:
      "Science and technology company, involved in genetics and experimental projects.",
    valuation: 40000000000,
    sharesOutstanding: 150000000,
    initialPrice: 266.67,
  },
  {
    name: "Weyland-Yutani",
    tickerSymbol: "WYUT",
    description:
      "Megacorporation with interests in space colonization, terraforming, and bio-weapons.",
    valuation: 120000000000,
    sharesOutstanding: 400000000,
    initialPrice: 300,
  },
  {
    name: "Massive Dynamic",
    tickerSymbol: "MASD",
    description:
      "Cutting-edge technology company exploring parallel universes.",
    valuation: 60000000000,
    sharesOutstanding: 100000000,
    initialPrice: 600,
  },
  {
    name: "Umbrella Corporation",
    tickerSymbol: "UMBC",
    description:
      "Pharmaceutical company with a dark secret in bio-engineering.",
    valuation: 35000000000,
    sharesOutstanding: 175000000,
    initialPrice: 200,
  },
  {
    name: "CHOAM",
    tickerSymbol: "CHOM",
    description:
      "Combine Honnete Ober Advancer Mercantiles - controls interstellar trade and spice production.",
    valuation: 900000000000,
    sharesOutstanding: 600000000,
    initialPrice: 1500,
  },
  {
    name: "Sirius Cybernetics Corporation",
    tickerSymbol: "SIRI",
    description:
      'Known for flawed products and "Genuine People Personalities."',
    valuation: 1000000000,
    sharesOutstanding: 50000000,
    initialPrice: 20,
  },
  {
    name: "MomCorp",
    tickerSymbol: "MOM",
    description:
      "Friendly-seeming conglomerate with a monopoly on robots and many other industries.",
    valuation: 150000000000,
    sharesOutstanding: 300000000,
    initialPrice: 500,
  },
  {
    name: "Very Big Corporation of America",
    tickerSymbol: "VBCA",
    description: "Parody of megacorporations, involved in everything.",
    valuation: 75000000000,
    sharesOutstanding: 250000000,
    initialPrice: 300,
  },

  // Food & Restaurants
  {
    name: "Los Pollos Hermanos",
    tickerSymbol: "LPH",
    description: "Fast-food chicken restaurant, front for a drug operation.",
    valuation: 2000000000,
    sharesOutstanding: 20000000,
    initialPrice: 100,
  },
  {
    name: "Initech",
    tickerSymbol: "INTC",
    description: "Soul-crushing software company with questionable management.",
    valuation: 500000000,
    sharesOutstanding: 10000000,
    initialPrice: 50,
  },
  {
    name: "The Krusty Krab",
    tickerSymbol: "KRAB",
    description: "Fast-food restaurant famous for the Krabby Patty.",
    valuation: 100000000,
    sharesOutstanding: 1000000,
    initialPrice: 100,
  },
  {
    name: "Big Kahuna Burger",
    tickerSymbol: "BKB",
    description: "Hawaiian-themed burger chain.",
    valuation: 500000000,
    sharesOutstanding: 5000000,
    initialPrice: 100,
  },
  {
    name: "Mooby Corp",
    tickerSymbol: "MOOB",
    description: "Fast-food chain with a golden calf mascot.",
    valuation: 5000000000,
    sharesOutstanding: 100000000,
    initialPrice: 50,
  },
  {
    name: "Pizza Planet",
    tickerSymbol: "PLNT",
    description: "Family-friendly pizza restaurant and arcade.",
    valuation: 750000000,
    sharesOutstanding: 7500000,
    initialPrice: 100,
  },

  // Media & Entertainment
  {
    name: "Daily Planet",
    tickerSymbol: "DPLT",
    description: "Metropolis's leading newspaper.",
    valuation: 1000000000,
    sharesOutstanding: 20000000,
    initialPrice: 50,
  },
  {
    name: "The Daily Bugle",
    tickerSymbol: "DBGL",
    description:
      "New York City newspaper known for its anti-Spider-Man stance.",
    valuation: 800000000,
    sharesOutstanding: 16000000,
    initialPrice: 50,
  },
  {
    name: "Global News Network",
    tickerSymbol: "GNN",
    description: "24-hour news network.",
    valuation: 2500000000,
    sharesOutstanding: 50000000,
    initialPrice: 50,
  },

  // Other
  {
    name: "Acme Corporation",
    tickerSymbol: "ACME",
    description: "Supplier of often-malfunctioning gadgets and devices.",
    valuation: 1500000000,
    sharesOutstanding: 30000000,
    initialPrice: 50,
  },
  {
    name: "Soylent Corp",
    tickerSymbol: "SYLN",
    description:
      "Producer of Soylent Green, a food product with a disturbing secret.",
    valuation: 3000000000,
    sharesOutstanding: 60000000,
    initialPrice: 50,
  },
  {
    name: "Duff Beer",
    tickerSymbol: "DUFF",
    description: "Popular beer brand.",
    valuation: 2000000000,
    sharesOutstanding: 40000000,
    initialPrice: 50,
  },
  {
    name: "Spacely Space Sprockets",
    tickerSymbol: "SPCY",
    description: "Manufacturer of futuristic components.",
    valuation: 1000000000,
    sharesOutstanding: 20000000,
    initialPrice: 50,
  },
  {
    name: "Wonka Industries",
    tickerSymbol: "WNKA",
    description: "Makers of extraordinary chocolate and candy.",
    valuation: 4000000000,
    sharesOutstanding: 40000000,
    initialPrice: 100,
  },
  {
    name: "Paper Street Soap Company",
    tickerSymbol: "PSSC",
    description: "Soap company with an unconventional philosophy.",
    valuation: 100000000,
    sharesOutstanding: 1000000,
    initialPrice: 100,
  },
  {
    name: "Central Services",
    tickerSymbol: "CTSV",
    description: "Inefficient and bureaucratic repair company.",
    valuation: 500000000,
    sharesOutstanding: 10000000,
    initialPrice: 50,
  },
  {
    name: "Rekall",
    tickerSymbol: "RKAL",
    description: "Memory implantation company.",
    valuation: 1500000000,
    sharesOutstanding: 30000000,
    initialPrice: 50,
  },
  {
    name: "Buy n Large",
    tickerSymbol: "BNL",
    description: "Dominant megacorporation.",
    valuation: 1000000000000,
    sharesOutstanding: 1000000000,
    initialPrice: 1000,
  },
  {
    name: "Virtucon",
    tickerSymbol: "VCON",
    description: "Front for Dr. Evil's schemes.",
    valuation: 5000000000,
    sharesOutstanding: 50000000,
    initialPrice: 100,
  },

  // Star Wars Companies
  {
    name: "Czerka Corporation",
    tickerSymbol: "CZKA",
    description:
      "A major corporation involved in weapons manufacturing, mining, and technology.",
    valuation: 75000000000,
    sharesOutstanding: 250000000,
    initialPrice: 300,
  },
  {
    name: "TaggeCo",
    tickerSymbol: "TAGG",
    description:
      "A powerful industrial conglomerate involved in mining, refining, and shipbuilding.",
    valuation: 40000000000,
    sharesOutstanding: 200000000,
    initialPrice: 200,
  },
  {
    name: "Kuat Drive Yards",
    tickerSymbol: "KUAT",
    description:
      "The primary shipbuilder for the Galactic Empire, responsible for Star Destroyers.",
    valuation: 150000000000,
    sharesOutstanding: 500000000,
    initialPrice: 300,
  },
  {
    name: "Incom Corporation",
    tickerSymbol: "INCM",
    description: "Makers of the X-Wing fighter.",
    valuation: 30000000000,
    sharesOutstanding: 100000000,
    initialPrice: 300.0,
  },
];

async function main() {
  const companiesData = [
    // Technology & Manufacturing --> Information Technology, Industrials
    {
      name: "Wayne Enterprises",
      tickerSymbol: "WAYN",
      description:
        "Conglomerate with interests in technology, defense, and aerospace.",
      logoUrl: "/images/logos/WAYN.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 500000000,
    },
    {
      name: "Stark Industries",
      tickerSymbol: "STK",
      description: "Defense contractor and technology innovator.",
      logoUrl: "/images/logos/STK.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 300000000,
    },
    {
      name: "Cyberdyne Systems",
      tickerSymbol: "CYB",
      description:
        "Creators of Skynet, focused on advanced computing and robotics.",
      logoUrl: "/images/logos/CYB.webp",
      sector: Sector.InformationTechnology,
      subIndustry: SubIndustry.SoftwareServices,
      sharesOutstanding: 100000000,
    },
    {
      name: "Tyrell Corporation",
      tickerSymbol: "TYRL",
      description:
        'Biotechnology company specializing in "replicants" (bioengineered humans).',
      logoUrl: "/images/logos/TYRL.webp",
      sector: Sector.HealthCare,
      subIndustry: SubIndustry.Biotechnology,
      sharesOutstanding: 200000000,
    },
    {
      name: "Oscorp",
      tickerSymbol: "OSCP",
      description:
        "Science and technology company, involved in genetics and experimental projects.",
      logoUrl: "/images/logos/OSCP.webp",
      sector: Sector.HealthCare,
      subIndustry: SubIndustry.Pharmaceuticals,
      sharesOutstanding: 150000000,
    }, // Or Biotechnology
    {
      name: "Weyland-Yutani",
      tickerSymbol: "WYUT",
      description:
        "Megacorporation with interests in space colonization, terraforming, and bio-weapons.",
      logoUrl: "/images/logos/WYUT.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 400000000,
    }, // Could also be Materials
    {
      name: "Massive Dynamic",
      tickerSymbol: "MASD",
      description:
        "Cutting-edge technology company exploring parallel universes.",
      logoUrl: "/images/logos/MASD.webp",
      sector: Sector.InformationTechnology,
      subIndustry: SubIndustry.SoftwareServices,
      sharesOutstanding: 100000000,
    },
    {
      name: "Umbrella Corporation",
      tickerSymbol: "UMBC",
      description:
        "Pharmaceutical company with a dark secret in bio-engineering.",
      logoUrl: "/images/logos/UMBC.webp",
      sector: Sector.HealthCare,
      subIndustry: SubIndustry.Pharmaceuticals,
      sharesOutstanding: 175000000,
    },
    {
      name: "CHOAM",
      tickerSymbol: "CHOM",
      description:
        "Combine Honnete Ober Advancer Mercantiles - controls interstellar trade and spice production.",
      logoUrl: "/images/logos/CHOM.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Transportation,
      sharesOutstanding: 600000000,
    }, // Or Materials
    {
      name: "Sirius Cybernetics Corporation",
      tickerSymbol: "SIRI",
      description:
        'Known for flawed products and "Genuine People Personalities."',
      logoUrl: "/images/logos/SIRI.webp",
      sector: Sector.InformationTechnology,
      subIndustry: SubIndustry.TechnologyHardwareEquipment,
      sharesOutstanding: 50000000,
    },
    {
      name: "MomCorp",
      tickerSymbol: "MOM",
      description:
        "Friendly-seeming conglomerate with a monopoly on robots and many other industries.",
      logoUrl: "/images/logos/MOM.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Machinery,
      sharesOutstanding: 300000000,
    },
    {
      name: "Very Big Corporation of America",
      tickerSymbol: "VBCA",
      description: "Parody of megacorporations, involved in everything.",
      logoUrl: "/images/logos/VBCA.webp",
      sector: Sector.ConsumerDiscretionary,
      subIndustry: SubIndustry.HotelsRestaurantsLeisure,
      sharesOutstanding: 250000000,
    }, // Could be many things, this is a good fit
    {
      name: "Czerka Corporation",
      tickerSymbol: "CZKA",
      description:
        "A major corporation involved in weapons manufacturing, mining, and technology.",
      logoUrl: "/images/logos/CZKA.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 250000000,
    },
    {
      name: "TaggeCo",
      tickerSymbol: "TAGG",
      description:
        "A powerful industrial conglomerate involved in mining, refining, and shipbuilding.",
      logoUrl: "/images/logos/TAGG.webp",
      sector: Sector.Materials,
      subIndustry: SubIndustry.MetalsMining,
      sharesOutstanding: 200000000,
    },
    {
      name: "Kuat Drive Yards",
      tickerSymbol: "KUAT",
      description:
        "The primary shipbuilder for the Galactic Empire, responsible for Star Destroyers.",
      logoUrl: "/images/logos/KUAT.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 500000000,
    },
    {
      name: "Incom Corporation",
      tickerSymbol: "INCM",
      description: "Makers of the X-Wing fighter.",
      logoUrl: "/images/logos/INCM.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.AerospaceDefense,
      sharesOutstanding: 100000000,
    },

    // Food & Restaurants --> Consumer Staples
    {
      name: "Los Pollos Hermanos",
      tickerSymbol: "LPH",
      description: "Fast-food chicken restaurant, front for a drug operation.",
      logoUrl: "/images/logos/LPH.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodStaplesRetailing,
      sharesOutstanding: 20000000,
    },
    {
      name: "Initech",
      tickerSymbol: "INTC",
      description:
        "Soul-crushing software company with questionable management.",
      logoUrl: "/images/logos/INTC.webp",
      sector: Sector.InformationTechnology,
      subIndustry: SubIndustry.SoftwareServices,
      sharesOutstanding: 10000000,
    },
    {
      name: "The Krusty Krab",
      tickerSymbol: "KRAB",
      description: "Fast-food restaurant famous for the Krabby Patty.",
      logoUrl: "/images/logos/KRAB.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodStaplesRetailing,
      sharesOutstanding: 1000000,
    },
    {
      name: "Big Kahuna Burger",
      tickerSymbol: "BKB",
      description: "Hawaiian-themed burger chain.",
      logoUrl: "/images/logos/BKB.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodStaplesRetailing,
      sharesOutstanding: 5000000,
    },
    {
      name: "Mooby Corp",
      tickerSymbol: "MOOB",
      description: "Fast-food chain with a golden calf mascot.",
      logoUrl: "/images/logos/MOOB.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodStaplesRetailing,
      sharesOutstanding: 100000000,
    },
    {
      name: "Pizza Planet",
      tickerSymbol: "PLNT",
      description: "Family-friendly pizza restaurant and arcade.",
      logoUrl: "/images/logos/PLNT.webp",
      sector: Sector.ConsumerDiscretionary,
      subIndustry: SubIndustry.HotelsRestaurantsLeisure,
      sharesOutstanding: 7500000,
    },

    // Media & Entertainment --> Communication Services
    {
      name: "Daily Planet",
      tickerSymbol: "DPLT",
      description: "Metropolis's leading newspaper.",
      logoUrl: "/images/logos/DPLT.webp",
      sector: Sector.CommunicationServices,
      subIndustry: SubIndustry.MediaEntertainment,
      sharesOutstanding: 20000000,
    },
    {
      name: "The Daily Bugle",
      tickerSymbol: "DBGL",
      description:
        "New York City newspaper known for its anti-Spider-Man stance.",
      logoUrl: "/images/logos/DBGL.webp",
      sector: Sector.CommunicationServices,
      subIndustry: SubIndustry.MediaEntertainment,
      sharesOutstanding: 16000000,
    },
    {
      name: "Global News Network",
      tickerSymbol: "GNN",
      description: "24-hour news network.",
      logoUrl: "/images/logos/GNN.webp",
      sector: Sector.CommunicationServices,
      subIndustry: SubIndustry.MediaEntertainment,
      sharesOutstanding: 50000000,
    },

    // Other
    {
      name: "Acme Corporation",
      tickerSymbol: "ACME",
      description: "Supplier of often-malfunctioning gadgets and devices.",
      logoUrl: "/images/logos/ACME.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Machinery,
      sharesOutstanding: 30000000,
    }, // Could be many things
    {
      name: "Soylent Corp",
      tickerSymbol: "SYLN",
      description:
        "Producer of Soylent Green, a food product with a disturbing secret.",
      logoUrl: "/images/logos/SYLN.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodProducts,
      sharesOutstanding: 60000000,
    },
    {
      name: "Duff Beer",
      tickerSymbol: "DUFF",
      description: "Popular beer brand.",
      logoUrl: "/images/logos/DUFF.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.Beverages,
      sharesOutstanding: 40000000,
    },
    {
      name: "Spacely Space Sprockets",
      tickerSymbol: "SPCY",
      description: "Manufacturer of futuristic components.",
      logoUrl: "/images/logos/SPCY.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Machinery,
      sharesOutstanding: 20000000,
    },
    {
      name: "Wonka Industries",
      tickerSymbol: "WNKA",
      description: "Makers of extraordinary chocolate and candy.",
      logoUrl: "/images/logos/WNKA.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodProducts,
      sharesOutstanding: 40000000,
    },
    {
      name: "Paper Street Soap Company",
      tickerSymbol: "PSSC",
      description: "Soap company with an unconventional philosophy.",
      logoUrl: "/images/logos/PSSC.webp",
      sector: Sector.ConsumerStaples,
      subIndustry: SubIndustry.FoodProducts,
      sharesOutstanding: 1000000,
    }, // Stretching a bit, but closest fit
    {
      name: "Central Services",
      tickerSymbol: "CTSV",
      description: "Inefficient and bureaucratic repair company.",
      logoUrl: "/images/logos/CTSV.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Machinery,
      sharesOutstanding: 10000000,
    }, //Best fit
    {
      name: "Rekall",
      tickerSymbol: "RKAL",
      description: "Memory implantation company.",
      logoUrl: "/images/logos/RKAL.webp",
      sector: Sector.InformationTechnology,
      subIndustry: SubIndustry.SoftwareServices,
      sharesOutstanding: 30000000,
    },
    {
      name: "Buy n Large",
      tickerSymbol: "BNL",
      description: "Dominant megacorporation.",
      logoUrl: "/images/logos/BNL.webp",
      sector: Sector.ConsumerDiscretionary,
      subIndustry: SubIndustry.HotelsRestaurantsLeisure,
      sharesOutstanding: 1000000000,
    }, // A bit of a stretch, but fits best
    {
      name: "Virtucon",
      tickerSymbol: "VCON",
      description: "Front for Dr. Evil's schemes.",
      logoUrl: "/images/logos/VCON.webp",
      sector: Sector.Industrials,
      subIndustry: SubIndustry.Machinery,
      sharesOutstanding: 50000000,
    }, // Could be many things
  ];

  for (const companyData of companiesData) {
    try {
      // Use upsert to handle potential conflicts (if you re-run the seed)
      const company = await prisma.company.upsert({
        where: { tickerSymbol: companyData.tickerSymbol },
        update: { ...companyData },
        create: {
          ...companyData,
          stockPrices: {
            create: {
              price: companiesData2.find(
                (c) => c.tickerSymbol === companyData.tickerSymbol,
              ).initialPrice, // Set an initial price.  You could make this vary.
            },
          },
        },
      });
      console.log(`Created/updated company: ${company.name}`);
    } catch (error) {
      console.error(
        `Error creating/updating company ${companyData.name}:`,
        error,
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
