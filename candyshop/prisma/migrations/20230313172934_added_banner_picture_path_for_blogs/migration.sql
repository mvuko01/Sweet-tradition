/*
  Warnings:

  - Added the required column `banner_path` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "banner_path" TEXT NOT NULL;
