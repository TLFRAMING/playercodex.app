import type { Metadata } from "next";
import Link from "next/link";
import { DataCard } from "@/components/DataCard";
import { PageShell } from "@/components/PageShell";
import { getAllSongsOfConquestMobileSources } from "@/lib/songs-of-conquest-mobile/data";

export const metadata: Metadata = {
  title: "Songs of Conquest Mobile Guide: Beginner Strategy, Factions, Wielders, and Resources | Player Codex",
  description:
    "Songs of Conquest Mobile guide coverage for beginner strategy, faction choice, Wielders, resource planning, town building, tactical combat, and mobile session planning.",
  alternates: {
    canonical: "https://playercodex.app/songs-of-conquest-mobile"
  },
  openGraph: {
    title: "Songs of Conquest Mobile Guide | Player Codex",
    description:
      "Beginner-safe Songs of Conquest Mobile guide coverage for factions, Wielders, resources, towns, tactical battles, and mobile play.",
    url: "https://playercodex.app/songs-of-conquest-mobile",
    siteName: "Player Codex",
    type: "website"
  }
};

const identityFacts = [
  ["Game", "Songs of Conquest Mobile"],
  ["Core genre", "Turn-based adventure strategy"],
  ["Key systems", "Wielders, armies, resources, towns, and tactical battles"],
  ["Mobile sources", "App Store and Google Play"],
  ["Coverage status", "Intro page live; guide topics in review"]
] as const;

const plannedTopics = [
  {
    title: "Beginner first campaign",
    note: "How to read early objectives, avoid overextending, and keep Wielders useful without turning the first map into a checklist."
  },
  {
    title: "Faction choice framework",
    note: "A safe way to compare factions by learning curve, army identity, and resource pressure without ranking them."
  },
  {
    title: "Resource and town building basics",
    note: "How to think about early economy, building pressure, and when a town plan is becoming too wide."
  },
  {
    title: "Combat positioning basics",
    note: "A beginner combat primer for protecting important troops, reading threat ranges, and avoiding avoidable losses."
  },
  {
    title: "Wielder and magic basics",
    note: "A first guide to Wielder roles, spell timing, and why hero development should match the army you are fielding."
  },
  {
    title: "Mobile session planning",
    note: "How to split exploration, town work, and tactical battles into readable mobile play sessions."
  }
];

const boundaries = [
  "Faction comparison pages will start as choice frameworks, not rankings.",
  "Wielder pages need mobile-specific checks before they become recommendation pages.",
  "Troop pages should explain roles and matchups before any power ordering is considered.",
  "PC-only controls, workshop features, and DLC assumptions need mobile verification first.",
  "Combat and economy pages should teach decisions before publishing formulas.",
  "Store feedback can shape guide questions, but production pages should rely on verified mechanics."
];

const sourceTypeLabels: Record<string, string> = {
  announcement: "Announcement",
  database: "Database",
  "official-site": "Official site",
  other: "Source",
  store: "Store",
  wiki: "Wiki"
};

