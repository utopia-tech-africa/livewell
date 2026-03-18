import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone } = await request.json();

  try {
    const newRegisteredUser = await prisma.register.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return NextResponse.json(
      {
        message: "Saved registered user successfully!",
        registeredUser: newRegisteredUser,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving registered user to db :", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    );
  }
}
