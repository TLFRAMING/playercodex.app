# Stardew Guide Quality Review - 2026-05-22

## Scope

Reviewed the latest production-folder Stardew guide articles by numeric prefix, including the untracked article currently present in `data/stardew/guides/articles/`.

Articles reviewed:

- `13-early-foraging-habits.md`
- `14-backpack-upgrade-timing.md`
- `15-festival-planning-for-beginners.md`
- `16-first-winter-preparation.md`
- `17-stardew-valley-festivals-overview.md`
- `18-community-center-priority-route.md`
- `19-friendship-and-gifts-basics.md`
- `20-animals-first-barn-or-coop.md`
- `21-fishing-season-weather-planning.md`
- `22-first-museum-donations.md`

Context checked:

- `game-guide-research-writer` skill
- `originality-checklist.md`
- `stardew-s6-quality-rules.md`
- all current production guide Markdown filenames
- `money-guides.json` for topic-overlap awareness

## Overall Result

No emergency production article edit is required from this pass. The batch is generally decision-first, conservative about exact profit and route claims, and careful about source boundaries.

The strongest pattern is in articles `18` through `22`: they include concrete next actions, conservative confidence, explicit source boundaries, and useful `relatedDataLinks`.

## Repeated Issues Found

### Missing Related Data Links In Earlier Articles

Articles `13` through `16` do not include `relatedDataLinks`, even though they touch resources with useful live destinations:

- `13-early-foraging-habits.md`: forage, Wild Seeds, cash decisions, seasonal planning.
- `14-backpack-upgrade-timing.md`: mining, fishing, forage, tools, inventory pressure.
- `15-festival-planning-for-beginners.md`: festivals, calendar timing, crops, tools, seasonal planning.
- `16-first-winter-preparation.md`: Winter Seeds, mines, fishing, seasonal preparation.

This is not serious enough to edit production in a rule-review run, but future daily article generation should treat resource links as a pre-publication gate rather than optional polish.

### Broad Overview Article Risk

`17-stardew-valley-festivals-overview.md` is useful, but it is the closest article in the batch to wiki-summary risk because it promises every festival and is naturally organized by season. It avoids copied phrasing and adds "what to watch for" advice, but future overview articles need extra originality pressure:

- lead with how the player should use the overview;
- keep the practical decision layer stronger than the list layer;
- route exact lookup/checklist work to database or tracker pages;
- avoid making "every X" the main guide promise unless the article adds planning value.

### High-Risk Topics Are Better, But Need Continued Bounds

Articles `18`, `19`, and `20` cover Community Center, gifts, and animals, which are high-risk Stardew guide areas. They are acceptable because they avoid speed routes, complete gift tables, and profit rankings. Future drafts in these areas should preserve those boundaries and should not drift into:

- fastest Community Center route claims;
- individual gift claims copied from tables;
- animal yearly profit rankings;
- universal coop-vs-barn answers.

### Topic Overlap With Money Guides Is Controlled

The reviewed batch mentions money, crops, fishing, and animals but does not duplicate the money-guide JSON articles. The overlap stays at the decision-framework level rather than recreating specific money-route pages.

## Rule Changes Made

Updated `stardew-s6-quality-rules.md` with durable rules for:

- making `relatedDataLinks` a batch gate;
- adding extra originality checks for broad overview articles;
- allowing high-risk Stardew topics only as bounded decision guides;
- including untracked production-folder articles in the latest-file review set.

## Later Fix Candidates

No production article needs an urgent factual or safety fix. Later editorial cleanup could add `relatedDataLinks` to articles `13` through `16`, but that should be handled by the daily article automation or a separate production-edit task, not by this review checkpoint.

## Verification

No build was run because only review/rule documentation was edited. Production article Markdown, app code, components, lib files, sitemap, AdSense, SiteNav, `_redirects`, package files, Rogue Command, server logs, and Stardew JSON data were not modified.
