import { getSectorColor, shortenLabel } from "@/lib/formatters";
import NumberFlow from "@number-flow/react";
import { Sector, SubIndustry } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import UpDownIcon from "./up-down-icon";

interface CompanyCardProps {
  company: {
    id: number;
    name: string;
    tickerSymbol: string;
    description: string;
    logoUrl: string;
    latestPrice: number | null;
    previousPrice: number | null; // Add previousPrice
    sector: Sector;
    subIndustry: SubIndustry;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: "up" | "down" | "neutral" = "neutral";

  if (company.previousPrice !== null && company.latestPrice !== null) {
    priceChange = company.latestPrice - company.previousPrice;
    percentageChange =
      (company.latestPrice - company.previousPrice) / company.previousPrice;

    if (priceChange > 0) {
      direction = "up";
    } else if (priceChange < 0) {
      direction = "down";
    }
  }

  const priceChangeClass =
    priceChange > 0
      ? "text-green-400"
      : priceChange < 0
      ? "text-red-400"
      : "text-gray-700 dark:text-gray-200";
  const { text } = getSectorColor(company.sector.name);

  return (
    <Link href={`/company/${company.tickerSymbol}`} className="h-full">
      {" "}
      {/* h-full on the Link */}
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full hover:bg-gray-700">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center overflow-hidden">
            <Image
              src={company.logoUrl}
              alt={`${company.name} Logo`}
              width={50}
              height={50}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>

          <div className="flex-1 flex-col ">
            <div className="flex">
              <div className="flex flex-col mb-2">
                {" "}
                <h2 className="text-lg font-bold text-gray-800 dark:text-dysto-white line-clamp-1">
                  {company.name}
                </h2>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-50">
                  {company.tickerSymbol}
                </p>
              </div>

              <div
                className={`${priceChangeClass} self-start flex items-center ml-auto font-mono`}
              >
                <UpDownIcon direction={direction} />
                <p className={`text-sm font-mono font-bold ml-1`}>
                  {" "}
                  {company.latestPrice !== null ? (
                    <NumberFlow isolate value={company.latestPrice} />
                  ) : (
                    "N/A"
                  )}
                </p>
                {percentageChange !== 0 && (
                  <span className={`${priceChangeClass} text-xs ml-2`}>
                    <NumberFlow
                      format={{ style: "percent", maximumFractionDigits: 2 }}
                      isolate
                      value={percentageChange}
                    />
                  </span>
                )}
              </div>
            </div>{" "}
            <span className={`${text} text-sm`}>
              {shortenLabel(company.sector.name, company.subIndustry.name)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CompanyCard;
