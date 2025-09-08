/*
  Warnings:

  - You are about to drop the `Base` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CareerMilestone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fleet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FleetSeniorityAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Base";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CareerMilestone";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Fleet";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FleetSeniorityAnalysis";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;
