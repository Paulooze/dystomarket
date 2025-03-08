import { Company, getImageUrl } from '@/components/companies/companies.helpers';
import StockChart from '@/components/ui/stock-chart';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet-async';

type ExtendedCompany = Company & {
  ceo: {
    name: string;
    imageUrl: string | null;
  } | null;
};
type StockPrice = {
  timestamp: string;
  price: number;
};

async function fetchCompany(tickerSymbol: string): Promise<ExtendedCompany> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/companies/${tickerSymbol}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch company');
  }
  return response.json();
}
async function fetchCompanyPrices(tickerSymbol: string): Promise<StockPrice[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/companies/${tickerSymbol}/prices`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch company prices');
  }
  return response.json();
}

export const Route = createFileRoute('/company/$tickerSymbol')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const [company, prices] = await Promise.all([
      fetchCompany(params.tickerSymbol),
      fetchCompanyPrices(params.tickerSymbol),
    ]);
    return { company, prices };
  },
});

function RouteComponent() {
  const { company, prices } = Route.useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <Helmet prioritizeSeoTags>
        <title>
          Dystomarket - {company.name} ({company.tickerSymbol})
        </title>
        <meta
          property="og:url"
          content={`https://dystomarket.com/company/${company.tickerSymbol}`}
        />
      </Helmet>
      <div className="flex items-center mb-4">
        <div className="flex items-center mb-4">
          <div className="w-32 h-32 rounded-full mr-4 flex items-center justify-center overflow-hidden">
            <img
              src={getImageUrl(company.logoUrl)}
              alt={`${company.name} Logo`}
              className="rounded-full mr-6"
            />
          </div>
          <h1 className="text-3xl font-semibold  text-dysto-white flex flex-col">
            <span className="mb-2">{company.name}</span>
            <span className="text-lg text-gray-500 dark:text-gray-400">
              {company.tickerSymbol}
            </span>
          </h1>
        </div>
        {company.ceo && (
          <div className="mb-4 flex items-start ml-auto">
            <div className="w-24 h-24 rounded-full mr-4 flex items-center justify-center overflow-hidden">
              <img
                src={
                  company.ceo.imageUrl
                    ? getImageUrl(company.ceo.imageUrl)
                    : '/images/logos/default_ceo.webp'
                }
                alt={`CEO of ${company.name}`}
                className="rounded-full mr-4"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold  text-gray-100">
                {company.ceo.name}
              </h2>
              <p className="text-gray-300 mb-4">CEO</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-lg text-dysto-white mb-10">{company.description}</p>
      <div className="mb-8">
        <StockChart prices={prices} company={company} />
      </div>
    </div>
  );
}
