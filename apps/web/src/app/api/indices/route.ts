// app/api/indices/route.ts
import { prisma } from "@dystomarket/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const indices = await prisma.index.findMany({
      include: {
        indexPrices: {
          orderBy: { timestamp: "desc" },
          take: 2, // Get the two most recent prices
        },
        companies: {
          select: { id: true },
        },
      },
      orderBy: { name: "asc" },
    });

    // Format the data for the frontend
    const formattedIndices = indices.map((index) => {
      const latestPrice = index.indexPrices[0]?.price || null;
      const previousPrice = index.indexPrices[1]?.price || null;

      return {
        id: index.id,
        name: index.name,
        tickerSymbol: index.tickerSymbol,
        description: index.description,
        latestPrice: latestPrice,
        previousPrice: previousPrice,
      };
    });

    return NextResponse.json(formattedIndices);
  } catch (error) {
    console.error("Error fetching indices:", error);
    return NextResponse.json(
      { error: "Failed to fetch indices" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
