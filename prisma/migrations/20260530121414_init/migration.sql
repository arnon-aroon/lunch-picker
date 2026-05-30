-- CreateTable
CREATE TABLE "Spot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "bucket" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pick" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "spotId" TEXT NOT NULL,
    "pickedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Pick_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Pick_pickedAt_idx" ON "Pick"("pickedAt");
