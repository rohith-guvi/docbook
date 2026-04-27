import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Course from "@/models/Course";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { title } = await req.json();

    if (!title?.trim()) {
      return NextResponse.json({ message: "title is required" }, { status: 400 });
    }

    const course = await Course.create({ title: title.trim() });
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "failed to create course", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const courses = await Course.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ message: "failed to fetch courses", error }, { status: 500 });
  }
}
