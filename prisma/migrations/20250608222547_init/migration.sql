/*
  Warnings:

  - Added the required column `address` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zip" TEXT NOT NULL;
