'use client';
import { useQuery } from '@tanstack/react-query';
import { LayoutGroup, motion } from 'motion/react';
import { format } from 'date-fns';
import Link from 'next/link';

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
  const res = await fetch(`/api/news?ticker=`);
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
    queryKey: ['news'],
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
    <>
      <h2 className="text-2xl font-semibold mb-4  text-dysto-white">
        Recent News
      </h2>
      <div className="rounded-xl overflow-hidden">
        <LayoutGroup>
          {newsList.map((article, index) => {
            return (
              <motion.div
                key={article.id}
                transition={{
                  delay: index * 0.05,
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                initial={{ translateX: -10, opacity: 0, scale: 0.95 }}
                animate={{ translateX: 0, opacity: 1, scale: 1 }}
                exit={{ translateX: -10, opacity: 0, scale: 0.95 }}
              >
                <div
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
                    {format(article.timestamp, 'MMMM d, yyyy')}
                  </p>
                  <p className="text-sm">{article.content}</p>
                  <p className="mt-2 text-sm text-green-500 font-semibold"></p>
                </div>
              </motion.div>
            );
          })}
        </LayoutGroup>
      </div>
    </>
  );
}
