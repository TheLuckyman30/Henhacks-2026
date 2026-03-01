/*
  Warnings:

  - Added the required column `category` to the `Posting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posting" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];
