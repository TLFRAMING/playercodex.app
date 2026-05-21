import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { StardewGuideArticle } from "@/components/StardewGuideArticle";
import { getAllStardewGuideArticles, getStardewGuideArticleBySlug } from "@/lib/stardew/guides";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getStardewGuideArticleBySlug(slug);

  if (!article) {
    return {
      title: "Stardew Guide Not Found | Player Codex",
      description: "This Stardew Valley guide could not be found."
    };
  }

  return {
    title: `${article.title} | Stardew Guide | Player Codex`,
    description: article.summary
  };
}

export function generateStaticParams() {
  return getAllStardewGuideArticles().map((article) => ({ slug: article.slug }));
}

export default async function StardewGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getStardewGuideArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell eyebrow="Stardew Valley Guides" kicker={article.summary} title={article.title}>
      <StardewGuideArticle article={article} />
    </PageShell>
  );
}
