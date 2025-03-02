// app/api/stream/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Set the headers for Server-Sent Events
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Create a new ReadableStream to send data to the client
  const stream = new ReadableStream({
    async start(controller) {
      // Function to send an update to the client
      const sendUpdate = async () => {
        try {
          // Fetch the latest company and index prices
          const companies = await prisma.company.findMany({
            select: {
              tickerSymbol: true,
              stockPrices: {
                orderBy: { timestamp: "desc" },
                take: 2,
              },
            },
          });
          const indices = await prisma.index.findMany({
            include: {
              indexPrices: {
                orderBy: { timestamp: "desc" },
                take: 2,
              },
            },
          });

          const formattedIndices = indices.map((index) => ({
            tickerSymbol: index.tickerSymbol,
            previousPrice: index.indexPrices[1]?.price || null,
            latestPrice: index.indexPrices[0]?.price || null,
          }));
          const formattedCompanies = companies.map((company) => ({
            tickerSymbol: company.tickerSymbol,
            previousPrice: company.stockPrices[1]?.price || null,
            latestPrice: company.stockPrices[0]?.price || null,
          }));

          // Format the data as a Server-Sent Event
          const data = {
            companies: formattedCompanies.map((c) => ({
              ticker: c.tickerSymbol,
              previousPrice: c.previousPrice,
              latestPrice: c.latestPrice,
            })),
            indices: formattedIndices.map((i) => ({
              ticker: i.tickerSymbol,
              previousPrice: i.previousPrice,
              latestPrice: i.latestPrice,
            })),
          };

          const eventData = `data: ${JSON.stringify(data)}\n\n`;

          // Enqueue the data to be sent to the client
          controller.enqueue(new TextEncoder().encode(eventData));
        } catch (error) {
          console.error("Error fetching data for SSE:", error);
          // Send an error message to the client, and close the connection
          controller.enqueue(
            new TextEncoder().encode(
              `data: {"error": "Failed to fetch data"}\n\n`
            )
          );
          controller.close(); // Close the stream on error
          return; // Stop further processing
        }
      };

      // Send an initial update immediately
      await sendUpdate();

      // Set up an interval to send updates every few seconds
      const intervalId = setInterval(async () => {
        await sendUpdate();
      }, 5000); // Update every 5 seconds (adjust as needed)

      // Handle client disconnection
      req.signal.onabort = () => {
        clearInterval(intervalId);
        controller.close();
      };
    },
  });

  // Return the stream as the response
  return new NextResponse(stream, { headers });
}
