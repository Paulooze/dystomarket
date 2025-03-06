import { prisma } from "@dystomarket/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sectors = await prisma.sector.findMany({
      include: {
        subIndustries: {
          orderBy: { name: "asc" }, // Order sub-industries alphabetically
        },
      },
      orderBy: { name: "asc" }, // Order sectors alphabetically
    });

    // Format the data for the frontend
    const formattedSectors = sectors.map((sector) => ({
      id: sector.id,
      name: sector.name,
      subIndustries: sector.subIndustries.map((subIndustry) => ({
        id: subIndustry.id,
        name: subIndustry.name,
      })),
    }));

    return NextResponse.json(formattedSectors);
  } catch (error) {
    console.error("Error fetching sectors:", error);
    return NextResponse.json(
      { error: "Failed to fetch sectors" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const dynamic = "force-dynamic";
