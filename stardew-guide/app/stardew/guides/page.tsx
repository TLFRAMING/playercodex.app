import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { StardewGuideHub } from "@/components/StardewGuideHub";
import { getAllStardewGuideArticles } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Guides | Stardew Guide | Player Codex",
  description: "Stardew Valley beginner and progression guides for practical first-year decisions, separate from database pages and money route comparisons."
};

export default function StardewGuidesPage() {
  const articles = getAllStardewGuideArticles();

  return (
    <PageShell eyebrow="Stardew Guide" kicker="Beginner and progression decision guides for planning a calmer first year." title="Stardew Valley Guides">
      <StardewGuideHub articles={articles} />
    </PageShell>
  );
}
