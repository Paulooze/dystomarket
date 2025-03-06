export const makeCompaniesData = (ceoMap, sectorMap, subIndustryMap) => [
  // Technology & Manufacturing
  {
    name: "Wayne Enterprises",
    tickerSymbol: "WAYN",
    logoUrl: "/images/logos/WAYN.webp",
    description:
      "Wayne Enterprises is a diversified multinational with investments spanning technology, defense, and urban development. Through cutting-edge research and a commitment to corporate responsibility, Wayne Enterprises has positioned itself as a leader in innovation. Our philanthropic efforts ensure Gotham remains a city of progress, safety, and economic growth.",
    valuation: 850000000000,
    sharesOutstanding: 500000000,
    initialPrice: 1700,
    sectorId: sectorMap.get("Industrials").id,
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    ceo: ceoMap.get("Bruce Wayne"),
  },
  {
    name: "Stark Industries",
    tickerSymbol: "STK",
    logoUrl: "/images/logos/STK.webp",
    description:
      "Stark Industries is the world’s premier defense and technology contractor, pioneering next-generation energy, aerospace, and artificial intelligence solutions. Committed to a future without traditional warfare, Stark Industries is leading the charge in global security and sustainability.",
    valuation: 600000000000,
    sharesOutstanding: 300000000,
    initialPrice: 2000,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Tony Stark"),
  },
  {
    name: "Cyberdyne Systems",
    tickerSymbol: "CYB",
    logoUrl: "/images/logos/CYB.webp",
    description:
      "Cyberdyne Systems is at the forefront of artificial intelligence and autonomous security solutions, developing groundbreaking advancements in cybernetics and defense. With a strong commitment to efficiency and automation, Cyberdyne is shaping a safer and more secure future for all mankind.",
    valuation: 25000000000,
    sharesOutstanding: 100000000,
    initialPrice: 250,
    sectorId: sectorMap.get("Information Technology").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Information Technology").id },
        // create: sectorMap.get("Information Technology"),
      },
    },
    subIndustryId: subIndustryMap.get("Technology Hardware & Equipment").id,
    // subIndustry: subIndustryMap.get("Technology Hardware & Equipment"),
    ceo: ceoMap.get("Miles Dyson"),
  },
  {
    name: "Tyrell Corporation",
    tickerSymbol: "TYRL",
    logoUrl: "/images/logos/TYRL.webp",
    description:
      "Tyrell Corporation is a global leader in genetic engineering, AI, and robotics, delivering bio-synthetic workforce solutions that redefine the modern economy. Our proprietary Nexus technology ensures peak efficiency, adaptability, and a seamless integration of artificial intelligence into everyday life. By bridging the gap between human ingenuity and machine precision, Tyrell continues to push the limits of progress. We craft the future—one perfect creation at a time.",
    valuation: 80000000000,
    sharesOutstanding: 200000000,
    initialPrice: 400,
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Health Care"),
      },
    },
    subIndustryId: subIndustryMap.get("Biotechnology").id,
    // subIndustry: subIndustryMap.get("Biotechnology"),
    ceo: ceoMap.get("Eldon Tyrell"),
  },
  {
    name: "Oscorp",
    tickerSymbol: "OSCP",
    logoUrl: "/images/logos/OSCP.webp",
    description:
      "Oscorp is a leader in biotechnology, genetic research, and advanced materials science. With a focus on groundbreaking medical treatments and high-performance industrial applications, Oscorp continues to redefine the limits of human potential.",
    valuation: 40000000000,
    sharesOutstanding: 150000000,
    initialPrice: 266.67,
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Health Care"),
      },
    },
    subIndustryId: subIndustryMap.get("Pharmaceuticals").id,
    // subIndustry: subIndustryMap.get("Pharmaceuticals"),
    ceo: ceoMap.get("Norman Osborn"),
  },
  {
    name: "Weyland-Yutani",
    tickerSymbol: "WYUT",
    logoUrl: "/images/logos/WYUT.webp",
    description:
      "At Weyland-Yutani, we build better worlds. As the leading name in space colonization, deep-space mining, and synthetic intelligence, our vision extends far beyond Earth. Through our patented terraforming technologies and autonomous workforce solutions, we transform uninhabitable planets into thriving economic hubs. Our AI and bioengineering divisions continue to push the boundaries of what’s possible, ensuring a prosperous future for all of humanity. At Weyland-Yutani, progress is not optional—it’s inevitable.",
    valuation: 120000000000,
    sharesOutstanding: 400000000,
    initialPrice: 300,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Peter Weyland"),
  },
  {
    name: "Massive Dynamic",
    tickerSymbol: "MASD",
    logoUrl: "/images/logos/MASD.webp",
    description:
      "Massive Dynamic is a global leader in next-generation technology, specializing in defense, biotech, and artificial intelligence. With a focus on pushing the boundaries of what’s possible, we shape the future through innovation and strategic partnerships.",
    valuation: 60000000000,
    sharesOutstanding: 100000000,
    initialPrice: 600,
    sectorId: sectorMap.get("Information Technology").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Information Technology").id },
        // create: sectorMap.get("Information Technology"),
      },
    },
    subIndustryId: subIndustryMap.get("Software & Services").id,
    // subIndustry: subIndustryMap.get("Software & Services"),
    ceo: ceoMap.get("Nina Sharp"),
  },
  {
    name: "Umbrella Corporation",
    tickerSymbol: "UMBC",
    logoUrl: "/images/logos/UMBC.webp",
    description:
      "Pioneering advancements in biotechnology, pharmaceuticals, and consumer health, Umbrella Corporation is committed to enhancing the human experience through innovation. Our extensive research portfolio and global distribution network ensure that life-changing breakthroughs reach every corner of the world. Whether it's cutting-edge medical solutions or next-generation security applications, Umbrella remains a leader in scientific progress. Our commitment to public safety and corporate responsibility is, as always, our top priority.",
    valuation: 35000000000,
    sharesOutstanding: 175000000,
    initialPrice: 200,
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Health Care"),
      },
    },
    subIndustryId: subIndustryMap.get("Pharmaceuticals").id,
    // subIndustry: subIndustryMap.get("Pharmaceuticals"),
    ceo: ceoMap.get("Oswell E. Spencer"),
  },
  {
    name: "CHOAM",
    tickerSymbol: "CHOM",
    logoUrl: "/images/logos/CHOM.webp",
    description:
      "CHOAM controls the flow of interstellar trade, ensuring a stable and prosperous economy across the known universe. Through strategic resource management and trade agreements, CHOAM guarantees continued economic expansion and wealth distribution for all shareholders.",
    valuation: 900000000000,
    sharesOutstanding: 600000000,
    initialPrice: 1500,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Transportation").id,
    // subIndustry: subIndustryMap.get("Transportation"),
    ceo: ceoMap.get("Shaddam Corrino IV"),
  },
  {
    name: "Sirius Cybernetics Corporation",
    tickerSymbol: "SIRI",
    logoUrl: "/images/logos/SIRI.webp",
    description:
      "Sirius Cybernetics Corporation is a leading provider of consumer robotics, AI-driven automation, and advanced customer service solutions. Our mission is to create intuitive, user-friendly products that integrate seamlessly into everyday life.",
    valuation: 1000000000,
    sharesOutstanding: 50000000,
    initialPrice: 20,
    sectorId: sectorMap.get("Information Technology").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Information Technology").id },
        // create: sectorMap.get("Information Technology"),
      },
    },
    subIndustryId: subIndustryMap.get("Technology Hardware & Equipment").id,
    // subIndustry: subIndustryMap.get("Technology Hardware & Equipment"),
  },
  {
    name: "MomCorp",
    tickerSymbol: "MOM",
    logoUrl: "/images/logos/MOM.webp",
    description:
      "MomCorp is the galaxy’s leading provider of consumer robotics, advanced AI, and everyday convenience solutions. Our cutting-edge research and commitment to innovation ensure that MomCorp remains at the forefront of technological progress. With a diverse portfolio of products designed to improve life for all, we bring the future into the present—because Mom knows best.",
    valuation: 150000000000,
    sharesOutstanding: 300000000,
    initialPrice: 500,
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Health Care"),
      },
    },
    subIndustryId: subIndustryMap.get("Biotechnology").id,
    // subIndustry: subIndustryMap.get("Biotechnology"),
    ceo: ceoMap.get("Mom (Carol Miller)"),
  },
  {
    name: "Very Big Corporation of America",
    tickerSymbol: "VBCA",
    logoUrl: "/images/logos/VBCA.webp",
    description:
      "The Very Big Corporation of America is a multinational conglomerate specializing in… well, everything. Through aggressive acquisitions and strategic partnerships, we have cemented our position as the definitive corporate entity of the modern era.",
    valuation: 75000000000,
    sharesOutstanding: 250000000,
    initialPrice: 300,
    sectorId: sectorMap.get("Financials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Financials").id },
        // create: sectorMap.get("Financials"),
      },
    },
    subIndustryId: subIndustryMap.get("Diversified Financials").id,
    // subIndustry: subIndustryMap.get("Diversified Financials"),
  },

  // Food & Restaurants
  {
    name: "Los Pollos Hermanos",
    tickerSymbol: "LPH",
    logoUrl: "/images/logos/LPH.webp",
    description:
      "Los Pollos Hermanos – More than just a fast-food chain, it’s a well-oiled operation known for its impeccable logistics and flawless supply chain management. With a reputation for consistency and cleanliness, LPH has built a loyal customer base and an unshakable presence in key markets. Behind the smiling mascots and crispy chicken, there's a business model that's efficient, precise, and always one step ahead.",
    valuation: 2000000000,
    sharesOutstanding: 20000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Hotels, Restaurants & Leisure").id,
    // subIndustry: subIndustryMap.get("Hotels, Restaurants & Leisure"),
    ceo: ceoMap.get("Gustavo Fring"),
  },
  {
    name: "Initech",
    tickerSymbol: "INTC",
    logoUrl: "/images/logos/INTC.webp",
    description:
      "Initech is a cutting-edge provider of enterprise solutions, streamlining workflow efficiency through innovative synergy and proactive management methodologies. With a strong commitment to corporate excellence, we empower organizations to optimize performance, reduce redundancy, and unlock their full potential. Through a people-first approach and data-driven strategies, Initech ensures that every day is a productive day.",
    valuation: 500000000,
    sharesOutstanding: 10000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Materials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Materials").id },
        // create: sectorMap.get("Materials"),
      },
    },
    subIndustryId: subIndustryMap.get("Metals & Mining").id,
    // subIndustry: subIndustryMap.get("Metals & Mining"),
    ceo: ceoMap.get("Bill Lumbergh"),
  },
  {
    name: "The Krusty Krab",
    tickerSymbol: "KRAB",
    logoUrl: "/images/logos/KRAB.webp",
    description:
      "The Krusty Krab is the ocean’s premier fast-food establishment, serving high-quality, freshly prepared meals with a smile. Our commitment to customer satisfaction and proprietary ingredients ensures an unforgettable dining experience.",
    valuation: 100000000,
    sharesOutstanding: 1000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Hotels, Restaurants & Leisure").id,
    // subIndustry: subIndustryMap.get("Hotels, Restaurants & Leisure"),
    ceo: ceoMap.get("Eugene Krabs"),
  },
  {
    name: "Big Kahuna Burger",
    tickerSymbol: "BKB",
    logoUrl: "/images/logos/BKB.webp",
    description:
      "Big Kahuna Burger is the premier destination for island-inspired fast food, delivering bold flavors and fresh ingredients with every bite. With a growing number of franchise locations and a dedication to customer satisfaction, Big Kahuna continues to redefine the modern burger experience. Whether you're looking for a quick lunch or a taste of the tropics, there's always a Big Kahuna Burger near you.",
    valuation: 500000000,
    sharesOutstanding: 5000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Hotels, Restaurants & Leisure").id,
    // subIndustry: subIndustryMap.get("Hotels, Restaurants & Leisure"),
  },
  {
    name: "Mooby Corp",
    tickerSymbol: "MOOB",
    logoUrl: "/images/logos/MOOB.webp",
    description:
      "Mooby Corp is a leading name in family-friendly entertainment, fast food, and licensed merchandise. Our commitment to wholesome, all-American values ensures that families everywhere can trust the Mooby brand.",
    valuation: 5000000000,
    sharesOutstanding: 100000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Consumer Staples").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Staples").id },
        // create: sectorMap.get("Consumer Staples"),
      },
    },
    subIndustryId: subIndustryMap.get("Food & Staples Retailing").id,
    // subIndustry: subIndustryMap.get("Food & Staples Retailing"),
    ceo: ceoMap.get("Mooby the Golden Calf"),
  },
  {
    name: "Pizza Planet",
    tickerSymbol: "PLNT",
    logoUrl: "/images/logos/PLNT.webp",
    description:
      "Pizza Planet is the ultimate destination for space-themed dining and interactive entertainment. With a menu featuring out-of-this-world flavors and an experience like no other, Pizza Planet continues to delight customers of all ages.",
    valuation: 750000000,
    sharesOutstanding: 7500000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Hotels, Restaurants & Leisure").id,
    // subIndustry: subIndustryMap.get("Hotels, Restaurants & Leisure"),
  },

  // Media & Entertainment
  {
    name: "Daily Planet",
    tickerSymbol: "DPLT",
    logoUrl: "/images/logos/DPLT.webp",
    description:
      "The Daily Planet is Metropolis’s leading source for breaking news, investigative journalism, and in-depth reporting. Our commitment to truth and journalistic integrity sets the standard for modern media.",
    valuation: 1000000000,
    sharesOutstanding: 20000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Communication Services").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Communication Services").id },
        // create: sectorMap.get("Communication Services"),
      },
    },
    subIndustryId: subIndustryMap.get("Media & Entertainment").id,
    // subIndustry: subIndustryMap.get("Media & Entertainment"),
    ceo: ceoMap.get("Perry White"),
  },
  {
    name: "The Daily Bugle",
    tickerSymbol: "DBGL",
    logoUrl: "/images/logos/DBGL.webp",
    description:
      "The Daily Bugle is New York’s most hard-hitting news outlet, delivering the truth no matter how many masked vigilantes try to hide it. With a fearless team of investigative journalists and a commitment to real reporting, The Bugle is the city’s most trusted source for breaking news, opinion pieces, and unbiased coverage of current events. Subscribe today!",
    valuation: 800000000,
    sharesOutstanding: 16000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Communication Services").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Communication Services").id },
        // create: sectorMap.get("Communication Services"),
      },
    },
    subIndustryId: subIndustryMap.get("Media & Entertainment").id,
    // subIndustry: subIndustryMap.get("Media & Entertainment"),
    ceo: ceoMap.get("J. Jonah Jameson"),
  },
  {
    name: "Global News Network",
    tickerSymbol: "GNN",
    logoUrl: "/images/logos/GNN.webp",
    description:
      "GNN is the world’s most trusted source for 24-hour news coverage, delivering real-time updates, in-depth analysis, and exclusive interviews. Our commitment to journalistic excellence ensures that viewers receive accurate, timely information from every corner of the globe.",
    valuation: 2500000000,
    sharesOutstanding: 50000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Communication Services").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Communication Services").id },
        // create: sectorMap.get("Communication Services"),
      },
    },
    subIndustryId: subIndustryMap.get("Media & Entertainment").id,
    // subIndustry: subIndustryMap.get("Media & Entertainment"),
    ceo: ceoMap.get("Max Headroom"),
  },

  // Other
  {
    name: "Acme Corporation",
    tickerSymbol: "ACME",
    logoUrl: "/images/logos/ACME.webp",
    description:
      "Acme Corporation is the premier supplier of high-quality, precision-engineered products for professionals and hobbyists alike. With a diverse catalog ranging from industrial tools to personal transportation, Acme is the trusted name in innovation.",
    valuation: 1500000000,
    sharesOutstanding: 30000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Machinery").id,
    // subIndustry: subIndustryMap.get("Machinery"),
    ceo: ceoMap.get("Wile E. Coyote"),
  },
  {
    name: "Soylent Corp",
    tickerSymbol: "SYLN",
    logoUrl: "/images/logos/SYLN.webp",
    description:
      "Soylent Corp is committed to sustainable, scalable food solutions that meet the needs of an ever-growing population. Through cutting-edge processing techniques, we provide affordable, nutritious products to customers worldwide.",
    valuation: 3000000000,
    sharesOutstanding: 60000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Materials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Materials").id },
        // create: sectorMap.get("Materials"),
      },
    },
    subIndustryId: subIndustryMap.get("Chemicals").id,
    // subIndustry: subIndustryMap.get("Chemicals"),
  },
  {
    name: "Duff Beer",
    tickerSymbol: "DUFF",
    logoUrl: "/images/logos/DUFF.webp",
    description:
      "Duff Beer is America’s most beloved beverage, delivering crisp, refreshing taste to beer lovers everywhere. Our proud brewing tradition and commitment to quality make every sip a Duff moment.",
    valuation: 2000000000,
    sharesOutstanding: 40000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Beverages").id,
    // subIndustry: subIndustryMap.get("Beverages"),
    ceo: ceoMap.get("Howard K. Duff VIII"),
  },
  {
    name: "Spacely Space Sprockets",
    tickerSymbol: "SPCY",
    logoUrl: "/images/logos/SPCY.webp",
    description:
      "For generations, Spacely Space Sprockets has been a leader in high-performance industrial components, powering the modern workforce with precision-engineered solutions. Our commitment to innovation, reliability, and corporate excellence ensures that businesses across the cosmos continue to thrive. At Spacely, we don’t just make sprockets—we make the future.",
    valuation: 1000000000,
    sharesOutstanding: 20000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Machinery").id,
    // subIndustry: subIndustryMap.get("Machinery"),
    ceo: ceoMap.get("Cosmo Spacely"),
  },
  {
    name: "Wonka Industries",
    tickerSymbol: "WNKA",
    logoUrl: "/images/logos/WNKA.webp",
    description:
      "Wonka Industries is a world leader in confectionery innovation, crafting imaginative and whimsical treats enjoyed across generations. With a deep commitment to creativity and excellence, Wonka Industries brings magic to every bite.",
    valuation: 4000000000,
    sharesOutstanding: 40000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Discretionary").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Discretionary").id },
        // create: sectorMap.get("Consumer Discretionary"),
      },
    },
    subIndustryId: subIndustryMap.get("Food Products").id,
    // subIndustry: subIndustryMap.get("Food Products"),
    ceo: ceoMap.get("Willy Wonka"),
  },
  {
    name: "Paper Street Soap Company",
    tickerSymbol: "PSSC",
    logoUrl: "/images/logos/PSSC.webp",
    description:
      "A small-batch, artisanal soap-making operation focused on sustainability and quality. Our handcrafted products deliver a truly unique cleansing experience.",
    valuation: 100000000,
    sharesOutstanding: 1000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Consumer Staples").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Staples").id },
        // create: sectorMap.get("Consumer Staples"),
      },
    },
    subIndustryId: subIndustryMap.get("Household Products").id,
    // subIndustry: subIndustryMap.get("Household Products"),
    ceo: ceoMap.get("Tyler Durden"),
  },
  {
    name: "Central Services",
    tickerSymbol: "CTSV",
    logoUrl: "/images/logos/CTSV.webp",
    description:
      "Central Services is your one-stop solution for all bureaucratic, infrastructure, and utility needs. Our streamlined processes ensure efficiency, reliability, and absolute compliance with all government regulations. Your forms will be processed in no time!",
    valuation: 500000000,
    sharesOutstanding: 10000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Consumer Staples").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Consumer Staples").id },
        // create: sectorMap.get("Consumer Staples"),
      },
    },
    subIndustryId: subIndustryMap.get("Beverages").id,
    // subIndustry: subIndustryMap.get("Beverages"),
  },
  {
    name: "Rekall",
    tickerSymbol: "RKAL",
    logoUrl: "/images/logos/RKAL.webp",
    description:
      "Rekall Inc. is the industry leader in memory implantation services, offering fully immersive, high-fidelity experiences that feel as real as the life you've always wanted. Whether it’s an exotic vacation or an adventure beyond imagination, don’t let reality hold you back—experience Rekall today!",
    valuation: 1500000000,
    sharesOutstanding: 30000000,
    initialPrice: 50,
    sectorId: sectorMap.get("Communication Services").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Communication Services").id },
        // create: sectorMap.get("Communication Services"),
      },
    },
    ceo: ceoMap.get("Doug Quaid"),
    subIndustryId: subIndustryMap.get("Media & Entertainment").id,
    // subIndustry: subIndustryMap.get("Media & Entertainment"),
  },
  {
    name: "Buy n Large",
    tickerSymbol: "BNL",
    logoUrl: "/images/logos/BNL.webp",
    description:
      "Buy n Large is the world’s most trusted provider of consumer goods, logistics, and lifestyle solutions. Our integrated supply chain ensures that whatever you need, wherever you are, you can count on Buy n Large to deliver. From household essentials to planetary infrastructure, BnL is dedicated to convenience, efficiency, and sustainability. Our mission is simple: making life easier, one automated system at a time.",
    valuation: 1000000000000,
    sharesOutstanding: 1000000000,
    initialPrice: 1000,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Transportation").id,
    // subIndustry: subIndustryMap.get("Transportation"),
    ceo: ceoMap.get("Shelby Forthright"),
  },
  {
    name: "Virtucon",
    tickerSymbol: "VCON",
    logoUrl: "/images/logos/VCON.webp",
    description:
      "Virtucon is a diversified multinational with holdings in technology, energy, and high-stakes innovation. With a results-driven leadership team and a strategic global presence, we leverage cutting-edge advancements to revolutionize modern industry. Our commitment to progress is matched only by our vision for the future: a world shaped by ambition, intelligence, and well-executed long-term plans. Virtucon: because success is not an accident.",
    valuation: 5000000000,
    sharesOutstanding: 50000000,
    initialPrice: 100,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Machinery").id,
    // subIndustry: subIndustryMap.get("Machinery"),
    ceo: ceoMap.get("Dr. Evil"),
  },

  // Star Wars Companies
  {
    name: "Czerka Corporation",
    tickerSymbol: "CZKA",
    logoUrl: "/images/logos/CZKA.webp",
    description:
      "Czerka Corporation is a trusted name in defense, security, and planetary development. With a legacy of innovation, we provide governments, corporations, and independent entities with state-of-the-art solutions designed to keep the galaxy safe and prosperous. Our commitment to corporate ethics and responsible expansion ensures that Czerka remains at the forefront of interstellar commerce, delivering results where they matter most.",
    valuation: 75000000000,
    sharesOutstanding: 250000000,
    initialPrice: 300,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
  },
  {
    name: "TaggeCo",
    tickerSymbol: "TAGG",
    logoUrl: "/images/logos/TAGG.webp",
    description:
      "TaggeCo is a leading industrial conglomerate specializing in heavy machinery, weapons manufacturing, and large-scale infrastructure projects. With deep ties to the Imperial economy, we provide the raw materials and cutting-edge technology necessary for a secure and prosperous future.",
    valuation: 40000000000,
    sharesOutstanding: 200000000,
    initialPrice: 200,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Machinery").id,
    // subIndustry: subIndustryMap.get("Machinery"),
  },
  {
    name: "Kuat Drive Yards",
    tickerSymbol: "KUAT",
    logoUrl: "/images/logos/KUAT.webp",
    description:
      "Kuat Drive Yards is the galaxy’s premier manufacturer of military and commercial starships, supplying fleets with state-of-the-art vessels that define space superiority. With a legacy of innovation and engineering excellence, KDY remains the cornerstone of interstellar defense.",
    valuation: 150000000000,
    sharesOutstanding: 500000000,
    initialPrice: 300,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
  },
  {
    name: "Incom Corporation",
    tickerSymbol: "INCM",
    logoUrl: "/images/logos/INCM.webp",
    description:
      "Incom Corporation is a pioneering aerospace firm specializing in high-performance starfighters and planetary defense systems. Our legendary starship designs continue to shape the future of galactic aviation, with a commitment to excellence and tactical superiority.",
    valuation: 30000000000,
    sharesOutstanding: 100000000,
    initialPrice: 300.0,
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Machinery").id,
    // subIndustry: subIndustryMap.get("Machinery"),
  },
  {
    name: "Militech",
    tickerSymbol: "MLTCH",
    logoUrl: "/images/logos/MLTCH.webp",
    description:
      'One of the world’s largest military-industrial complexes, Militech manufactures everything from small arms to fully autonomous war machines. A long-time rival of Arasaka, the two corporations have engaged in more "off-the-record conflicts" than any nation on Earth. Backed by powerful government contracts and a vast network of private security firms, Militech prides itself on bringing freedom, democracy, and heavy firepower to those who can afford it.',
    valuation: 780000000000,
    sharesOutstanding: 550000000,
    initialPrice: 1420,
    logoUrl: "/images/logos/MLTCH.webp",
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Donald Lundee"),
  },
  {
    name: "Arasaka",
    tickerSymbol: "ARSK",
    logoUrl: "/images/logos/ARSK.webp",
    description:
      "A global megacorporation with an iron grip on military technology, corporate security, and cybernetics. Known for its extensive paramilitary forces, Arasaka doesn’t just sell weapons—it decides who wins wars. Operating at the intersection of security, politics, and financial power, the company is infamous for its strict corporate loyalty, high-tech cyberware, and occasional ‘hostile’ takeovers (emphasis on hostile).",
    valuation: 950000000000,
    sharesOutstanding: 600000000,
    initialPrice: 1580,
    logoUrl: "/images/logos/ARSK.webp",
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Saburo Arasaka"),
  },
  {
    name: "Kiroshi",
    tickerSymbol: "KIRO",
    logoUrl: "/images/logos/KIRO.webp",
    description:
      'A leading innovator in cybernetic optics, neural implants, and sensory enhancement. From everyday vision upgrades to black-market military-grade mods, Kiroshi products are trusted by surgeons, soldiers, and underground hackers alike. The company claims to be committed to "enhancing the human experience," though critics argue that "proprietary firmware updates" have an uncanny way of keeping users loyal… permanently.',
    valuation: 300000000000,
    sharesOutstanding: 400000000,
    initialPrice: 750,
    logoUrl: "/images/logos/KIRO.webp",
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Health Care"),
      },
    },
    subIndustryId: subIndustryMap.get("Health Care Equipment & Supplies").id,
    // subIndustry: subIndustryMap.get("Health Care Equipment & Supplies"),
    ceo: ceoMap.get("Tomo Kiroshi"),
  },
  {
    name: "LexCorp",
    tickerSymbol: "LEX",
    logoUrl: "/images/logos/LEX.webp",
    description:
      "Founded by Lex Luthor, LexCorp is a global technology and defense empire specializing in advanced robotics, energy solutions, and corporate acquisitions. With cutting-edge AI, space exploration projects, and a military division rivaling national armies, LexCorp sees no ethical dilemma too large nor regulation too restrictive to stand in its way. Whether it’s innovation or world domination, you can bet Lex Luthor is two steps ahead.",
    valuation: 875000000000,
    sharesOutstanding: 550000000,
    initialPrice: 1590,
    logoUrl: "/images/logos/LEX.webp",
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Lex Luthor"),
  },
  {
    name: "LexCorp",
    tickerSymbol: "LEX",
    logoUrl: "/images/logos/LEX.webp",
    description:
      "Founded by Lex Luthor, LexCorp is a global technology and defense empire specializing in advanced robotics, energy solutions, and corporate acquisitions. With cutting-edge AI, space exploration projects, and a military division rivaling national armies, LexCorp sees no ethical dilemma too large nor regulation too restrictive to stand in its way. Whether it’s innovation or world domination, you can bet Lex Luthor is two steps ahead.",
    valuation: 875000000000,
    sharesOutstanding: 550000000,
    initialPrice: 1590,
    logoUrl: "/images/logos/LEX.webp",
    sectorId: sectorMap.get("Industrials").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Industrials").id },
        // create: sectorMap.get("Industrials"),
      },
    },
    subIndustryId: subIndustryMap.get("Aerospace & Defense").id,
    // subIndustry: subIndustryMap.get("Aerospace & Defense"),
    ceo: ceoMap.get("Lex Luthor"),
  },
  {
    name: "Vault-Tec Corporation",
    tickerSymbol: "VTEC",
    logoUrl: "/images/logos/VTEC.webp",
    description:
      "Vault-Tec specializes in cutting-edge subterranean housing solutions designed to ensure survival in the inevitable corporate-induced apocalypse. With a keen focus on 'social experiments' and population control, Vault-Tec promises safety—whether you like it or not.",
    valuation: 245000000000,
    sharesOutstanding: 2000000000,
    initialPrice: 122.5,
    sectorId: sectorMap.get("Utilities").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Utilities").id },
        // create: sectorMap.get("Utilities"),
      },
    },
    subIndustryId: subIndustryMap.get("Multi-Utilities").id,
    // subIndustry: subIndustryMap.get("Multi-Utilities"),
  },
  {
    name: "Blue Sun Energy",
    tickerSymbol: "BSUN",
    logoUrl: "/images/logos/BSUN.webp",
    description:
      "Blue Sun Energy dominates the interstellar energy sector, supplying planets and mega-cities with everything from solar grids to highly volatile fuel cores. Officially, they are a beacon of progress. Unofficially, they own everything, and their reach is as vast as the black.",
    valuation: 138000000000,
    sharesOutstanding: 1500000000,
    initialPrice: 92,
    sectorId: sectorMap.get("Utilities").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Utilities").id },
        // create: sectorMap.get("Utilities"),
      },
    },
    subIndustryId: subIndustryMap.get("Electric Utilities").id,
    // subIndustry: subIndustryMap.get("Electric Utilities"),
  },
  {
    name: "Nuka-Cola Power",
    tickerSymbol: "NUKP",
    logoUrl: "/images/logos/NUKP.webp",
    description:
      "After realizing its soft drinks contained enough radiation to power small cities, Nuka-Cola pivoted into the energy market. Now a major supplier of nuclear fusion, they provide affordable, deliciously unstable power to the masses.",
    valuation: 95000000000,
    sharesOutstanding: 1000000000,
    initialPrice: 95,
    sectorId: sectorMap.get("Utilities").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Utilities").id },
        // create: sectorMap.get("Utilities"),
      },
    },
    subIndustryId: subIndustryMap.get("Electric Utilities").id,
    // subIndustry: subIndustryMap.get("Electric Utilities"),
  },
  {
    name: "Nakatomi Corporation",
    tickerSymbol: "NAKT",
    logoUrl: "/images/logos/NAKT.webp",
    description:
      "Nakatomi builds towering monuments to corporate dominance. Specializing in high-security skyscrapers, cybernetic business hubs, and impenetrable vaults, they ensure the 1% always have a penthouse to hide in.",
    valuation: 300000000000,
    sharesOutstanding: 1500000000,
    initialPrice: 128,
    sectorId: sectorMap.get("Real Estate").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Real Estate").id },
        // create: sectorMap.get("Real Estate"),
      },
    },
    subIndustryId:
      // subIndustry: subIndustryMap.get("Real Estate Management & Developme,
      subIndustryMap.get("Real Estate Management & Development").id,
  },
  {
    name: "Lumon Industries",
    tickerSymbol: "LUMN",
    logoUrl: "/images/logos/LUMN.webp",
    description:
      "A corporate entity shrouded in secrecy, Lumon Industries pioneers in biotechnology, cognitive engineering, and behavioral restructuring. Its Severance Program has turned employees into perfect workers—splitting their consciousness between corporate servitude and an existence they’ll never remember. Those who question the system disappear into its labyrinthine corridors, their fates as unknown as Lumon's true purpose. In this world, loyalty isn’t earned—it’s implanted.",
    valuation: 75000000000,
    sharesOutstanding: 1000000000,
    initialPrice: 75.0,
    sectorId: sectorMap.get("Health Care").id,
    sector: {
      connect: {
        where: { sectorId: sectorMap.get("Health Care").id },
        // create: sectorMap.get("Real Estate"),
      },
    },
    subIndustryId:
      // subIndustry: subIndustryMap.get("Real Estate Management & Developme,
      subIndustryMap.get("Biotechnology").id,
    ceo: ceoMap.get("Jame Eagan"),
  },
  {
    name: "Black Mesa",
    tickerSymbol: "BMRF",
    logoUrl: "/images/logos/BMRF.webp",
    description:
      "A government-funded research facility specializing in experimental physics, teleportation, and classified military projects. Known for the disastrous resonance cascade event, causing an interdimensional invasion.",
    valuation: 50000000,
    sharesOutstanding: 2100000000,
    initialPrice: 42.0,
    sectorId: sectorMap.get("Industrials").id,
    subIndustryId: subIndustryMap.get("Scientific Research").id,
    ceo: ceoMap.get("Dr. Wallace Breen"),
  },
  {
    name: "Aperture Science",
    tickerSymbol: "APSC",
    logoUrl: "/images/logos/APSC.webp",
    description:
      "A technology company specializing in AI research, portal technology, and unethical human experimentation. Infamously controlled by the rogue AI GLaDOS, known for its dark humor and disdain for test subjects.",
    valuation: 5400000000,
    sharesOutstanding: 60000000,
    initialPrice: 88.5,
    sectorId: sectorMap.get("Information Technology").id,
    subIndustryId: subIndustryMap.get("Experimental Technology").id,
    ceo: ceoMap.get("GLaDOS"),
  },
];
