import StockChart from "@/components/stock-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatSector, formatSubIndustry } from "@/lib/formatters";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
// No useState or useEffect here!

interface Company {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  sector: string;
  subIndustry: string;
  latestPrice: number | null; // Keep this
  ceo: {
    name: string;
    imageUrl: string | null;
    personality: string | null;
    bio: string | null;
  } | null;
}

interface StockPrice {
  timestamp: string;
  price: number;
}

async function getCompany(tickerSymbol: string): Promise<Company | null> {
  try {
    const company = await prisma.company.findUnique({
      where: { tickerSymbol: tickerSymbol },
      include: {
        ceo: true,
        stockPrices: {
          orderBy: { timestamp: "desc" },
          take: 2,
        },
      }, // Include CEO if it exists
    });

    if (!company) {
      return null;
    }

    // We DO NOT fetch the prices here.  The chart component will do that.

    return {
      id: company.id,
      name: company.name,
      tickerSymbol: company.tickerSymbol,
      description: company.description,
      logoUrl: company.logoUrl ?? "",
      sector: formatSector(company.sector),
      subIndustry: formatSubIndustry(company.subIndustry),
      latestPrice: company.latestPrice,
      ceo: company.ceo
        ? {
            // Handle null CEO
            name: company.ceo.name,
            imageUrl: company.ceo.imageUrl,
            personality: company.ceo.personality,
            bio: company.ceo.bio,
          }
        : null,
    };
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
async function getCompanyPrices(tickerSymbol: string): Promise<StockPrice[]> {
  try {
    const company = await prisma.company.findUnique({
      where: { tickerSymbol: tickerSymbol },
    });

    if (!company) {
      return []; // Return empty array
    }
    const stockPrices = await prisma.stockPrice.findMany({
      where: { companyId: company.id },
      orderBy: { timestamp: "asc" }, // Important: order by timestamp ASCENDING
    });

    const formattedPrices = stockPrices.map((price) => ({
      timestamp: price.timestamp.toISOString(), // Convert to ISO string for easier handling
      price: price.price,
    }));

    return formattedPrices;
  } catch (error) {
    console.error("Error fetching company prices:", error);
    return []; // Return empty on error
  } finally {
    await prisma.$disconnect();
  }
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ tickerSymbol: string }>;
}) {
  const { tickerSymbol } = await params;
  const company = await getCompany(tickerSymbol);
  const prices = await getCompanyPrices(tickerSymbol);
  console.log(company);

  if (!company) {
    notFound();
  }
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center mb-4">
              <Image
                src={company.logoUrl}
                alt={`${company.name} Logo`}
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                className="rounded-full mr-6"
              />
              <h1>
                {company.name} <span>{company.tickerSymbol}</span>
              </h1>
            </div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          {company.ceo && ( // Only display if a CEO exists
            <div className="mb-4 flex items-center">
              <Image
                src={
                  company.ceo.imageUrl
                    ? company.ceo.imageUrl
                    : "/images/logos/default_ceo.webp"
                }
                alt={`CEO of ${company.name}`}
                width={50}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/png;base64,..."
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {company.ceo.name}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">CEO</p>
              </div>
            </div>
          )}
          <StockChart prices={prices} company={company} />
        </CardContent>
      </Card>
    </div>
  );
}
