/*
  Warnings:

  - A unique constraint covering the columns `[rivalCompanyId]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "rivalCompanyId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "companies_rivalCompanyId_key" ON "companies"("rivalCompanyId");

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_rivalCompanyId_fkey" FOREIGN KEY ("rivalCompanyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
