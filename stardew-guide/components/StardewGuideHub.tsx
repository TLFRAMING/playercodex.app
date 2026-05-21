import Link from "next/link";
import type { StardewGuideArticle } from "@/lib/stardew/types";

const categoryLabels: Record<string, string> = {
  beginner: "Beginner",
  fishing: "Fishing",
  mining: "Mining",
  progression: "Progression"
};

export function StardewGuideHub({ articles }: { articles: StardewGuideArticle[] }) {
  return (
    <div className="space-y-5">
      <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex w-fit rounded-sm bg-green-950/[0.06] px-2.5 py-1 text-xs font-black uppercase tracking-[0.14em] text-green-950/50">
            Beginner decision guides
          </span>
          <p className="text-sm font-semibold leading-6 text-green-950/72">
            These Stardew Valley guides focus on decisions new and returning players make during the first year: where to spend energy, when to mine, when fishing helps, how sprinklers change the day, and how to prepare for the next season.
          </p>
          <p className="text-sm font-semibold leading-6 text-green-950/62">
            This section is different from the database. The database answers what an item, crop, fish, or bundle is. These guides explain how to think through a farm decision without turning the save into a fixed route.
          </p>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            className="group rounded-md border border-green-950/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-amber-500/35"
            href={`/stardew/guides/${article.slug}`}
            key={article.slug}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Chip>{categoryLabels[article.category] ?? formatLabel(article.category)}</Chip>
              <Chip>{formatConfidence(article.confidence)}</Chip>
              <Chip>{formatPatchSensitivity(article.patchSensitivity)}</Chip>
            </div>
            <h2 className="mt-3 break-words text-xl font-black leading-tight text-green-950 group-hover:text-amber-700">{article.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-green-950/68">{article.summary}</p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-green-950/42">{article.readingTimeMinutes} min read</p>
          </Link>
        ))}
      </section>

      <section className="rounded-md border border-green-950/10 bg-white/80 px-4 py-5 sm:px-5">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-base font-black text-green-950">Where to go next</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">
              Use these articles for planning and judgment. Use the database and money guides when you need direct reference data or a comparison of profit-focused routes.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <RelatedLink href="/stardew/database" title="Stardew Database" />
            <RelatedLink href="/stardew/money" title="Money-Making Guides" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-sm bg-green-950/[0.06] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-green-950/55">{children}</span>;
}

function RelatedLink({ href, title }: { href: string; title: string }) {
  return (
    <Link className="rounded-sm border border-green-950/10 bg-green-950/[0.035] px-3 py-2 text-sm font-black text-green-950 transition hover:bg-green-950/[0.08]" href={href}>
      {title}
    </Link>
  );
}

function formatConfidence(value: string) {
  return value === "needs verification" ? "Needs verification" : `${formatLabel(value)} confidence`;
}

function formatPatchSensitivity(value: string) {
  return `${formatLabel(value)} patch sensitivity`;
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
