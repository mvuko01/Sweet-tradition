/*
  Warnings:

  - A unique constraint covering the columns `[short_name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `short_name` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "short_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_short_name_key" ON "Country"("short_name");
