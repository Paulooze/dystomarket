// scripts/removeUnknownSector.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.sector.deleteMany({
    where: { name: "Unknown Sector" },
  });
  await prisma.subIndustry.deleteMany({
    where: { name: "Unknown Subindustry" },
  });

  console.log("Unknown sector and sub-industry deleted.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
