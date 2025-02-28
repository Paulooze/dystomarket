import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";
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
    sector: string;
    subIndustry: string;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  let priceChange = 0;
  let percentageChange = 0;
  let direction: "up" | "down" | "neutral" = "neutral";

  if (company.previousPrice !== null && company.latestPrice !== null) {
    priceChange = company.latestPrice - company.previousPrice;
    percentageChange =
      ((company.latestPrice - company.previousPrice) / company.previousPrice) *
      100;

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

  return (
    <Link href={`/company/${company.tickerSymbol}`} className="h-full">
      {" "}
      {/* h-full on the Link */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 p-4 flex flex-col h-full">
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
                {/* Stack name and ticker */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                  {company.name}
                </h2>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {company.tickerSymbol}
                </p>
              </div>

              <div
                className={`${priceChangeClass} self-start flex items-center ml-auto font-mono`}
              >
                <UpDownIcon direction={direction} />
                <p className={`text-sm font-mono font-bold ml-1`}>
                  {" "}
                  {/* Added mt-auto */}
                  {company.latestPrice !== null
                    ? `${formatCurrency(company.latestPrice)}`
                    : "N/A"}
                </p>
                {percentageChange !== 0 && (
                  <span className={`${priceChangeClass} text-xs ml-2`}>
                    ({percentageChange.toFixed(2)}%)
                  </span>
                )}
              </div>
            </div>{" "}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {company.sector} / {company.subIndustry}
            </p>
          </div>
        </div>
        {/* Display Sector and Sub-Industry */}
      </div>
    </Link>
  );
};

export default CompanyCard;
