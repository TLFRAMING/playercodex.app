import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewRouteClusterLinks } from "@/components/StardewRouteClusterLinks";
import { VillagerDirectory } from "@/components/VillagerDirectory";
import { getAllVillagers } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const metadata: Metadata = {
  title: "Stardew Valley Villager Gift Finder: Loved Gifts, Birthdays, and Schedules",
  description: "Find Stardew Valley villager loved gifts, liked gifts, birthdays, schedules, marriage candidates, and friendship planning links."
};

export default function VillagersPage() {
  const villagers = getAllVillagers();
  const relatedGuides = getStardewGuideArticlesBySlugs([
    "friendship-and-gifts-basics",
    "stardew-valley-festivals-overview",
    "festival-planning-for-beginners"
  ]);

  return (
    <PageShell
      eyebrow="Villager Gift Finder"
      title="Stardew Valley Villager Gift Finder"
      kicker="Find loved gifts, liked gifts, birthdays, schedule notes, and friendship guide links for every Stardew Valley villager."
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-green-950/44">Quick answer</p>
          <h2 className="mt-1 text-lg font-black text-green-950">Use this page to choose safe gifts before a birthday or weekly visit</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/66">
            Search a villager name or gift item, open the matching profile, then check loved gifts, liked gifts, birthday timing, location notes, and related friendship guides before you spend the day traveling.
          </p>
        </section>
        <StardewRouteClusterLinks
          clusters={[
            {
              title: "High-interest villager gift pages",
              description: "Start with villagers currently getting search impressions, then use the gift guide before planning birthdays or weekly gifts.",
              links: [
                { href: "/stardew/villagers/wizard", label: "Wizard" },
                { href: "/stardew/villagers/evelyn", label: "Evelyn" },
                { href: "/stardew/villagers/george", label: "George" },
                { href: "/stardew/villagers/haley", label: "Haley" },
                { href: "/stardew/villagers/penny", label: "Penny" },
                { href: "/stardew/guides/friendship-and-gifts-basics", label: "Gift guide" }
              ]
            }
          ]}
          title="Gift routes to check first"
        />
        <VillagerDirectory villagers={villagers} />
        <RelatedStardewGuides articles={relatedGuides} title="Guides for gifts, birthdays, and festivals" />
      </div>
    </PageShell>
  );
}
