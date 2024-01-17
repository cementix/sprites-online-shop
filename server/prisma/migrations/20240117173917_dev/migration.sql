/*
  Warnings:

  - You are about to drop the column `authorId` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Sprite` table. All the data in the column will be lost.
  - Added the required column `spriteId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Sprite" DROP CONSTRAINT "Sprite_authorId_fkey";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "authorId",
ADD COLUMN     "spriteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sprite" DROP COLUMN "authorId";
