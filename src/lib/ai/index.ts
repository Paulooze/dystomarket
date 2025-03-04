import OpenAI from "openai/index.mjs";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";
import { CEO, Company, NewsArticle, Sector, SubIndustry } from "@prisma/client";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const NewsArticleSchema = z.object({
  headline: z.string(),
  content: z.string(),
  sentiment: z.number(),
  reaction: z.string(),
  govermentResponse: z.string(),
});
type NewsArticleResponse = z.infer<typeof NewsArticleSchema>;

type ExtendedCompany = Company & {
  rivalCompany: Company | null;
  sector: Sector;
  subIndustry: SubIndustry;
  ceo: CEO | null;
};

export type Article = {
  headline: string;
  content: string;
  sentiment: number;
  reaction?: string;
};

export async function generateAINewsArticle(
  company: ExtendedCompany,
  recentNews: NewsArticle[]
): Promise<Article> {
  console.log(company.rivalCompany?.name);
  const recentNewsText =
    recentNews.length > 0
      ? recentNews
          .map((n) => `- ${n.headline} (Sentiment: ${n.sentiment})`)
          .join("\n")
      : "No recent events recorded.";
  const prompt = `
You are a **cyberpunk financial journalist** covering **corporate warfare, AI-driven capitalism, and dystopian economic systems.**  
Your job is to generate **highly reactive financial news that fits within a dystopian/cyberpunk world, while staying true to each company's original lore and purpose.**
All companies share one world.

**🔥 STRICT RULES 🔥**  
- **The world is cyberpunk, but companies must act within their established identity.**  
- **The world is cyberpunk, but governments, NGOs, and resistance groups still exist (fitting the company's original universe).**
- **Every major corporate event must have a societal reaction.**  
- **Use past events as context, but introduce NEW developments in a logical way.**
    **COMPANY DETAILS:**  
    - Name: ${company.name}
    - Description: ${company.description}
    - Sector: ${company.sector.name}  
    - Industry: ${company.subIndustry.name}  
    - Description: ${company.description}  
    - Last stock price: $${company.latestPrice}
    - Company CEO: ${company.ceo?.name ?? "Unknown"} - ${
    company.ceo?.personality ?? ""
  }
    - Main rival corporation: ${company.rivalCompany?.name ?? "None"} - ${
    company.rivalCompany?.description ?? ""
  }
    **📜 Recent News Affecting This Company (Last 5 Events)**  
    ${recentNewsText}

    📰 **Generate the following:**  
    - **A cyberpunk-style financial news headline that fits the dystopian world, but remains true to the company's business model.**  
    - **A short but company-accurate financial article (4-6 sentences) that may introduces something NEW while feeling realistic.**  
    - **A reaction from a rival corporation, if applicable, staying true to its identity.**
    - **A government, regulatory, NGO, or resistance group's response that reflects societal impact.**  
    - **A sentiment score (-1 to 1) reflecting market impact.**  
🔥   **FORMAT OUTPUT STRICTLY AS JSON:**  
      \`\`\`json
      {
          "headline": "Your generated cyberpunk financial headline here",
          "content": "Your short but company-accurate financial article here.",
          "reaction": "A rival company’s response, if applicable, staying true to its identity.",
          "governmentResponse": "A law, regulation, investigation, or public reaction to the event.",
          "sentiment": (A decimal number from -1 to 1)
      }
      \`\`\`
    `;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a cyberpunk financial news generator, strictly following corporate history.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-4o",
      store: true,
      response_format: zodResponseFormat(NewsArticleSchema, "news"),
    });
    const { govermentResponse, ...rest } = JSON.parse(
      response.choices[0].message.content!
    ) as NewsArticleResponse;
    console.log({ govermentResponse });
    return rest;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return {
      headline: "Market in Chaos: Experts Confused!",
      content:
        "A sudden and unexplained event has thrown the fictional stock market into turmoil. Analysts are baffled.",
      sentiment: 0,
    };
  }
}
