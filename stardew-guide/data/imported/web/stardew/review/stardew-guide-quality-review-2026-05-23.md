# Stardew Guide Quality Review - 2026-05-23

## Scope

Reviewed the latest production Stardew guide articles by numeric filename prefix, including the untracked production-folder article present during this run:

- `14-backpack-upgrade-timing.md`
- `15-festival-planning-for-beginners.md`
- `16-first-winter-preparation.md`
- `17-stardew-valley-festivals-overview.md`
- `18-community-center-priority-route.md`
- `19-friendship-and-gifts-basics.md`
- `20-animals-first-barn-or-coop.md`
- `21-fishing-season-weather-planning.md`
- `22-first-museum-donations.md`
- `23-first-scarecrow-crop-protection.md`

Numeric prefix `23` appeared as an untracked production article during the review. It was reviewed for quality but not staged or committed by this rule-review automation because production article publishing belongs to the paired article automation.

Reference files used:

- `game-guide-research-writer/SKILL.md`
- `references/originality-checklist.md`
- `references/content-quality-patterns.md`
- `stardew-s6-quality-rules.md`
- all production guide article Markdown files for context
- `data/stardew/money-guides.json` for duplicate and topic-overlap awareness

## Findings

### No emergency production edit needed

No reviewed article had a serious factual, safety, source-boundary, or routing issue that justified editing production Markdown during this review checkpoint.

### Unresolved legacy metadata gaps

Articles `14` through `16` still do not have `relatedDataLinks` even though they touch live site resources:

- `14-backpack-upgrade-timing.md` touches inventory, tools, and route planning.
- `15-festival-planning-for-beginners.md` touches festivals and calendar planning.
- `16-first-winter-preparation.md` touches Winter, Winter Seeds, mining, and fishing.

The same issue also exists in `13-early-foraging-habits.md`, but that file fell just outside the latest-10 numeric review window after article `23` appeared. Because production article edits are forbidden by default for this automation, these remain later cleanup items rather than changes made here.

### Broad overview risk remains bounded

`17-stardew-valley-festivals-overview.md` is still the highest overview-risk article because it covers every festival. It stays acceptable because it frames sections around preparation and "what to watch for", links to relevant internal resources, and states that it is not copying a wiki table or route.

Future broad guides should continue to avoid "every X" as the whole promise unless they add a player decision layer.

### High-risk topics remain bounded

The higher-risk articles still stay inside safe boundaries:

- `18-community-center-priority-route.md` limits itself to standard bundles and avoids a strict completion route.
- `19-friendship-and-gifts-basics.md` avoids full individual gift tables and points lookup work to the Villager Gift Finder.
- `20-animals-first-barn-or-coop.md` avoids exact profit rankings, optimal animal counts, and current-version ranching meta.

No high-risk article should be expanded into speed routes, exact tables, or rankings without new source review or own testing.

### Money-guide overlap is controlled

`21-fishing-season-weather-planning.md` overlaps with early fishing cash and money-guide themes, but its actual decision promise is season, weather, time, and location planning. It links to the Fish Database, Community Center Tracker, early fishing cash guide, and Money Guides instead of copying route economics.

`20-animals-first-barn-or-coop.md` also mentions income and links Money Guides, but avoids animal profit ranking. This is the right boundary: money is a constraint, not the article's main route model.

Future daily guides should keep this pattern. If an article's main value becomes exact income comparison, it belongs in the money-guide family or needs stronger source/testing support.

### New article 23 is production-safe on review

`23-first-scarecrow-crop-protection.md` answers a real beginner decision: when to craft the first Scarecrow, where to place it, and how to expand crop blocks without avoidable crow losses. It has clean wiki source URLs, useful `relatedDataLinks`, conservative `medium` confidence, `low` patch sensitivity, and a clear source boundary.

No factual or safety issue was found. The article avoids exact radius diagrams, Rarecrow completion routing, advanced layout claims, and crop-loss value modeling, which keeps it safely beginner-focused.

## Repeated Issues

- Missing `relatedDataLinks` in older production articles remains the most visible unresolved issue.
- Broad overview formats need extra pressure to avoid wiki-summary shape.
- High-risk topics are acceptable only while they stay bounded and conservative.
- Money-adjacent guide topics need explicit scope control so they do not duplicate `money-guides.json` route records.
- New article `23` follows the newer resource-link and source-boundary pattern well.

## Rule Updates Made

Updated `stardew-s6-quality-rules.md` with:

- Rule 18: distinguish newly introduced article issues from unresolved legacy gaps when no new files were generated.
- Rule 19: keep broad guides from duplicating money-guide economics unless they are intentionally money guides with adequate source/testing support.

## Later Production Fix Candidates

No urgent production article fix is required.

Non-urgent cleanup remains:

- Add useful `relatedDataLinks` to articles `13` through `16` in a separate approved production-edit pass.
- Publish or otherwise handle untracked production article `23-first-scarecrow-crop-protection.md` in the paired article automation, not this rule-review commit.

## Verification

No production code or production article files were edited. Build was not required.
