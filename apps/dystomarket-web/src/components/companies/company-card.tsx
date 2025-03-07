import { Link } from '@tanstack/react-router';
import { Card } from '../ui/card';
import StockPrice from '../ui/stock-price';
import {
  Company,
  getImageUrl,
  getSectorColor,
  shortenLabel,
} from './companies.helpers';

export default function CompanyCard({ company }: { company: Company }) {
  const { text } = getSectorColor(company.sector.name);

  return (
    <Link
      to="/company/$tickerSymbol"
      params={{ tickerSymbol: company.tickerSymbol }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full hover:bg-gray-700">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center overflow-hidden">
            <img
              src={getImageUrl(company.logoUrl)}
              alt={`${company.name} Logo`}
            />
          </div>
          <div className="flex-1 flex-col ">
            <div className="flex">
              <div className="flex flex-col mb-2">
                <h3 className="text-lg font-bold  text-dysto-white line-clamp-1">
                  {company.name}
                </h3>
                <p className="text-sm font-semibold text-gray-50">
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
}
