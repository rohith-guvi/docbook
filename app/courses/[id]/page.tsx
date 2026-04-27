import Link from "next/link";
import CourseModulesClient from "@/components/CourseModulesClient";
import { connectToDatabase } from "@/lib/mongodb";
import Course from "@/models/Course";

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  await connectToDatabase();
  const { id } = await params;
  const course = await Course.findById(id).lean();

  if (!course) {
    return (
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-10">
        <p className="text-red-400">Course not found.</p>
        <Link href="/courses" className="mt-3 inline-block">
          Back to courses
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <section className="learn-enter rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-8">
        <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
          <span>←</span>
          <span>Back to courses</span>
        </Link>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">Course Workspace</p>
        <h1 className="mt-2 text-4xl font-semibold text-white">{course.title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Build this course as a structured learning path with clear module slugs and polished docs pages.
        </p>
        <CourseModulesClient courseId={id} />
      </section>
    </main>
  );
}
