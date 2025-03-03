// app/api/simulate/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { format, fromZonedTime, toZonedTime } from "date-fns-tz";

const TIME_ZONE = "Europe/Bratislava";

export async function POST() {
  try {
    const now = new Date();
    const nowUTC = fromZonedTime(
      now,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    const nowInNY = toZonedTime(nowUTC, TIME_ZONE);
    const currentDay = format(nowInNY, "EEEE", { timeZone: TIME_ZONE });
    const currentHour = nowInNY.getHours();

    const isTradingDay = !["Saturday", "Sunday"].includes(currentDay);
    const isTradingHour = currentHour >= 9 && currentHour <= 17;

    if (!isTradingDay || !isTradingHour) {
      return NextResponse.json({ message: "Market is closed" });
    }

    await prisma.$transaction(async (tx) => {
      // Use a transaction for atomicity

      // 1. Simulate Company Stock Prices
      const companies = await tx.company.findMany();
      for (const company of companies) {
        const latestPrice = await tx.stockPrice.findFirst({
          where: { companyId: company.id },
          orderBy: { timestamp: "desc" },
        });

        let newPrice: number;
        if (latestPrice) {
          const changePercent = (Math.random() - 0.5) * 0.01;
          newPrice = latestPrice.price * (1 + changePercent);
          newPrice = Math.max(0.01, newPrice);
          newPrice = parseFloat(newPrice.toFixed(2));
        } else {
          newPrice = 100; // Initial price
        }
        await tx.stockPrice.create({
          data: {
            companyId: company.id,
            price: newPrice,
          },
        });

        // Update latestPrice on the Company model
        await tx.company.update({
          where: { id: company.id },
          data: { latestPrice: newPrice },
        });
      }

      // 2. Calculate and Update Index Prices
      const indices = await tx.index.findMany({
        include: {
          companies: {
            include: {
              company: true, // Include the related Company data
            },
          },
        },
      });

      for (const index of indices) {
        let newIndexPrice = 0;
        let totalWeight = 0; // Keep track of total weight (should be 1, but good to check)

        for (const indexCompany of index.companies) {
          const company = indexCompany.company; // Access the Company data

          // Use the company.latestPrice, which is now guaranteed to be up-to-date
          // thanks to the transaction.
          if (
            company.latestPrice !== null &&
            company.latestPrice !== undefined
          ) {
            newIndexPrice += company.latestPrice * indexCompany.weight;
            totalWeight += indexCompany.weight;
          }
        }

        // Basic validation: Ensure total weight is approximately 1
        if (totalWeight < 0.99 || totalWeight > 1.01) {
          // Allow for minor floating-point errors
          console.warn(
            `Index ${index.name} has invalid total weight: ${totalWeight}`
          );
          // In a production system, you might throw an error or take other corrective action.
          // For this example, we'll just log a warning and continue.
        }

        // Create the new IndexPrice entry
        await tx.indexPrice.create({
          data: {
            indexId: index.id,
            price: newIndexPrice,
          },
        });
      }
    }); // End of transaction

    return NextResponse.json({
      message: "Stock prices and index prices updated successfully",
    });
  } catch (error) {
    console.error("Error simulating prices:", error);
    return NextResponse.json(
      { error: "Failed to simulate prices" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const dynamic = "force-dynamic";
