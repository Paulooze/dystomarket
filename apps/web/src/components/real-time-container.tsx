"use client";
import CompaniesList from "@/components/companies-list";
import IndexTrackersList from "@/components/index-tracker-list";
import { Suspense, useEffect, useState } from "react";
import IndicesLoadingState from "./indices-loading-state";
import { Sector, SubIndustry } from "@dystomarket/db";

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
  companiesPromise: Promise<Company[]>;
  sectorsPromise: Promise<(Sector & { subIndustries: SubIndustry[] })[]>;
  indicesPromise: Promise<Index[]>;
};

type UpdatedData = {
  ticker: string;
  latestPrice: number;
  previousPrice: number | null;
};
type StreamData = {
  companies: UpdatedData[];
  indices: UpdatedData[];
};

export default function RealtimeContainer({
  companiesPromise,
  sectorsPromise,
  indicesPromise,
}: Props) {
  const [updatedCompanyData, setUpdatedCompanyData] = useState<UpdatedData[]>(
    []
  );
  const [updatedIndexData, setUpdatedIndexData] = useState<UpdatedData[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/stream");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data) as StreamData;
      setUpdatedCompanyData(data.companies);
      setUpdatedIndexData(data.indices);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dysto-white">
          Market Indices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
          <Suspense fallback={<IndicesLoadingState />}>
            <IndexTrackersList
              indicesPromise={indicesPromise}
              updatedIndexData={updatedIndexData}
            />
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CompaniesList
          companiesPromise={companiesPromise}
          sectorsPromise={sectorsPromise}
          updatedCompanyData={updatedCompanyData}
        />
      </Suspense>
    </>
  );
}
