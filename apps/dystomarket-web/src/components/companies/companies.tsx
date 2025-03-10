import { useSuspenseQuery } from '@tanstack/react-query';
import { LayoutGroup, motion } from 'motion/react';
import urljoin from 'url-join';
import { useEffect, useRef, useState } from 'react';
import { fetchCompanies } from './companies.helpers';
import CompanyCard from './company-card';

type PriceData = {
  companyId: number;
  price: number;
};

const API_WS_URL = import.meta.env.VITE_API_WS_URL;

export default function Companies() {
  const { data: companies } = useSuspenseQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });
  const [companiesPriceMap, setCompaniesPriceMap] = useState<{
    [key: number]: { previousPrice: number; latestPrice: number };
  }>(
    companies.reduce((acc, company) => {
      return {
        ...acc,
        [company.id]: {
          previousPrice: company.previousPrice,
          latestPrice: company.latestPrice,
        },
      };
    }, {} as { [key: number]: { previousPrice: number; latestPrice: number } }),
  );
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (socketRef.current == null) {
      socketRef.current = new WebSocket(`${urljoin(API_WS_URL, 'prices')}`);
      socketRef.current.addEventListener('open', () => {
        console.log('✅ WebSocket Connected');
      });
      socketRef.current.addEventListener('message', (event) => {
        setCompaniesPriceMap((prev) => {
          const { companyId, price } = JSON.parse(event.data) as PriceData;
          return {
            ...prev,
            [companyId]: {
              previousPrice:
                prev[companyId].latestPrice === price
                  ? prev[companyId].previousPrice
                  : prev[companyId].latestPrice,
              latestPrice: price,
            },
          };
        });
      });

      socketRef.current.addEventListener('error', (err) => {
        console.error('❌ WebSocket Error:', err);
      });

      socketRef.current.addEventListener('close', () => {
        console.warn('⚠️ WebSocket Closed');
      });
    }
    return () => {
      if (socketRef.current != null) {
        socketRef.current.close();
        socketRef.current = null;
      }
    };
  }, [companies]);

  return (
    <>
      <div>
        <LayoutGroup>
          {companies.map((company, index) => (
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
              <CompanyCard
                key={company.id}
                company={company}
                prices={companiesPriceMap[company.id]}
              />
            </motion.div>
          ))}
        </LayoutGroup>
      </div>
    </>
  );
}
