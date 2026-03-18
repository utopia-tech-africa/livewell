-- CreateTable
CREATE TABLE "Enquiry" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);
