-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "ceoId" INTEGER;

-- CreateTable
CREATE TABLE "ceos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "personality" TEXT,
    "bio" TEXT,
    "companyId" INTEGER,

    CONSTRAINT "ceos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ceos_companyId_key" ON "ceos"("companyId");

-- AddForeignKey
ALTER TABLE "ceos" ADD CONSTRAINT "ceos_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
