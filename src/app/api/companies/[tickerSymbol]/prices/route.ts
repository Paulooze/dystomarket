import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ tickerSymbol: string }> }
) {
  const { tickerSymbol } = await params;

  try {
    const company = await prisma.company.findUnique({
      where: { tickerSymbol: tickerSymbol },
    });

    if (!company) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    const stockPrices = await prisma.stockPrice.findMany({
      where: { companyId: company.id },
      orderBy: { timestamp: "asc" }, // Important: Order by timestamp
    });

    // Format the data for Recharts (optional, but recommended)
    const formattedPrices = stockPrices.map((price) => ({
      timestamp: price.timestamp.toISOString(), // Convert to ISO string for easier handling
      price: price.price,
    }));

    return NextResponse.json(formattedPrices);
  } catch (error) {
    console.error("Error fetching stock prices:", error);
    return NextResponse.json(
      { error: "Failed to fetch stock prices" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const dynamic = "force-dynamic";
