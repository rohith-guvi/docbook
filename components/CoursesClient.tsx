"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface Course {
  _id: string;
  title: string;
  createdAt: string;
}

export default function CoursesClient() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadCourses() {
    try {
      setLoading(true);
      const res = await axios.get<Course[]>("/api/courses");
      setCourses(res.data);
    } catch {
      setError("Could not load courses.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCourses();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      setSubmitting(true);
      await axios.post("/api/courses", { title: title.trim() });
      setTitle("");
      await loadCourses();
      setError(null);
    } catch {
      setError("Failed to create course.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
      <div className="learn-enter rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">Documentation Platform</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">Courses</h1>
            <p className="mt-3 text-zinc-400">Create courses and open them to manage modules.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-black/70 px-4 py-3 text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">Total Courses</p>
            <p className="mt-1 text-2xl font-semibold text-white">{courses.length}</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-6 grid gap-3 rounded-xl border border-zinc-800 bg-black/70 p-4 md:grid-cols-[1fr_auto]"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Course title"
            className="flex-1 rounded-lg border border-zinc-700 bg-black px-3 py-2 outline-none ring-emerald-500 focus:ring"
          />
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Course"}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <section className="mt-8 grid gap-3 md:grid-cols-2">
          {loading && <p className="text-zinc-400">Loading courses...</p>}
          {!loading && courses.length === 0 && <p className="text-zinc-400">No courses yet.</p>}
          {courses.map((course) => (
            <Link
              key={course._id}
              href={`/courses/${course._id}`}
              className="group rounded-xl border border-zinc-800 bg-black/60 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-zinc-950/90"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-medium text-white">{course.title}</h2>
                <span className="rounded-md border border-zinc-700 bg-zinc-900/70 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-400">
                  Course
                </span>
              </div>
              <p className="mt-2 text-xs text-zinc-400">Created {new Date(course.createdAt).toLocaleDateString()}</p>
              <p className="mt-4 text-xs font-medium text-emerald-300 transition group-hover:text-emerald-200">Open modules →</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
