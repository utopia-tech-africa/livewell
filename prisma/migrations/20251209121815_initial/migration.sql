-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);
