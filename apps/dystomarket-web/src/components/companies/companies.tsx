import { useSuspenseQuery } from '@tanstack/react-query';
import { LayoutGroup, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { fetchCompanies } from './companies.helpers';
import CompanyCard from './company-card';

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
  const [updatedCompanyData, setUpdatedCompanyData] = useState<UpdatedData[]>(
    [],
  );

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_URL}/api/stream`,
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data) as StreamData;
      setUpdatedCompanyData(data.companies);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const updatedCompaniesMap = useMemo(
    () =>
      updatedCompanyData.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr };
      }, {} as Record<string, { latestPrice: number; previousPrice: number | null }>),
    [updatedCompanyData],
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
    [companies, updatedCompaniesMap],
  );

  return (
    <>
      <div>
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
