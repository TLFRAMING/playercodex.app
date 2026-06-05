import type { Metadata } from "next";
import { AnimalDirectory } from "@/components/AnimalDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { getAllAnimals } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Animals Guide: Coop, Barn, Products, and Care Notes",
  description: "Compare Stardew Valley animals by coop or barn building, unlock path, products, processing routes, and beginner care notes."
};

export default function AnimalsPage() {
  const animals = getAllAnimals();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "community-center-priority-route",
    "first-winter-preparation"
  ]);

  return (
    <PageShell
      eyebrow="Animals Database"
      title="Stardew Valley Animals Guide"
      kicker="Compare coop and barn animals, then follow their product, bundle, and processing routes before choosing what to build next."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page to choose an animal by product chain, not just building cost</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Open an animal page to check its building tier, product output, and linked processing route. Chicken, Cow, Duck, Rabbit, Sheep, Goat, Pig, and Ostrich pages connect directly to the animal products and artisan goods they unlock.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "Chicken product route",
              description: "Start with the simplest coop animal path: Chicken care, Egg collection, Mayonnaise processing, and the first barn-or-coop planning guide.",
              links: [
                { href: "/stardew/animals/chicken", label: "Chicken" },
                { href: "/stardew/animal-products/egg", label: "Egg" },
                { href: "/stardew/artisan-goods/mayonnaise", label: "Mayonnaise" },
                { href: "/stardew/guides/animals-first-barn-or-coop", label: "Animal guide" }
              ]
            },
            {
              title: "Pig income route",
              description: "Use this route when evaluating Deluxe Barn timing, Truffle collection, Truffle Oil processing, and the money-guide tradeoff.",
              links: [
                { href: "/stardew/animals/pig", label: "Pig" },
                { href: "/stardew/animal-products/truffle", label: "Truffle" },
                { href: "/stardew/artisan-goods/truffle-oil", label: "Truffle Oil" },
                { href: "/stardew/money/pig-truffle-oil-economy", label: "Money guide" }
              ]
            }
          ]}
          title="High-value animal routes"
        />
        <AnimalDirectory animals={animals} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for animal buildings and bundle planning" />
      </div>
    </PageShell>
  );
}
