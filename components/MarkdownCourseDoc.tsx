import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitMarkdownSections(markdown: string) {
  const chunks = markdown.split(/\n(?=##\s+)/g);
  const intro = chunks[0] ?? "";
  const sectionChunks = chunks.slice(1);

  const sections = sectionChunks.map((chunk, index) => {
    const headingMatch = chunk.match(/^##\s+(.+)$/m);
    const title = headingMatch?.[1]?.trim() || `Section ${index + 1}`;
    return {
      id: slugify(title),
      title,
      content: chunk
    };
  });

  return { intro, sections };
}

export default async function MarkdownCourseDoc({
  markdownFileName,
  moduleLabel
}: {
  markdownFileName: string;
  moduleLabel: string;
}) {
  const filePath = path.join(process.cwd(), "docs", markdownFileName);
  const markdownSource = await readFile(filePath, "utf-8");
  const { intro, sections } = splitMarkdownSections(markdownSource);

  return (
    <article className="space-y-8 text-zinc-200">
      <section className="space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">Module · {moduleLabel}</p>
        <div className="rounded-xl border border-zinc-800 bg-black/50 p-4 text-sm text-zinc-400">
          This module is rendered from the source markdown file with enhanced reading styles.
        </div>
        <MarkdownBody source={intro} />
      </section>

      {sections.map((section) => (
        <section key={section.id} id={section.id} data-title={section.title} className="space-y-4 scroll-mt-24">
          <MarkdownBody source={section.content} />
        </section>
      ))}
    </article>
  );
}

function MarkdownBody({ source }: { source: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-4xl font-semibold text-white md:text-5xl">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-semibold text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold text-zinc-100">{children}</h3>,
        h4: ({ children }) => <h4 className="text-base font-semibold uppercase tracking-wide text-zinc-300">{children}</h4>,
        p: ({ children }) => <p className="leading-8 text-zinc-300">{children}</p>,
        ul: ({ children }) => <ul className="list-disc space-y-2 pl-6 text-zinc-300">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6 text-zinc-300">{children}</ol>,
        li: ({ children }) => <li className="leading-7">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="rounded-r-lg border-l-4 border-emerald-400/60 bg-emerald-500/5 px-4 py-3 text-zinc-300">
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-emerald-300 underline decoration-emerald-500/60 underline-offset-4 hover:text-emerald-200">
            {children}
          </a>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-black/45">
            <table className="min-w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-zinc-900/80 text-zinc-200">{children}</thead>,
        th: ({ children }) => <th className="border-b border-zinc-800 px-4 py-3 text-left font-semibold">{children}</th>,
        td: ({ children }) => <td className="border-b border-zinc-900 px-4 py-3 align-top text-zinc-300">{children}</td>,
        pre: ({ children }) => (
          <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-sm text-zinc-200">{children}</pre>
        ),
        code: ({ children, className }) => {
          const isBlock = Boolean(className);
          if (isBlock) {
            return <code className={className}>{children}</code>;
          }
          return <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-sm text-emerald-300">{children}</code>;
        },
        hr: () => <hr className="border-zinc-800" />
      }}
    >
      {source}
    </ReactMarkdown>
  );
}
