import { Link } from '@tanstack/react-router';
import StockPrice from '../ui/stock-price';
import {
  Company,
  getImageUrl,
  getSectorColor,
  shortenLabel,
} from './companies.helpers';

type Props = {
  company: Company;
  prices: {
    latestPrice: number;
    previousPrice: number;
  };
};

export default function CompanyCard({ company, prices }: Props) {
  const { text } = getSectorColor(company.sector.name);

  return (
    <Link
      to="/company/$tickerSymbol"
      params={{ tickerSymbol: company.tickerSymbol }}
      className="h-full"
    >
      <div className="overflow-hidden hover:shadow-lg transition-all duration-200 p-4 flex flex-col h-full hover:bg-gray-700 border-b-2 border-dysto-dark-2 hover:border-dysto-green">
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
                  latestPrice={prices.latestPrice}
                  previousPrice={prices.previousPrice}
                />
              </div>
            </div>
            <span className={`${text} text-sm`}>
              {shortenLabel(company.sector.name, company.subIndustry.name)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
