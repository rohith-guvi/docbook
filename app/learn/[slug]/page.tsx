import Link from "next/link";
import DocViewer from "@/components/DocViewer";
import LearnLayoutClient from "@/components/LearnLayoutClient";
import MarkdownCourseDoc from "@/components/MarkdownCourseDoc";
import { connectToDatabase } from "@/lib/mongodb";
import ModuleModel from "@/models/Module";

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const { slug } = await params;
  const isJavaScriptModule = ["javascript", "module-3-javascript-complete", "javascript-complete"].includes(slug);

  const activeModule = await ModuleModel.findOne({ slug }).lean();
  if (!activeModule) {
    return (
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-10">
        <p className="text-red-400">Module not found for slug: {slug}</p>
        <Link href="/courses" className="mt-3 inline-block">
          Back to courses
        </Link>
      </main>
    );
  }

  return (
    <LearnLayoutClient moduleTitle={activeModule.title}>
      {isJavaScriptModule ? (
        <MarkdownCourseDoc markdownFileName="module-3-javascript-complete.md" moduleLabel="JavaScript" />
      ) : (
        <DocViewer slug={slug} />
      )}
    </LearnLayoutClient>
  );
}
