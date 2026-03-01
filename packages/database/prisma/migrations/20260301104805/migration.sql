/*
  Warnings:

  - You are about to drop the column `claimed` on the `Posting` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posting" DROP COLUMN "claimed",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Available';
