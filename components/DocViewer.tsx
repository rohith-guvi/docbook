"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const docsMap: Record<string, ReturnType<typeof dynamic>> = {
  "linux-basics": dynamic(() => import("@/docs/linux-basics"), {
    ssr: false,
    loading: () => <p className="text-slate-400">Loading documentation...</p>
  }),
  
};

export default function DocViewer({ slug }: { slug: string }) {
  const Component = useMemo(() => docsMap[slug], [slug]);

  if (!Component) {
    return (
      <div className="rounded-xl border border-amber-500/30 bg-amber-900/20 p-5 text-amber-300">
        No documentation JSX file found for <code>{slug}</code>.
      </div>
    );
  }

  return (
    <div className="animate-[learn-enter_500ms_ease]">
      <Component />
    </div>
  );
}
