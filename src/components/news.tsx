"use client";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Link from "next/link";

interface NewsArticle {
  id: number;
  headline: string;
  content: string;
  timestamp: string;
  companyName: string | null;
  tickerSymbol: string | null;
  sentiment: number | null;
  source: string | null;
}

async function fetchCompanyNews(): Promise<NewsArticle[]> {
  const res = await fetch(`/api/news?ticker`); // Include ticker in URL
  if (!res.ok) {
    throw new Error(`Failed to fetch news`);
  }
  return res.json();
}

export default function News() {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchCompanyNews(),
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <div>Loading news...</div>;
  }

  if (isError) {
    return <div>Error loading news.</div>;
  }

  if (!news || news.length === 0) {
    return <div />;
  }

  const newsList = news.slice(0, 10);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-dysto-white">
        Recent News
      </h2>
      <ul className="rounded-xl overflow-hidden">
        {newsList.map((article) => {
          return (
            <li
              key={article.id}
              className="block border-b-2 border-dysto-green p-4 bg-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2">
                {article.headline}&nbsp;
                <Link
                  href={`/company/${article.tickerSymbol}`}
                  className="text-green-500 font-semibold hover:underline"
                >
                  #{article.tickerSymbol}
                </Link>
              </h3>
              <p className="text-sm text-gray-50 mb-2">
                {format(article.timestamp, "MMMM d, yyyy")}
              </p>
              <p className="text-sm">{article.content}</p>
              <p className="mt-2 text-sm text-green-500 font-semibold"></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
