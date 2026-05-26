import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact | Player Codex",
  description: "Contact Player Codex for corrections, source updates, publisher questions, and guide feedback."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Player Codex"
      kicker="Questions, corrections, and source notes for the guide project."
      title="Contact"
    >
      <div className="space-y-4">
        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <div className="max-w-3xl space-y-4 text-sm font-semibold leading-6 text-green-950/70">
            <p>
              Player Codex is a fan-made guide project. Use this page for correction requests, source questions, or notes about outdated guide content.
            </p>
            <p>
              Current coverage focuses on Stardew Valley, Rogue Command, and Nova Roma. The site does not represent any game publisher or developer.
            </p>
            <p>
              Contact email: <a className="font-black text-pond hover:underline" href="mailto:contact@playercodex.app">contact@playercodex.app</a>
            </p>
            <p>
              The email address above is the public contact point for the site. It can be used for gameplay data corrections, source verification notes, site accessibility issues, or questions from rights holders and game publishers.
            </p>
          </div>
        </section>

        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <h2 className="text-lg font-black text-green-950">What to include</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold leading-6 text-green-950/68">
            <li className="rounded-md bg-green-950/[0.035] px-3 py-2">The page URL you are writing about.</li>
            <li className="rounded-md bg-green-950/[0.035] px-3 py-2">The specific claim, item, guide step, or source that needs review.</li>
            <li className="rounded-md bg-green-950/[0.035] px-3 py-2">A stable source or in-game verification note if you are suggesting a correction.</li>
            <li className="rounded-md bg-green-950/[0.035] px-3 py-2">Whether the issue is a data error, outdated patch-sensitive advice, broken link, accessibility problem, or publisher rights question.</li>
          </ul>
        </section>

        <section className="rounded-md border border-green-950/10 bg-white/85 px-4 py-5 sm:px-5">
          <h2 className="text-lg font-black text-green-950">How corrections are handled</h2>
          <div className="mt-3 max-w-3xl space-y-3 text-sm font-semibold leading-6 text-green-950/68">
            <p>
              Correction requests are reviewed against stable sources and, when needed, in-game verification notes. Player Codex does not treat a forum comment, review, or single community claim as enough proof to change production data.
            </p>
            <p>
              For Early Access games, the site may keep a claim marked as patch-sensitive even after a correction. That keeps guides useful without pretending that every system, number, or route is final.
            </p>
          </div>
        </section>

        <section className="rounded-md border border-green-950/10 bg-white/80 px-4 py-4 sm:px-5">
          <h2 className="text-lg font-black text-green-950">Useful site pages</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="rounded-sm bg-green-950/[0.05] px-3 py-2 text-sm font-black text-green-950/72 transition hover:bg-green-950/[0.08] hover:text-green-950" href="/about">
              About
            </Link>
            <Link className="rounded-sm bg-green-950/[0.05] px-3 py-2 text-sm font-black text-green-950/72 transition hover:bg-green-950/[0.08] hover:text-green-950" href="/editorial-policy">
              Editorial Policy
            </Link>
            <Link className="rounded-sm bg-green-950/[0.05] px-3 py-2 text-sm font-black text-green-950/72 transition hover:bg-green-950/[0.08] hover:text-green-950" href="/privacy">
              Privacy
            </Link>
            <Link className="rounded-sm bg-green-950/[0.05] px-3 py-2 text-sm font-black text-green-950/72 transition hover:bg-green-950/[0.08] hover:text-green-950" href="/terms">
              Terms
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
