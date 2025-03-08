import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { LayoutGroup, motion } from 'motion/react';

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
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news`);
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
                <h3 className="text-xl font-semibold mb-2">
                  {article.headline}&nbsp;
                  <Link
                    to={`/company/$tickerSymbol`}
                    params={{ tickerSymbol: article.tickerSymbol ?? '' }}
                    className="text-green-500 font-semibold hover:underline"
                  >
                    #{article.tickerSymbol}
                  </Link>
                </h3>
                <p className="text-sm text-gray-50 mb-2">
                  {format(article.timestamp, 'MMMM d, yyyy')}
                </p>
                <p className="">{article.content}</p>
                <p className="mt-2 text-sm text-green-500 font-semibold"></p>
              </div>
            </motion.div>
          );
        })}
      </LayoutGroup>
    </div>
  );
}
