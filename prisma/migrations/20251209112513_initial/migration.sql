/*
  Warnings:

  - You are about to drop the `Enquiry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Enquiry";

-- CreateTable
CREATE TABLE "Volunteer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);
