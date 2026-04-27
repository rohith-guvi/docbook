import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-10">
      <section className="learn-enter w-full rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-8 shadow-2xl shadow-black/40 md:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">Documentation Platform</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Doc Book</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Create structured courses and modules, then read each module through a clean learning experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            Open Courses
          </Link>
          <Link
            href="/learn/linux-basics"
            className="inline-flex rounded-lg border border-zinc-700 bg-black/70 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            View Sample Module
          </Link>
        </div>
      </section>
    </main>
  );
}
