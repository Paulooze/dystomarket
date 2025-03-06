-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('Energy', 'Materials', 'Industrials', 'ConsumerDiscretionary', 'ConsumerStaples', 'HealthCare', 'Financials', 'InformationTechnology', 'CommunicationServices', 'Utilities', 'RealEstate');

-- CreateEnum
CREATE TYPE "SubIndustry" AS ENUM ('EnergyEquipmentServices', 'OilGasConsumableFuels', 'Chemicals', 'MetalsMining', 'AerospaceDefense', 'Machinery', 'Transportation', 'Automobiles', 'HotelsRestaurantsLeisure', 'Media', 'FoodStaplesRetailing', 'FoodProducts', 'Beverages', 'Pharmaceuticals', 'Biotechnology', 'HealthCareEquipmentSupplies', 'Banks', 'DiversifiedFinancials', 'Insurance', 'SoftwareServices', 'TechnologyHardwareEquipment', 'Semiconductors', 'TelecommunicationServices', 'MediaEntertainment', 'ElectricUtilities', 'GasUtilities', 'WaterUtilities', 'RealEstateManagementDevelopment');

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tickerSymbol" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT,
    "sector" "Sector" NOT NULL,
    "subIndustry" "SubIndustry" NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock_prices" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "stock_prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_articles" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "headline" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sentiment" DOUBLE PRECISION,
    "source" TEXT,

    CONSTRAINT "news_articles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_tickerSymbol_key" ON "companies"("tickerSymbol");

-- CreateIndex
CREATE INDEX "companies_tickerSymbol_idx" ON "companies"("tickerSymbol");

-- CreateIndex
CREATE INDEX "stock_prices_companyId_timestamp_idx" ON "stock_prices"("companyId", "timestamp");

-- CreateIndex
CREATE INDEX "news_articles_companyId_timestamp_idx" ON "news_articles"("companyId", "timestamp");

-- AddForeignKey
ALTER TABLE "stock_prices" ADD CONSTRAINT "stock_prices_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_articles" ADD CONSTRAINT "news_articles_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

