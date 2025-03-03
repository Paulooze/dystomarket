"use client";
import { Sector, SubIndustry } from "@prisma/client";
import { LayoutGroup, motion } from "motion/react";
import { use, useMemo, useState } from "react";
import CompaniesFilter from "./companies-filter";
import CompanyCard from "./company-card";
import EmptyState from "./empty-state";

interface Company {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  logoUrl: string;
  latestPrice: number | null;
  previousPrice: number | null;
  sector: Sector;
  subIndustry: SubIndustry;
}
type UpdatedData = {
  ticker: string;
  latestPrice: number;
  previousPrice: number | null;
};
type Props = {
  companiesPromise: Promise<Company[]>;
  sectorsPromise: Promise<(Sector & { subIndustries: SubIndustry[] })[]>;
  updatedCompanyData: UpdatedData[];
};

export default function CompaniesList({
  companiesPromise,
  sectorsPromise,
  updatedCompanyData,
}: Props) {
  const companies = use(companiesPromise);
  const sectors = use(sectorsPromise);
  const [selectedSector, setSelectedSector] = useState<
    (Sector & { subIndustries: SubIndustry[] }) | null
  >(null);
  const [selectedSubIndustry, setSelectedSubIndustry] =
    useState<SubIndustry | null>(null);

  const updatedCompaniesMap = useMemo(
    () =>
      updatedCompanyData.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr };
      }, {} as Record<string, { latestPrice: number; previousPrice: number | null }>),
    [updatedCompanyData]
  );

  const companiesList = useMemo(
    () =>
      companies.map((company) => {
        const updatedPrice = updatedCompaniesMap[company.tickerSymbol];
        const { previousPrice, latestPrice, ...rest } = company;
        return {
          ...rest,
          previousPrice:
            updatedPrice != null ? updatedPrice.previousPrice : previousPrice,
          latestPrice:
            updatedPrice != null ? updatedPrice.latestPrice : latestPrice,
        };
      }),
    [companies, updatedCompaniesMap]
  );

  const handleSelectSector = (
    sector: (Sector & { subIndustries: SubIndustry[] }) | null
  ) => {
    setSelectedSubIndustry(null);
    setSelectedSector((prevSelectedSector) => {
      if (prevSelectedSector?.id === sector?.id) {
        return null;
      }
      return sector;
    });
  };

  const handleSelectSubIndustry = (subIndustry: SubIndustry | null) => {
    setSelectedSubIndustry((prevSelectedSubIndustry) => {
      if (prevSelectedSubIndustry?.id === subIndustry?.id) {
        return null;
      }
      return subIndustry;
    });
  };

  const filteredCompanies = useMemo(
    () =>
      companies.filter((company) => {
        if (!selectedSector) {
          return true;
        }
        if (!selectedSubIndustry) {
          return company.sector.id === selectedSector.id;
        }
        return (
          company.sector.id === selectedSector.id &&
          company.subIndustry.id === selectedSubIndustry?.id
        );
      }),
    [selectedSector, companies, selectedSubIndustry]
  );

  return (
    <>
      <CompaniesFilter
        onSelectSector={handleSelectSector}
        onSelectSubIndustry={handleSelectSubIndustry}
        sectors={sectors}
        selectedSector={selectedSector}
        selectedSubIndustry={selectedSubIndustry}
      />
      {filteredCompanies.length === 0 && <EmptyState />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <LayoutGroup>
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              transition={{
                delay: index * 0.05,
                duration: 0.2,
                ease: "easeOut",
              }}
              initial={{ translateX: -10, opacity: 0, scale: 0.95 }}
              animate={{ translateX: 0, opacity: 1, scale: 1 }}
              exit={{ translateX: -10, opacity: 0, scale: 0.95 }}
            >
              <CompanyCard key={company.id} company={company} />
            </motion.div>
          ))}
        </LayoutGroup>
      </div>
    </>
  );
}
