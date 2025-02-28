"use client";

import CompanyCard from "./company-card";

interface Company {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  latestPrice: number | null;
  previousPrice: number | null;
  sector: string;
  subIndustry: string;
}

interface CompaniesListProps {
  companiesBySector: { [sector: string]: { [subIndustry: string]: Company[] } };
}

const CompaniesList: React.FC<CompaniesListProps> = ({ companiesBySector }) => {
  return (
    <>
      {Object.entries(companiesBySector).map(([sector, subIndustries]) => (
        <div key={sector} className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {sector}
          </h2>
          {Object.entries(subIndustries).map(([subIndustry, companies]) => (
            <div key={subIndustry} className="mb-4">
              <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-300">
                {subIndustry}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default CompaniesList;
