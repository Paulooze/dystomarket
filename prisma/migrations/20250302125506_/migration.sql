/*
  Warnings:

  - Made the column `sectorId` on table `companies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subIndustryId` on table `companies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "companies" ALTER COLUMN "sectorId" SET NOT NULL,
ALTER COLUMN "subIndustryId" SET NOT NULL;
