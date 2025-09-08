/*
  Warnings:

  - You are about to drop the `CategoryAssignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SeniorityRecord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `Base` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `Fleet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Fleet` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CategoryAssignment_pilotId_reportDate_key";

-- DropIndex
DROP INDEX "SeniorityRecord_pilotId_reportDate_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoryAssignment";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SeniorityRecord";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SenioritySnapshot" (
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
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SenioritySnapshot_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategorySnapshot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sequenceNumber" INTEGER NOT NULL,
    "seniorityNumber" INTEGER NOT NULL,
    "categoryType" TEXT NOT NULL,
    "baseCode" TEXT NOT NULL,
    "fleetCode" TEXT NOT NULL,
    "positionCode" TEXT NOT NULL,
    "instructor" TEXT,
    "reportDate" DATETIME NOT NULL,
    "baseCity" TEXT NOT NULL,
    "fleetName" TEXT NOT NULL,
    "positionName" TEXT NOT NULL,
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CategorySnapshot_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CareerMilestone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "milestoneType" TEXT NOT NULL,
    "fromCategory" TEXT,
    "toCategory" TEXT,
    "fromBase" TEXT,
    "toBase" TEXT,
    "fromFleet" TEXT,
    "toFleet" TEXT,
    "fromPosition" TEXT,
    "toPosition" TEXT,
    "milestoneDate" DATETIME NOT NULL,
    "notes" TEXT,
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CareerMilestone_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FleetSeniorityAnalysis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reportDate" DATETIME NOT NULL,
    "baseCode" TEXT NOT NULL,
    "fleetCode" TEXT NOT NULL,
    "positionCode" TEXT NOT NULL,
    "totalPilots" INTEGER NOT NULL,
    "seniorityList" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Base" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Base" ("code", "createdAt", "id", "name") SELECT "code", "createdAt", "id", "name" FROM "Base";
DROP TABLE "Base";
ALTER TABLE "new_Base" RENAME TO "Base";
CREATE UNIQUE INDEX "Base_code_key" ON "Base"("code");
CREATE TABLE "new_Fleet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Fleet" ("code", "createdAt", "id", "name") SELECT "code", "createdAt", "id", "name" FROM "Fleet";
DROP TABLE "Fleet";
ALTER TABLE "new_Fleet" RENAME TO "Fleet";
CREATE UNIQUE INDEX "Fleet_code_key" ON "Fleet"("code");
CREATE TABLE "new_Pilot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "empNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pilotHireDate" DATETIME,
    "scheduledRetireDate" DATETIME,
    "isRetired" BOOLEAN NOT NULL DEFAULT false,
    "lastSeenDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pilot" ("createdAt", "empNumber", "id", "name", "pilotHireDate", "scheduledRetireDate", "updatedAt") SELECT "createdAt", "empNumber", "id", "name", "pilotHireDate", "scheduledRetireDate", "updatedAt" FROM "Pilot";
DROP TABLE "Pilot";
ALTER TABLE "new_Pilot" RENAME TO "Pilot";
CREATE UNIQUE INDEX "Pilot_empNumber_key" ON "Pilot"("empNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "SenioritySnapshot_reportDate_idx" ON "SenioritySnapshot"("reportDate");

-- CreateIndex
CREATE INDEX "SenioritySnapshot_baseCode_fleetCode_positionCode_idx" ON "SenioritySnapshot"("baseCode", "fleetCode", "positionCode");

-- CreateIndex
CREATE UNIQUE INDEX "SenioritySnapshot_pilotId_reportDate_key" ON "SenioritySnapshot"("pilotId", "reportDate");

-- CreateIndex
CREATE INDEX "CategorySnapshot_reportDate_categoryType_idx" ON "CategorySnapshot"("reportDate", "categoryType");

-- CreateIndex
CREATE INDEX "CategorySnapshot_baseCode_fleetCode_positionCode_idx" ON "CategorySnapshot"("baseCode", "fleetCode", "positionCode");

-- CreateIndex
CREATE UNIQUE INDEX "CategorySnapshot_pilotId_reportDate_categoryType_key" ON "CategorySnapshot"("pilotId", "reportDate", "categoryType");

-- CreateIndex
CREATE INDEX "CareerMilestone_pilotId_milestoneDate_idx" ON "CareerMilestone"("pilotId", "milestoneDate");

-- CreateIndex
CREATE UNIQUE INDEX "FleetSeniorityAnalysis_reportDate_baseCode_fleetCode_positionCode_key" ON "FleetSeniorityAnalysis"("reportDate", "baseCode", "fleetCode", "positionCode");
