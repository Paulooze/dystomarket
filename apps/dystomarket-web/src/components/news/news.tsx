import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { LayoutGroup, motion } from 'motion/react';
import urlJoin from 'url-join';

type NewsArticle = {
  id: number;
  headline: string;
  content: string;
  timestamp: string;
  companyName: string | null;
  tickerSymbol: string | null;
  sentiment: number | null;
  source: string | null;
};

async function fetchNews(): Promise<NewsArticle[]> {
  const res = await fetch(urlJoin(import.meta.env.VITE_API_URL, '/api/news'));
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  return res.json();
}

export default function News() {
  const { data: news } = useSuspenseQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
  });

  return (
    <div className="n">
      <LayoutGroup>
        {news.map((article, index) => {
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
              <div key={article.id} className="block p-4 bg-gray-700 mb-4">
                <header className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">
                    {article.headline}&nbsp;
                  </h3>
                </header>
                <p className="">{article.content}</p>
                <footer className="flex items-center pt-4 text-sm text-gray-50">
                  <span className="inline-block mr-2">{article.source} • </span>
                  <span className="text-sm text-gray-50inline-block mr-2">
                    {format(article.timestamp, 'MMMM d, yyyy')}
                  </span>
                  <Link
                    to={`/company/$tickerSymbol`}
                    params={{ tickerSymbol: article.tickerSymbol ?? '' }}
                    className="text-green-500 font-semibold hover:underline inline-block ml-auto"
                  >
                    #{article.tickerSymbol}
                  </Link>
                </footer>
              </div>
            </motion.div>
          );
        })}
      </LayoutGroup>
    </div>
  );
}
