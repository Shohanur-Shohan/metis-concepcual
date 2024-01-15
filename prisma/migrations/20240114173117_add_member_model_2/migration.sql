/*
  Warnings:

  - Added the required column `imgCDN` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `member` ADD COLUMN `imgCDN` VARCHAR(300) NOT NULL;
