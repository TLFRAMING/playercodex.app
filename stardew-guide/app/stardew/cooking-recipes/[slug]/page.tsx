import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DataCard, TagList } from "@/components/DataCard";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { StardewDetailUseGuide } from "@/components/StardewDetailUseGuide";
import { getAllCookingRecipes, getCookingRecipeBySlug } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getCookingRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Cooking Recipe Not Found | Stardew Guide | Player Codex",
      description: "This Stardew Valley cooking recipe page could not be found."
    };
  }

  return {
    title: `${recipe.name} Stardew Valley Recipe: Ingredients, Energy, Buff, and Source`,
    description: `${recipe.name} cooking recipe guide: ingredients ${recipe.ingredientsText}, energy ${recipe.energy}, health ${recipe.health}, buff ${formatBuff(recipe.buff)}, and sell price ${formatGold(recipe.sellPrice)}.`
  };
}

export function generateStaticParams() {
  return getAllCookingRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export default async function CookingRecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getCookingRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedGuides = getStardewGuideArticlesBySlugs(getCookingGuideSlugs(recipe.ingredientsText));

  return (
    <PageShell eyebrow="Cooking Recipe" title={recipe.name}>
      <div className="space-y-4">
        <DataCard>
          <h2 className="text-xl font-black text-green-950">{recipe.name} quick answer</h2>
          <p className="mt-3 text-sm leading-6 text-green-950/72">{recipe.beginnerNote}</p>
        </DataCard>

        <DataCard>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Fact label="Ingredients" value={recipe.ingredientsText || "None listed" } />
            <Fact label="Energy" value={String(recipe.energy)} />
            <Fact label="Health" value={String(recipe.health)} />
            <Fact label="Sell price" value={formatGold(recipe.sellPrice)} />
          </dl>
          <TagList label="Buff" values={[formatBuff(recipe.buff)]} />
          <SourceBlock lastChecked={recipe.lastChecked} sourceUrls={recipe.sourceUrls} />
        </DataCard>

        <StardewDetailUseGuide
          title={`Cook ${recipe.name} only when the ingredients fit the plan`}
          problem="Cooking can spend crops, animal products, forage, or fish that may also matter for bundles, gifts, money, or artisan processing."
          steps={[
            "Check the ingredient list before cooking the last copy of any item.",
            "Use energy and health foods before mining, fishing, or long chore days where the return is clear.",
            "If the recipe has a buff, save it for a day where that buff changes your plan.",
            "If ingredients are scarce, wait until the next harvest, animal product, or fishing route replaces them."
          ]}
          links={[
            { href: "/stardew/cooking-recipes", label: "All cooking recipes" },
            { href: "/stardew/crops", label: "Crops" },
            { href: "/stardew/animal-products", label: "Animal products" }
          ]}
        />

        <RelatedStardewGuides articles={relatedGuides} title="Guides for this recipe's ingredients and use case" />
      </div>
    </PageShell>
  );
}

function getCookingGuideSlugs(ingredientsText: string) {
  const normalized = ingredientsText.toLowerCase();
  const slugs = ["beginner-energy-management", "mining-first-month"];

  if (/\bfish\b|bream|bullhead|sardine|halibut|tiger trout|sturgeon|carp|bass|eel|squid|lobster|shrimp|crab|clam|mussel|oyster|snail|periwinkle|crayfish/.test(normalized)) {
    slugs.push("fishing-season-weather-planning");
  }

  if (/egg|milk|cheese|mayonnaise|truffle|wool|duck|goat/.test(normalized)) {
    slugs.push("animals-first-barn-or-coop");
  }

  if (/parsnip|potato|cauliflower|tomato|blueberry|cranberry|pumpkin|wheat|corn|red cabbage|melon|pepper|radish|yam|artichoke|eggplant|rhubarb|garlic|kale/.test(normalized)) {
    slugs.push("spring-year-one-first-week");
  }

  return Array.from(new Set(slugs)).slice(0, 4);
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-green-950/6 p-3">
      <dt className="text-xs font-bold uppercase tracking-wide text-green-950/48">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-green-950">{value}</dd>
    </div>
  );
}

function SourceBlock({ lastChecked, sourceUrls }: { lastChecked: string; sourceUrls: string[] }) {
  return (
    <p className="mt-5 text-xs leading-5 text-green-950/52">
      Last checked: {lastChecked} | Source:{" "}
      {sourceUrls[0] ? (
        <a className="font-semibold text-pond hover:underline" href={sourceUrls[0]} rel="noreferrer" target="_blank">
          Stardew Valley Wiki
        </a>
      ) : (
        "Local Stardew database"
      )}
    </p>
  );
}

function formatGold(value: number | "needs verification") {
  return typeof value === "number" ? `${value}g` : value;
}

function formatBuff(value: string) {
  if (value === "None") {
    return "No buff";
  }

  return /^[\x20-\x7E]+$/.test(value) ? value : "Buff listed in local data";
}
