import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import Course from "@/models/Course";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const { id } = await params;

    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "invalid course id" }, { status: 400 });
    }

    const course = await Course.findById(id).lean();
    if (!course) {
      return NextResponse.json({ message: "course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ message: "failed to fetch course", error }, { status: 500 });
  }
}
