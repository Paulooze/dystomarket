-- CreateTable
CREATE TABLE "financial_data" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "revenue" DOUBLE PRECISION,
    "netIncome" DOUBLE PRECISION,
    "grossProfit" DOUBLE PRECISION,
    "operatingProfit" DOUBLE PRECISION,
    "operatingExpenses" DOUBLE PRECISION,
    "costOfSales" DOUBLE PRECISION,

    CONSTRAINT "financial_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "financial_data_year_key" ON "financial_data"("year");

-- CreateIndex
CREATE INDEX "financial_data_companyId_year_idx" ON "financial_data"("companyId", "year");

-- AddForeignKey
ALTER TABLE "financial_data" ADD CONSTRAINT "financial_data_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
