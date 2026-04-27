"use client";

import { useEffect, useState } from "react";

export default function LearnLayoutClient({
  moduleTitle,
  children
}: {
  moduleTitle: string;
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [progressCount, setProgressCount] = useState(0);
  const [sectionLinks, setSectionLinks] = useState<Array<{ id: string; label: string }>>([]);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll("article section[id]"));
    if (!sectionElements.length) return;

    const extractedLinks = sectionElements.map((section) => ({
      id: section.id,
      label: section.getAttribute("data-title") || section.id
    }));
    setSectionLinks(extractedLinks);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("learn-section-visible");
            setActiveSection(entry.target.id);
          }
        });

        const count = sectionElements.filter((section) => section.classList.contains("learn-section-visible")).length;
        setProgressCount(count);
      },
      { threshold: 0.2 }
    );

    sectionElements.forEach((section) => {
      section.classList.add("learn-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [moduleTitle]);

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[280px_1fr]">
        <aside className="glass-panel sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
          <div className="border-b border-zinc-800/80 px-5 py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400">Current Module</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{moduleTitle}</h2>
          </div>

          {sectionLinks.length > 0 && (
            <div className="px-3 py-4">
              <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">Submodules</p>
              <ul className="space-y-1">
                {sectionLinks.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block rounded-md px-3 py-1.5 text-xs transition ${
                        activeSection === section.id
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Progress {progressCount}/{sectionLinks.length}
              </p>
            </div>
          )}
        </aside>

        <section className="learn-enter rounded-2xl border border-zinc-800/70 bg-zinc-950/60 p-6 shadow-2xl shadow-black/40 md:p-10">
          {children}
        </section>
      </div>
    </main>
  );
}
