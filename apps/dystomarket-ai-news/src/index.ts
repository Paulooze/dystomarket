import {
  CEO,
  Company,
  NewsArticle,
  Sector,
  SubIndustry,
} from '@dystomarket/db';
import { Queue, Worker } from 'bullmq';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'node:http';
import { z } from 'zod';

dotenv.config();

const app = express();

type ExtendedCompany = Company & {
  rivalCompany: Company | null;
  sector: Sector;
  subIndustry: SubIndustry;
  ceo: CEO | null;
};

const NewsArticleSchema = z.object({
  headline: z.string(),
  content: z.string(),
  sentiment: z.number(),
  reaction: z.string(),
  govermentResponse: z.string(),
  targetCompany: z.string(),
});
type NewsArticleResponse = z.infer<typeof NewsArticleSchema>;

const redisConnection = {
  url: process.env.DATABASE_URL,
};

console.log('🔌 Connecting to Redis:', redisConnection);

const newsQueue = new Queue('news-result', { connection: redisConnection });

function ensureType(value: unknown): {
  choices: { message: { content: string } }[];
} {
  return value as { choices: { message: { content: string } }[] };
}

function tryParseJSON<T>(value: string): T | null {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

const AGENT_ENDPOINT = process.env.AGENT_ENDPOINT ?? '';

const worker = new Worker<{
  company: ExtendedCompany;
  recentNews: NewsArticle[];
}>(
  'news-generation',
  async (job) => {
    const { company, recentNews } = job.data;
    console.log(`Got a job for ${company.name}`);
    const response = await fetch(AGENT_ENDPOINT, {
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

    console.log(ensureType(response).choices[0].message.content!);

    console.log(`🔹 Processing AI news for ${company.name}`);
    const article = tryParseJSON<NewsArticleResponse>(
      ensureType(response).choices[0].message.content,
    );

    if (article != null) {
      console.log(`📩 Sending news to back for storage`);

      await newsQueue.add('news-result', {
        companyId: job.data.company.id,
        timestamp: new Date(),
        headline: article.headline,
        content: article.content,
        sentiment: article.sentiment,
        source: 'AI Generated',
        reaction: article.reaction,
        targetCompany: article.targetCompany,
      });

      console.log(`✅ News for ${job.data.company.name} sent to API.`);
    } else {
      console.log('❌ Error parsing response from the AI agent.');
    }
  },
  { connection: redisConnection },
);

console.log(`✅ Worker with an id ${worker.id} has been registered.`);

app.get('/health', (_, res) => {
  res.status(200).send('OK');
});

const server = createServer(app);

const PORT = process.env.PORT ?? 8080;

server.on('error', (err) => {
  throw err;
});
server.listen(PORT, () => {
  console.log(`✅ AI News Service Health Check Running on Port ${PORT}.`);
});
