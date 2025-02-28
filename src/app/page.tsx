// app/page.tsx (Server Component)

import CompaniesList from "@/components/companies-list";
import IndexTrackersList from "@/components/index-tracker-list";

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

interface Index {
  id: number;
  name: string;
  tickerSymbol: string;
  description: string;
  latestPrice: number | null;
  previousPrice: number | null;
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

export default async function Home() {
  const companies = await getCompanies();
  const indices = await getIndices();

  if (!companies || !indices) {
    return <div className="text-center p-4">Failed to load data.</div>;
  }

  // Group companies by sector and sub-industry (This logic remains the same)
  const companiesBySector: {
    [sector: string]: { [subIndustry: string]: Company[] };
  } = {};
  for (const company of companies) {
    const { sector, subIndustry } = company;
    if (!companiesBySector[sector]) {
      companiesBySector[sector] = {};
    }
    if (!companiesBySector[sector][subIndustry]) {
      companiesBySector[sector][subIndustry] = [];
    }
    companiesBySector[sector][subIndustry].push(company);
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <IndexTrackersList indices={indices} />
      <CompaniesList companiesBySector={companiesBySector} />
    </div>
  );
}
