-- CreateTable
CREATE TABLE "index_companies" (
    "id" SERIAL NOT NULL,
    "indexId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "index_companies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "index_companies_indexId_idx" ON "index_companies"("indexId");

-- CreateIndex
CREATE INDEX "index_companies_companyId_idx" ON "index_companies"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "index_companies_indexId_companyId_key" ON "index_companies"("indexId", "companyId");

-- AddForeignKey
ALTER TABLE "index_companies" ADD CONSTRAINT "index_companies_indexId_fkey" FOREIGN KEY ("indexId") REFERENCES "indices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "index_companies" ADD CONSTRAINT "index_companies_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
