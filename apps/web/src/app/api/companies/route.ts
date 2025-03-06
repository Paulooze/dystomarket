import { prisma } from "@dystomarket/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      include: {
        stockPrices: {
          orderBy: { timestamp: "desc" },
          take: 2,
        },
        sector: true,
        subIndustry: true,
      },
      orderBy: [{ latestPrice: "desc" }],
    });

    // Transform the data (optional, but good for consistency)
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
        previousPrice: previousPrice, // Include previousPrice
        sector: company.sector,
        subIndustry: company.subIndustry,
      };
    });
    return NextResponse.json(formattedCompanies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json(
      { error: "Failed to fetch companies" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
