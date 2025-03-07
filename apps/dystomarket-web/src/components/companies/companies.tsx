import { useSuspenseQuery } from '@tanstack/react-query';
import { LayoutGroup, motion } from 'motion/react';
import {
  ExtendedSector,
  fetchCompanies,
  SubIndustry,
} from './companies.helpers';
import CompanyCard from './company-card';
import CompaniesFilter from './companies-filter';
import { useEffect, useMemo, useState } from 'react';

type UpdatedData = {
  ticker: string;
  latestPrice: number;
  previousPrice: number | null;
};
type StreamData = {
  companies: UpdatedData[];
  indices: UpdatedData[];
};

export default function Companies() {
  const { data: companies } = useSuspenseQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });
  const [selectedSector, setSelectedSector] = useState<ExtendedSector | null>(
    null,
  );
  const [selectedSubIndustry, setSelectedSubIndustry] =
    useState<SubIndustry | null>(null);
  const [updatedCompanyData, setUpdatedCompanyData] = useState<UpdatedData[]>(
    [],
  );

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/api/stream');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data) as StreamData;
      console.log(data);
      setUpdatedCompanyData(data.companies);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleSelectSector = (sector: ExtendedSector | null) => {
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
    [selectedSector, companies, selectedSubIndustry],
  );

  const updatedCompaniesMap = useMemo(
    () =>
      updatedCompanyData.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr };
      }, {} as Record<string, { latestPrice: number; previousPrice: number | null }>),
    [updatedCompanyData],
  );

  const companiesList = useMemo(
    () =>
      filteredCompanies.map((company) => {
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
    [filteredCompanies, updatedCompaniesMap],
  );

  return (
    <>
      <CompaniesFilter
        onSelectSector={handleSelectSector}
        onSelectSubIndustry={handleSelectSubIndustry}
        selectedSector={selectedSector}
        selectedSubIndustry={selectedSubIndustry}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <LayoutGroup>
          {companiesList.map((company, index) => (
            <motion.div
              key={company.id}
              transition={{
                delay: index * 0.05,
                duration: 0.2,
                ease: 'easeOut',
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
