import { fstat, writeFileSync } from 'fs';
import { PrismaClient } from './generated/client/index.js';
import { resolve } from 'path';

const prisma = new PrismaClient();

async function main() {
  const companies = await prisma.company.findMany({
    include: {
      ceo: true,
      rivalCompany: true,
      sector: true,
      subIndustry: true,
    },
  });
  writeFileSync(
    resolve(process.cwd(), 'companies.json'),
    JSON.stringify(companies)
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
