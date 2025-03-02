"use client";
import CompaniesList from "@/components/companies-list";
import IndexTrackersList from "@/components/index-tracker-list";
import { Sector, SubIndustry } from "@prisma/client";
import { useEffect, useMemo, useState } from "react";

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

interface Index {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  latestPrice: number;
  previousPrice: number | null;
}

type Props = {
  companies: Company[];
  sectors: (Sector & { subIndustries: SubIndustry[] })[];
  indices: Index[];
};

type UpdatedData = {
  ticker: string;
  price: number;
};
type StreamData = {
  companies: UpdatedData[];
  indices: UpdatedData[];
};

export default function RealtimeContainer({
  companies,
  sectors,
  indices,
}: Props) {
  const [updatedCompanies, setUpdatedCompanies] = useState<UpdatedData[]>([]);
  const [updatedIndices, setUpdatedIndices] = useState<UpdatedData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/stream");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data) as StreamData;
      setUpdatedCompanies(data.companies);
      setUpdatedIndices(data.indices);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const updatedCompaniesMap = useMemo(
    () =>
      updatedCompanies.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr.price };
      }, {} as Record<string, number>),
    [updatedCompanies]
  );
  const updatedIndicesMap = useMemo(
    () =>
      updatedIndices.reduce((acc, curr) => {
        return { ...acc, [curr.ticker]: curr.price };
      }, {} as Record<string, number>),
    [updatedIndices]
  );

  const companiesList = useMemo(
    () =>
      companies.map((company) => {
        const updatedPrice = updatedCompaniesMap[company.tickerSymbol];
        const { previousPrice, latestPrice, ...rest } = company;
        return {
          ...rest,
          previousPrice:
            updatedPrice !== latestPrice ? latestPrice : previousPrice,
          latestPrice: updatedPrice != null ? updatedPrice : latestPrice,
        };
      }),
    [companies, updatedCompaniesMap]
  );
  const indicesList = useMemo(
    () =>
      indices.map((index) => {
        const updatedPrice = updatedIndicesMap[index.tickerSymbol];
        const { previousPrice, latestPrice, ...rest } = index;
        return {
          ...rest,
          previousPrice:
            updatedPrice !== latestPrice ? latestPrice : previousPrice,
          latestPrice: updatedPrice != null ? updatedPrice : latestPrice,
        };
      }),
    [indices, updatedIndicesMap]
  );

  return (
    <>
      <IndexTrackersList indices={indicesList} />
      <CompaniesList companies={companiesList} sectors={sectors} />
    </>
  );
}
