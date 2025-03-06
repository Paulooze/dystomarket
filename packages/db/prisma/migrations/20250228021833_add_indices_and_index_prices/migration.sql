-- CreateTable
CREATE TABLE "indices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tickerSymbol" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "indices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "index_prices" (
    "id" SERIAL NOT NULL,
    "indexId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "index_prices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indices_name_key" ON "indices"("name");

-- CreateIndex
CREATE UNIQUE INDEX "indices_tickerSymbol_key" ON "indices"("tickerSymbol");

-- CreateIndex
CREATE INDEX "index_prices_indexId_timestamp_idx" ON "index_prices"("indexId", "timestamp");

-- AddForeignKey
ALTER TABLE "index_prices" ADD CONSTRAINT "index_prices_indexId_fkey" FOREIGN KEY ("indexId") REFERENCES "indices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
