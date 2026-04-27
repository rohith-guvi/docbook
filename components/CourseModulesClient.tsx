"use client";

import axios from "axios";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface ModuleItem {
  _id: string;
  title: string;
  slug: string;
  order: number;
}

export default function CourseModulesClient({ courseId }: { courseId: string }) {
  const [modules, setModules] = useState<ModuleItem[]>([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadModules() {
    try {
      setLoading(true);
      const res = await axios.get<ModuleItem[]>(`/api/modules?courseId=${courseId}`);
      setModules(res.data);
    } catch {
      setError("Could not load modules.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadModules();
  }, [courseId]);

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      setSubmitting(true);
      await axios.post("/api/modules", { courseId, title: title.trim(), slug: slug.trim() });
      setTitle("");
      setSlug("");
      await loadModules();
      setError(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 409) {
        setError("Slug already exists.");
      } else {
        setError("Failed to create module.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mt-6">
      <form
        onSubmit={onSubmit}
        className="grid gap-3 rounded-xl border border-zinc-800 bg-black/70 p-4 md:grid-cols-[1fr_1fr_auto]"
      >
        <input
          value={title}
          onChange={(e) => {
            const nextTitle = e.target.value;
            setTitle(nextTitle);
            setSlug(generateSlug(nextTitle));
          }}
          placeholder="Module title"
          className="flex-1 rounded-lg border border-zinc-700 bg-black px-3 py-2 outline-none ring-emerald-500 focus:ring"
        />
        <input
          value={slug}
          onChange={(e) => setSlug(generateSlug(e.target.value))}
          placeholder="slug (matches docs filename)"
          className="flex-1 rounded-lg border border-zinc-700 bg-black px-3 py-2 outline-none ring-emerald-500 focus:ring"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
        >
          {submitting ? "Adding..." : "Add Module"}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      <div className="mt-7 grid gap-3">
        {loading && <p className="text-zinc-400">Loading modules...</p>}
        {!loading && modules.length === 0 && <p className="text-zinc-400">No modules yet.</p>}
        {modules.map((module) => (
          <div
            key={module._id}
            className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-black/60 p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-zinc-950/90"
          >
            <div>
              <p className="font-medium text-white">{module.title}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-md border border-zinc-700 bg-zinc-900/70 px-2 py-0.5 text-zinc-300">
                  slug: <span className="font-mono text-emerald-300">{module.slug}</span>
                </span>
                <span className="rounded-md border border-zinc-700 bg-zinc-900/70 px-2 py-0.5 text-zinc-300">
                  order: <span className="font-mono text-white">{module.order}</span>
                </span>
              </div>
            </div>
            <Link
              href={`/learn/${module.slug}`}
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300 transition group-hover:border-emerald-400/50 group-hover:bg-emerald-500/15"
            >
              Open
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
