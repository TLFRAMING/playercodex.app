import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataCard, SourceLine } from "@/components/DataCard";
import { PageShell } from "@/components/PageShell";
import { RelatedStardewGuides } from "@/components/RelatedStardewGuides";
import { getAllAnimalProducts, getAllArtisanGoods, getArtisanGoodBySlug } from "@/lib/stardew/data";
import { getStardewGuideArticlesBySlugs } from "@/lib/stardew/guides";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const good = getArtisanGoodBySlug(slug);

  if (!good) {
    return {
      title: "Artisan Good Not Found | Stardew Guide | Player Codex",
      description: "This Stardew Valley artisan good page could not be found."
    };
  }

  return {
    title: `${good.name} Artisan Good Guide | Stardew Guide | Player Codex`,
    description: good.beginnerNote
  };
}

export function generateStaticParams() {
  return getAllArtisanGoods().map((good) => ({ slug: good.slug }));
}

export default async function ArtisanGoodDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const good = getArtisanGoodBySlug(slug);

  if (!good) {
    notFound();
  }

  const relatedGuides = getStardewGuideArticlesBySlugs([
    "animals-first-barn-or-coop",
    "sprinklers-and-farm-scaling",
    "year-one-fall-preparation"
  ]);
  const animalProducts = getAllAnimalProducts();
  const inputRows = good.inputs.map((input) => ({
    input,
    product: animalProducts.find((product) => product.name === input.itemName)
  }));

  return (
    <PageShell eyebrow="Artisan Goods Database" title={good.name}>
      <div className="space-y-4">
        <DataCard>
          <p className="text-sm leading-6 text-green-950/72">{good.beginnerNote}</p>
        </DataCard>

        <DataCard>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Fact label="Machine" value={good.machine} />
            <Fact label="Processing time" value={good.processingTime} />
            <Fact label="Inputs" value={good.inputs.map((input) => input.itemName).join(", ")} />
            <Fact label="Bundle usage" value={formatList(good.bundleUsage)} />
          </dl>
          <SourceLine lastChecked={good.lastChecked} sourceUrls={good.sourceUrls} />
        </DataCard>

        <DataCard>
          <h2 className="text-lg font-black text-green-950">Input and value reference</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">Use these rows to compare raw inputs with processed output before choosing what to sell or process.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {inputRows.map(({ input, product }) => (
              <div className="rounded-md border border-green-950/10 bg-green-950/[0.025] p-4" key={input.itemName}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-pond/10 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-pond">
                    {input.inputQuantity}x input
                  </span>
                  <span className="rounded-sm bg-green-950/[0.06] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-green-950/55">
                    {input.outputQuantity}x output
                  </span>
                </div>
                <h3 className="mt-3 text-base font-black text-green-950">{input.itemName}</h3>
                {product ? (
                  <Link className="mt-2 inline-flex rounded-sm border border-pond/20 bg-pond/10 px-2.5 py-1 text-xs font-black text-pond transition hover:bg-pond/15" href={`/stardew/animal-products/${product.slug}`}>
                    Open animal product
                  </Link>
                ) : null}
                <dl className="mt-3 grid gap-2 sm:grid-cols-3">
                  <Fact label="Output value" value={formatGold(input.sellPrice)} />
                  <Fact label="With Artisan" value={formatGold(input.artisanSellPrice)} />
                  <Fact label="Quality" value={input.outputQuality} />
                </dl>
                <p className="mt-3 text-xs font-semibold leading-5 text-green-950/56">{input.note}</p>
              </div>
            ))}
          </div>
        </DataCard>

        <RelatedStardewGuides articles={relatedGuides} title="Guides for processing, farm scaling, and animal planning" />
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
