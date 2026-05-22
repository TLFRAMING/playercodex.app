import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataCard, SourceLine } from "@/components/DataCard";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { getAllAnimalProducts, getAllAnimals, getAnimalProductBySlug, getArtisanGoodsForInput } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getAnimalProductBySlug(slug);

  if (!product) {
    return {
      title: "Animal Product Not Found | Stardew Guide | Player Codex",
      description: "This Stardew Valley animal product page could not be found."
    };
  }

  return {
    title: `${product.name} Animal Product Guide | Stardew Guide | Player Codex`,
    description: product.beginnerNote
  };
}

export function generateStaticParams() {
  return getAllAnimalProducts().map((product) => ({ slug: product.slug }));
}

export default async function AnimalProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getAnimalProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "community-center-priority-route",
    "first-winter-preparation"
  ]);
  const animalLinks = getAllAnimals().filter((animal) => product.producedBy.includes(animal.name));
  const artisanOutputs = getArtisanGoodsForInput(product.name);

  return (
    <PageShell eyebrow="Animal Products Database" title={product.name}>
      <div className="space-y-4">
        <DataCard>
          <p className="text-sm leading-6 text-green-950/72">{product.beginnerNote}</p>
        </DataCard>

        <DataCard>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Fact label="Source" value={product.sourceBuilding} />
            <Fact label="Produced by" value={product.producedBy.join(", ")} />
            <Fact label="Sell price" value={formatGold(product.sellPrice)} />
            <Fact label="Processing" value={formatList(product.processingUses)} />
            <Fact label="Bundle usage" value={formatList(product.bundleUsage)} />
          </dl>
          <SourceLine lastChecked={product.lastChecked} sourceUrls={product.sourceUrls} />
        </DataCard>

        {animalLinks.length > 0 ? (
          <DataCard>
            <h2 className="text-lg font-black text-green-950">Animals that produce this item</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">Use these links to check unlock path, building tier, and care notes before planning the product.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {animalLinks.map((animal) => (
                <Link className="rounded-md border border-pond/20 bg-pond/10 px-3 py-2 text-sm font-black text-pond transition hover:bg-pond/15" href={`/stardew/animals/${animal.slug}`} key={animal.slug}>
                  {animal.name}
                </Link>
              ))}
            </div>
          </DataCard>
        ) : null}

        {artisanOutputs.length > 0 ? (
          <DataCard>
            <h2 className="text-lg font-black text-green-950">Artisan processing</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">Compare the raw product value with its artisan output before deciding whether to process or sell directly.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {artisanOutputs.map((good) => {
                const input = good.inputs.find((entry) => entry.itemName === product.name);

                if (!input) {
                  return null;
                }

                return (
                  <div className="rounded-md border border-green-950/10 bg-green-950/[0.025] p-4" key={good.slug}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-sm bg-pond/10 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-pond">{good.machine}</span>
                      <span className="rounded-sm bg-green-950/[0.06] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-green-950/55">{good.processingTime}</span>
                    </div>
                    <h3 className="mt-3 text-base font-black text-green-950">{good.name}</h3>
                    <dl className="mt-3 grid gap-2 sm:grid-cols-3">
                      <Fact label="Raw" value={formatGold(product.sellPrice)} />
                      <Fact label="Output" value={`${formatGold(input.sellPrice)}${input.outputQuantity > 1 ? ` total (${input.outputQuantity}x)` : ""}`} />
                      <Fact label="Artisan" value={formatGold(input.artisanSellPrice)} />
                    </dl>
                    <p className="mt-3 text-xs font-semibold leading-5 text-green-950/56">{input.note}</p>
                  </div>
                );
              })}
            </div>
          </DataCard>
        ) : null}

        <RelatedStardewGuides articles={relatedGuides} title="Guides for animal products, bundles, and farm planning" />
      </div>
    </PageShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-green-950/6 p-3">
      <dt className="text-xs font-bold uppercase tracking-wide text-green-950/48">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-green-950">{value}</dd>
    </div>
  );
}

function formatGold(value: number | "needs verification") {
  return typeof value === "number" ? `${value}g` : value;
}

function formatList(value: string[]) {
  return value.length > 0 ? value.join(", ") : "None listed";
}
