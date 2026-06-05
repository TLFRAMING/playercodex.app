import type { Metadata } from "next";
import { AnimalProductDirectory } from "@/components/AnimalProductDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { getAllAnimalProducts } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Animal Products Guide: Eggs, Milk, Wool, Truffles, and Processing",
  description: "Browse Stardew Valley animal products by source animal, building, sell price, processing use, bundle relevance, and linked artisan goods."
};

export default function AnimalProductsPage() {
  const products = getAllAnimalProducts();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "community-center-priority-route",
    "preserve-jars-vs-kegs"
  ]);

  return (
    <PageShell
      eyebrow="Animal Products Database"
      title="Stardew Valley Animal Products Guide"
      kicker="Trace each product back to its animal source and forward to its machine output before deciding what to sell, save, or process."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page when an animal product search needs its source and best next step</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Search for Truffle, Wool, Egg, Large Egg, Milk, Duck Feather, Rabbit&apos;s Foot, or Goat Milk, then open the detail page to see the source animal, bundle pressure, and processing links.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "Egg to Mayonnaise",
              description: "Check the basic coop product chain from Chicken unlocks to Egg value and Mayonnaise Machine output.",
              links: [
                { href: "/stardew/animal-products/egg", label: "Egg" },
                { href: "/stardew/animals/chicken", label: "Chicken" },
                { href: "/stardew/artisan-goods/mayonnaise", label: "Mayonnaise" },
                { href: "/stardew/guides/animals-first-barn-or-coop", label: "Animal guide" }
              ]
            },
            {
              title: "Truffle to Truffle Oil",
              description: "Follow the late-barn product chain from Pig ownership to raw Truffles, Oil Maker processing, and the money route.",
              links: [
                { href: "/stardew/animal-products/truffle", label: "Truffle" },
                { href: "/stardew/animals/pig", label: "Pig" },
                { href: "/stardew/artisan-goods/truffle-oil", label: "Truffle Oil" },
                { href: "/stardew/money/pig-truffle-oil-economy", label: "Money guide" }
              ]
            }
          ]}
          title="Product chains to open next"
        />
        <AnimalProductDirectory products={products} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for animal products, bundles, and processing" />
      </div>
    </PageShell>
  );
}
