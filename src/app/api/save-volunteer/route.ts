import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, role } = await request.json();

    const newVolunteer = await prisma.volunteer.create({
      data: {
        name,
        email,
        phone,
        role,
      },
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully", volunteer: newVolunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving volunteer to db :", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
