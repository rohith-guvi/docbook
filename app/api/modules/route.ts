import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import ModuleModel from "@/models/Module";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { title, slug, courseId } = await req.json();

    if (!title?.trim() || !courseId || !isValidObjectId(courseId)) {
      return NextResponse.json({ message: "title and valid courseId are required" }, { status: 400 });
    }

    const resolvedSlug = toSlug((slug || title) as string);
    if (!resolvedSlug) {
      return NextResponse.json({ message: "valid slug is required" }, { status: 400 });
    }

    const lastModule = await ModuleModel.findOne({ courseId }).sort({ order: -1 }).lean();
    const moduleDoc = await ModuleModel.create({
      title: title.trim(),
      courseId,
      slug: resolvedSlug,
      order: (lastModule?.order ?? -1) + 1
    });

    return NextResponse.json(moduleDoc, { status: 201 });
  } catch (error: unknown) {
    if (typeof error === "object" && error && "code" in error && (error as { code?: number }).code === 11000) {
      return NextResponse.json({ message: "slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ message: "failed to create module", error }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("courseId");

    if (!courseId || !isValidObjectId(courseId)) {
      return NextResponse.json({ message: "valid courseId query param is required" }, { status: 400 });
    }

    const modules = await ModuleModel.find({ courseId }).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json(modules);
  } catch (error) {
    return NextResponse.json({ message: "failed to fetch modules", error }, { status: 500 });
  }
}
