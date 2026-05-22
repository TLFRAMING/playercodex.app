import type { Metadata } from "next";
import { ArtisanGoodDirectory } from "@/components/ArtisanGoodDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { getAllArtisanGoods } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Artisan Goods Database | Stardew Guide | Player Codex",
  description: "Browse Stardew Valley animal artisan goods by machine, input item, processing time, output value, and beginner use."
};

export default function ArtisanGoodsPage() {
  const goods = getAllArtisanGoods();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "sprinklers-and-farm-scaling",
    "year-one-fall-preparation"
  ]);

  return (
    <PageShell eyebrow="Artisan Goods Database" title="Artisan Goods">
      <div className="space-y-5">
        <ArtisanGoodDirectory goods={goods} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for processing, farm scaling, and animal planning" />
      </div>
    </PageShell>
  );
}
