/*
  Warnings:

  - You are about to drop the `CategorySnapshot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "CategorySnapshot_pilotId_reportDate_categoryType_key";

-- DropIndex
DROP INDEX "CategorySnapshot_baseCode_fleetCode_positionCode_idx";

-- DropIndex
DROP INDEX "CategorySnapshot_reportDate_categoryType_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategorySnapshot";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PayScale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "effectiveDate" DATETIME NOT NULL,
    "expirationDate" DATETIME,
    "contractVersion" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Aircraft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aircraftCode" TEXT NOT NULL,
    "aircraftName" TEXT NOT NULL,
    "aircraftType" TEXT NOT NULL,
    "payCategory" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PayRate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aircraftId" INTEGER NOT NULL,
    "payScaleId" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "yearOfService" INTEGER NOT NULL,
    "hourlyRate" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PayRate_aircraftId_fkey" FOREIGN KEY ("aircraftId") REFERENCES "Aircraft" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PayRate_payScaleId_fkey" FOREIGN KEY ("payScaleId") REFERENCES "PayScale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SenioritySnapshot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seniorityNumber" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "reportDate" DATETIME NOT NULL,
    "baseCode" TEXT NOT NULL,
    "fleetCode" TEXT NOT NULL,
    "positionCode" TEXT NOT NULL,
    "baseCity" TEXT NOT NULL,
    "fleetName" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "isPlaceholder" BOOLEAN NOT NULL DEFAULT false,
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SenioritySnapshot_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SenioritySnapshot" ("baseCity", "baseCode", "category", "createdAt", "fleetCode", "fleetName", "id", "pilotId", "positionCode", "positionName", "reportDate", "seniorityNumber") SELECT "baseCity", "baseCode", "category", "createdAt", "fleetCode", "fleetName", "id", "pilotId", "positionCode", "positionName", "reportDate", "seniorityNumber" FROM "SenioritySnapshot";
DROP TABLE "SenioritySnapshot";
ALTER TABLE "new_SenioritySnapshot" RENAME TO "SenioritySnapshot";
CREATE INDEX "SenioritySnapshot_reportDate_idx" ON "SenioritySnapshot"("reportDate");
CREATE INDEX "SenioritySnapshot_baseCode_fleetCode_positionCode_idx" ON "SenioritySnapshot"("baseCode", "fleetCode", "positionCode");
CREATE INDEX "SenioritySnapshot_reportDate_baseCode_fleetCode_positionCode_idx" ON "SenioritySnapshot"("reportDate", "baseCode", "fleetCode", "positionCode");
CREATE UNIQUE INDEX "SenioritySnapshot_pilotId_reportDate_key" ON "SenioritySnapshot"("pilotId", "reportDate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "PayScale_effectiveDate_idx" ON "PayScale"("effectiveDate");

-- CreateIndex
CREATE INDEX "PayScale_isActive_effectiveDate_idx" ON "PayScale"("isActive", "effectiveDate");

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_aircraftCode_key" ON "Aircraft"("aircraftCode");

-- CreateIndex
CREATE INDEX "Aircraft_aircraftCode_idx" ON "Aircraft"("aircraftCode");

-- CreateIndex
CREATE INDEX "Aircraft_payCategory_idx" ON "Aircraft"("payCategory");

-- CreateIndex
CREATE INDEX "PayRate_aircraftId_position_idx" ON "PayRate"("aircraftId", "position");

-- CreateIndex
CREATE INDEX "PayRate_payScaleId_idx" ON "PayRate"("payScaleId");

-- CreateIndex
CREATE UNIQUE INDEX "PayRate_aircraftId_payScaleId_position_yearOfService_key" ON "PayRate"("aircraftId", "payScaleId", "position", "yearOfService");
