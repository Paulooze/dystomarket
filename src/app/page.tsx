import RealtimeContainer from "@/components/real-time-container";
import { Sector, SubIndustry } from "@prisma/client";
import { Suspense } from "react";

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

async function getSectors(): Promise<
  (Sector & { subIndustries: SubIndustry[] })[]
> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sectors`, {
    cache: "default",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

async function getCompanies(): Promise<Company[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/companies`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

async function getIndices(): Promise<Index[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/indices`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default function Home() {
  const companiesPromise = getCompanies();
  const indicesPromise = getIndices();
  const sectorsPromise = getSectors();

  if (!companiesPromise || !indicesPromise || !sectorsPromise) {
    return <div className="text-center p-4">Failed to load data.</div>;
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <RealtimeContainer
        companiesPromise={companiesPromise}
        sectorsPromise={sectorsPromise}
        indicesPromise={indicesPromise}
      />
    </div>
  );
}
