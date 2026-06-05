import type { Metadata } from "next";
import { CropDirectory } from "@/components/CropDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { getAllCrops } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Crops Guide: Seasons, Growth Times, Profit, and Uses",
  description: "Compare Stardew Valley crops by season, seed source, growth time, regrowth, sell price, profit notes, bundle pressure, and best uses."
};

export default function CropsPage() {
  const crops = getAllCrops();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "first-sprinkler-transition",
    "sprinklers-and-farm-scaling",
    "spring-year-one-first-week",
    "year-one-fall-preparation"
  ]);

  return (
    <PageShell
      eyebrow="Crops Database"
      title="Stardew Valley Crops Guide"
      kicker="Compare crop seasons, seed access, growth time, regrowth, sell price, profit notes, and guide links before buying seeds."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page to decide whether a crop fits the current season</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Search the crop name, compare growth and regrowth timing, then open the crop page for seed source, price, uses, and guide links. This is the fastest route for searches like Cranberries, Red Cabbage, Wheat, Starfruit, Blue Jazz Flower, and Amaranth.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "High-interest crop pages",
              description: "Open crops currently getting search impressions, then connect them to season and bundle planning guides.",
              links: [
                { href: "/stardew/crops/cranberries", label: "Cranberries" },
                { href: "/stardew/crops/red-cabbage", label: "Red Cabbage" },
                { href: "/stardew/crops/wheat", label: "Wheat" },
                { href: "/stardew/community-center", label: "Community Center" }
              ]
            },
            {
              title: "Crop planning guides",
              description: "Use these guides when deciding whether a crop needs scarecrow coverage, sprinkler scaling, or late-season planning.",
              links: [
                { href: "/stardew/guides/first-scarecrow-crop-protection", label: "Scarecrow guide" },
                { href: "/stardew/guides/sprinklers-and-farm-scaling", label: "Sprinklers guide" },
                { href: "/stardew/guides/year-one-fall-preparation", label: "Fall prep" }
              ]
            }
          ]}
          title="Crop routes to check first"
        />
        <CropDirectory crops={crops} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for crop planning and farm scaling" />
      </div>
    </PageShell>
  );
}
