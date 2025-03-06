import {
  CEO,
  Company,
  NewsArticle,
  Sector,
  SubIndustry,
} from '@dystomarket/db';
import { Queue, Worker } from 'bullmq';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

type ExtendedCompany = Company & {
  rivalCompany: Company | null;
  sector: Sector;
  subIndustry: SubIndustry;
  ceo: CEO | null;
};
type NewsArticleResponse = z.infer<typeof NewsArticleSchema>;

const NewsArticleSchema = z.object({
  headline: z.string(),
  content: z.string(),
  sentiment: z.number(),
  reaction: z.string(),
  govermentResponse: z.string(),
});

// ✅ Configure Redis
const redisConnection = {
  url: process.env.DATABASE_URL,
};

// ✅ Create a BullMQ Queue
const newsQueue = new Queue('news-result', { connection: redisConnection });

function ensureType(value: unknown): {
  choices: { message: { content: string } }[];
} {
  return value as { choices: { message: { content: string } }[] };
}

// ✅ Worker: Processes News Generation
const worker = new Worker<{
  company: ExtendedCompany;
  recentNews: NewsArticle[];
}>(
  'news-generation',
  async (job) => {
    const { company, recentNews } = job.data;
    console.log(`Got a job for ${company.name}`);

    const response = await fetch(process.env.AGENT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AI_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: company.name,
          },
        ],
        stream: false,
        include_function_info: false,
        include_retrieval_info: false,
        include_guardrails_info: false,
      }),
    })
      .then((res) => res.json())
      .catch(console.log);

    console.log(`🔹 Processing AI news for ${company.name}`);
    const { govermentResponse, ...article } = JSON.parse(
      ensureType(response).choices[0].message.content!
    ) as NewsArticleResponse;

    console.log(`📩 Sending news to back for storage`);

    await newsQueue.add('news-result', {
      companyId: job.data.company.id,
      timestamp: new Date(),
      headline: article.headline,
      content: article.content,
      sentiment: article.sentiment,
      source: 'AI Generated',
      reaction: article.reaction,
    });

    console.log(`✅ News for ${job.data.company.name} sent to API.`);
  },
  { connection: redisConnection }
);

console.log(`Worker with an id ${worker.id} has been registered.`);
