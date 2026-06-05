import type { Metadata } from "next";
import { FishDirectory } from "@/components/FishDirectory";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { getAllFish } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Fish Guide: Locations, Seasons, Weather, and Bundle Uses",
  description: "Find Stardew Valley fish locations, seasons, weather, time windows, difficulty, sell price, and Community Center bundle use."
};

export default function FishPage() {
  const fish = getAllFish();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "fishing-early-game-cash",
    "rainy-day-planning",
    "first-winter-preparation",
    "beginner-energy-management"
  ]);

  return (
    <PageShell
      eyebrow="Fish Calendar"
      title="Stardew Valley Fish Guide"
      kicker="Check fish locations, season windows, weather requirements, catch times, difficulty, sell price, and bundle relevance before planning a fishing day."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page when a fish search needs conditions, not a long walkthrough</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Search the fish name, then confirm the season, weather, time, location, and bundle status. For searches like Bream, Tiger Trout, Halibut, Bullhead, or Sturgeon, open the fish page to turn those conditions into a short catch plan.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "Common search fish",
              description: "Open high-interest fish pages that players often search for when checking time windows, locations, and bundle relevance.",
              links: [
                { href: "/stardew/fish/bream", label: "Bream" },
                { href: "/stardew/fish/halibut", label: "Halibut" },
                { href: "/stardew/fish/tiger-trout", label: "Tiger Trout" },
                { href: "/stardew/fish/bullhead", label: "Bullhead" }
              ]
            },
            {
              title: "Weather and bundle planning",
              description: "Use these pages when a fish depends on rain, a season deadline, or Community Center tracking.",
              links: [
                { href: "/stardew/fish/shad", label: "Shad" },
                { href: "/stardew/fish/sardine", label: "Sardine" },
                { href: "/stardew/guides/fishing-season-weather-planning", label: "Fishing guide" },
                { href: "/stardew/community-center", label: "Community Center" }
              ]
            }
          ]}
          title="Fish routes to check first"
        />
        <FishDirectory fish={fish} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for fishing, rain, and early cash" />
      </div>
    </PageShell>
  );
}
