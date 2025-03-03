import { getSectorColor, shortenLabel } from "@/lib/formatters";
import { Sector, SubIndustry } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import StockPrice from "./stock-price";
import { Card } from "./ui/card";

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
              <div className="self-start ml-auto">
                <StockPrice
                  latestPrice={company.latestPrice}
                  previousPrice={company.previousPrice}
                />
              </div>
            </div>
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
