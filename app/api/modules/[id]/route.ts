import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { connectToDatabase } from "@/lib/mongodb";
import ModuleModel from "@/models/Module";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "invalid module id" }, { status: 400 });
    }

    const body = await req.json();
    const update: Record<string, unknown> = {};

    if (typeof body.order === "number") update.order = body.order;
    if (typeof body.title === "string" && body.title.trim()) update.title = body.title.trim();
    if (typeof body.slug === "string" && body.slug.trim()) update.slug = body.slug.trim().toLowerCase();

    const updated = await ModuleModel.findByIdAndUpdate(id, { $set: update }, { new: true }).lean();
    if (!updated) {
      return NextResponse.json({ message: "module not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error: unknown) {
    if (typeof error === "object" && error && "code" in error && (error as { code?: number }).code === 11000) {
      return NextResponse.json({ message: "slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ message: "failed to update module", error }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "invalid module id" }, { status: 400 });
    }

    const deleted = await ModuleModel.findByIdAndDelete(id).lean();
    if (!deleted) {
      return NextResponse.json({ message: "module not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "module deleted" });
  } catch (error) {
    return NextResponse.json({ message: "failed to delete module", error }, { status: 500 });
  }
}
