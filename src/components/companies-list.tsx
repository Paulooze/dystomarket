"use client";

import { Sector } from "@prisma/client";
import CompanyCard from "./company-card";
import { subIndustryMapping } from "@/lib/formatters";

interface Company {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  latestPrice: number | null;
  previousPrice: number | null;
  sector: Sector;
  subIndustry: keyof typeof subIndustryMapping;
}

interface CompaniesListProps {
  companies: Company[];
}

const CompaniesList: React.FC<CompaniesListProps> = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompaniesList;
