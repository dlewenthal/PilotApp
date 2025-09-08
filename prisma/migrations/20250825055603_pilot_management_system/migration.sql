-- CreateTable
CREATE TABLE "Pilot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "empNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pilotHireDate" DATETIME,
    "scheduledRetireDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SeniorityRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "seniorityNumber" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "reportDate" DATETIME NOT NULL,
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SeniorityRecord_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CategoryAssignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sequenceNumber" INTEGER NOT NULL,
    "seniorityNumber" INTEGER NOT NULL,
    "base" TEXT NOT NULL,
    "fleet" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "instructor" TEXT,
    "reportDate" DATETIME NOT NULL,
    "pilotId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CategoryAssignment_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Base" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Fleet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DataImport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "reportDate" DATETIME NOT NULL,
    "recordCount" INTEGER NOT NULL,
    "importedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_empNumber_key" ON "Pilot"("empNumber");

-- CreateIndex
CREATE UNIQUE INDEX "SeniorityRecord_pilotId_reportDate_key" ON "SeniorityRecord"("pilotId", "reportDate");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryAssignment_pilotId_reportDate_key" ON "CategoryAssignment"("pilotId", "reportDate");

-- CreateIndex
CREATE UNIQUE INDEX "Base_code_key" ON "Base"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Fleet_code_key" ON "Fleet"("code");