export default function SongsOfConquestMobilePage() {
  const sources = getAllSongsOfConquestMobileSources();

  return (
    <PageShell
      eyebrow="Player Codex"
      kicker="Mobile-first strategy guide coverage for Songs of Conquest players who need beginner help with factions, Wielders, resources, towns, and tactical battles."
      title="Songs of Conquest Mobile Guide"
    >
      <div className="space-y-5">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit rounded-sm bg-green-950/[0.06] px-2.5 py-1 text-xs font-black uppercase tracking-[0.14em] text-green-950/50">
              Intro page live
            </span>
            <p className="text-sm font-semibold leading-6 text-green-950/72">
              Songs of Conquest Mobile brings the adventure strategy structure of Songs of Conquest to phones and tablets. Player Codex will cover it with source-backed beginner guides for faction choice, Wielders, resource planning, town building, tactical combat, and mobile session flow.
            </p>
            <p className="text-sm font-semibold leading-6 text-green-950/62">
              The first coverage layer stays conservative: mobile store pages verify the mobile release surface, while official game sources support broad system framing. PC-only details will not be treated as mobile facts until they are checked against mobile sources or direct play.
            </p>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <DataCard>
            <h2 className="text-base font-black text-green-950">What this guide hub will help with</h2>
            <div className="mt-3 space-y-3 text-sm font-semibold leading-6 text-green-950/68">
              <p>
                The useful beginner question is not which faction is best. It is how to read the map, keep the economy moving, choose fights that match your army, and build Wielders around the decisions you can actually support.
              </p>
              <p>
                That gives this section a clear direction: practical decision guides first, rankings and optimization claims only after mobile-specific evidence exists.
              </p>
            </div>
          </DataCard>

          <DataCard>
            <h2 className="text-sm font-black uppercase tracking-[0.12em] text-green-950/55">Identity card</h2>
            <dl className="mt-3 space-y-3">
              {identityFacts.map(([label, value]) => (
                <div key={label} className="grid gap-1">
                  <dt className="text-xs font-black uppercase tracking-[0.1em] text-green-950/45">{label}</dt>
                  <dd className="text-sm font-black text-green-950">{value}</dd>
                </div>
              ))}
            </dl>
          </DataCard>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <DataCard>
            <h2 className="text-base font-black text-green-950">Planned guide topics</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">
              These topics are not detail routes yet. They are the first safe article candidates for a mobile-first guide layer.
            </p>
            <div className="mt-4 grid gap-3">
              {plannedTopics.map((topic) => (
                <div className="rounded-sm border border-green-950/10 bg-green-950/[0.035] p-3" key={topic.title}>
                  <h3 className="text-sm font-black text-green-950">{topic.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">{topic.note}</p>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard>
            <h2 className="text-base font-black text-green-950">Coverage roadmap</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">
              These areas need mobile-specific proof, direct testing, or stronger source coverage before they become full guide pages.
            </p>
            <ul className="mt-4 space-y-2">
              {boundaries.map((item) => (
                <li className="rounded-sm border border-green-950/10 bg-white p-3 text-sm font-semibold leading-6 text-green-950/72" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </DataCard>
        </section>

        <DataCard>
          <h2 className="text-base font-black text-green-950">Verified sources</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-green-950/62">
            This intro page uses the approved source registry. Store pages anchor mobile availability, while official game and developer pages support broad identity and system framing.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sources.map((source) => (
              <a
                className="rounded-sm border border-green-950/10 bg-green-950/[0.035] px-4 py-3 text-sm text-green-950 transition hover:bg-green-950/[0.08]"
                href={source.url}
                key={source.id}
                rel="noreferrer"
                target="_blank"
              >
                <span className="block font-black">{source.title}</span>
                <span className="mt-2 block text-xs font-black uppercase tracking-[0.12em] text-green-950/48">
                  {source.publisher} / {sourceTypeLabels[source.sourceType] ?? source.sourceType}
                </span>
                <span className="mt-1 block text-xs font-black uppercase tracking-[0.12em] text-green-950/42">
                  Checked {source.lastChecked}
                </span>
              </a>
            ))}
          </div>
        </DataCard>

        <section className="rounded-md border border-green-950/10 bg-green-950/[0.035] px-4 py-4 sm:px-5">
          <p className="text-sm font-semibold leading-6 text-green-950/62">
            Player Codex is fan-made and is not affiliated with Lavapotion, Coffee Stain Publishing, Apple, Google, or Steam.
          </p>
        </section>

        <div>
          <Link className="inline-flex w-fit rounded-sm border border-green-950/14 bg-green-950/[0.04] px-3 py-2 text-sm font-black text-green-950 transition hover:bg-green-950/[0.08]" href="/">
            Back to Player Codex
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
