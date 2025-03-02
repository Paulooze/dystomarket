/*
  Warnings:

  - You are about to drop the column `sector` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `subIndustry` on the `companies` table. All the data in the column will be lost.
  - Added the required column `sectorId` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subIndustryId` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "sector",
DROP COLUMN "subIndustry",
ADD COLUMN     "sectorId" INTEGER NULL,
ADD COLUMN     "subIndustryId" INTEGER NULL;

-- DropEnum
DROP TYPE "Sector";

-- DropEnum
DROP TYPE "SubIndustry";

-- CreateTable
CREATE TABLE "sectors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_industries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sectorId" INTEGER NOT NULL,

    CONSTRAINT "sub_industries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sectors_name_key" ON "sectors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sub_industries_name_key" ON "sub_industries"("name");

-- CreateIndex
CREATE INDEX "sub_industries_sectorId_idx" ON "sub_industries"("sectorId");

-- Create temporary sector and subindustry, in case they don't exist.
INSERT INTO "sectors" (name) VALUES ('Unknown Sector') ON CONFLICT (name) DO NOTHING;
INSERT INTO "sub_industries" (name, "sectorId") SELECT 'Unknown Subindustry', id FROM "sectors" WHERE name = 'Unknown Sector' ON CONFLICT (name) DO NOTHING;

DO $$
DECLARE
    unknown_sector_id INT;
    unknown_subindustry_id INT;
BEGIN
    SELECT id INTO unknown_sector_id FROM "sectors" WHERE name = 'Unknown Sector';
    SELECT id INTO unknown_subindustry_id FROM "sub_industries" WHERE name = 'Unknown Subindustry';
    
	UPDATE "companies" 
    SET "sectorId" = unknown_sector_id,
        "subIndustryId" = unknown_subindustry_id
    WHERE "sectorId" IS NULL OR "subIndustryId" IS NULL;
	
END $$;


-- AddForeignKey
ALTER TABLE "sub_industries" ADD CONSTRAINT "sub_industries_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_subIndustryId_fkey" FOREIGN KEY ("subIndustryId") REFERENCES "sub_industries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

