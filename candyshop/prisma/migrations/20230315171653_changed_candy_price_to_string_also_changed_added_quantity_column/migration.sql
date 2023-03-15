/*
  Warnings:

  - Added the required column `quantity` to the `Candy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candy" ADD COLUMN     "quantity" TEXT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT;
