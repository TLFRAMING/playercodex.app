import type { Metadata } from "next";
import { ArtisanGoodDirectory } from "@/components/ArtisanGoodDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { getAllArtisanGoods } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Artisan Goods Guide: Machines, Inputs, Processing Time, and Value",
  description: "Browse Stardew Valley artisan goods by machine, input item, processing time, output value, animal product chain, and beginner use."
};

export default function ArtisanGoodsPage() {
  const goods = getAllArtisanGoods();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "sprinklers-and-farm-scaling",
    "year-one-fall-preparation"
  ]);

  return (
    <PageShell
      eyebrow="Artisan Goods Database"
      title="Stardew Valley Artisan Goods Guide"
      kicker="Use this database to connect machines, animal inputs, processed outputs, and the beginner guides that explain when processing is worth the routine."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page to compare raw products against machine outputs</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Open Mayonnaise, Cheese, Goat Cheese, Cloth, Duck Mayonnaise, Dinosaur Mayonnaise, Void Mayonnaise, or Truffle Oil to check the input item, machine, processing time, and linked animal source.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "Mayonnaise chain",
              description: "A compact coop route for checking Chicken products, Egg inputs, and Mayonnaise Machine value in one path.",
              links: [
                { href: "/stardew/artisan-goods/mayonnaise", label: "Mayonnaise" },
                { href: "/stardew/animal-products/egg", label: "Egg" },
                { href: "/stardew/animals/chicken", label: "Chicken" },
                { href: "/stardew/guides/animals-first-barn-or-coop", label: "Animal guide" }
              ]
            },
            {
              title: "Truffle Oil chain",
              description: "A late-barn route for comparing Pig setup cost, Truffle collection, Oil Maker processing, and money-guide tradeoffs.",
              links: [
                { href: "/stardew/artisan-goods/truffle-oil", label: "Truffle Oil" },
                { href: "/stardew/animal-products/truffle", label: "Truffle" },
                { href: "/stardew/animals/pig", label: "Pig" },
                { href: "/stardew/money/pig-truffle-oil-economy", label: "Money guide" }
              ]
            }
          ]}
          title="Processing chains to compare"
        />
        <ArtisanGoodDirectory goods={goods} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for processing, farm scaling, and animal planning" />
      </div>
    </PageShell>
  );
}
