# Stardew Legacy Guide Refresh - 2026-05-22

## Rule Inputs

- `game-guide-research-writer` skill.
- `originality-checklist.md`.
- `content-quality-patterns.md`.
- `stardew-s6-quality-rules.md`.
- No `stardew-guide-quality-review-*.md` files were present at the start of this run.
- `stardew-guide-quality-review-2026-05-22.md` appeared later in the worktree during verification. It was sanity-checked before staging; it reinforces the resource-link gate and later cleanup candidates for `13-*` through `16-*`.

## Reviewed Production Articles

- `01-spring-year-one-first-week.md` - reviewed first-week scope, source boundary, and internal-link coverage.
- `02-beginner-energy-management.md` - reviewed energy advice, failure modes, and internal-link coverage.
- `04-mining-first-month.md` - reviewed mining confidence boundaries and resource-link coverage.
- `05-fishing-early-game-cash.md` - reviewed fishing income boundaries, Community Center mention, and money-guide overlap.
- `06-sprinklers-and-farm-scaling.md` - reviewed sprinkler scaling advice and resource-link coverage.
- `07-tool-upgrade-timing.md` - reviewed tool timing cautions and skipped because the article already has clear failure modes; related data links can be added in a later capped pass.
- `10-year-one-fall-preparation.md` - reviewed seasonal planning and skipped because it is acceptable but should receive related crop/community links in a later capped pass.
- `11-rainy-day-planning.md` - reviewed rainy-day decision structure and skipped because it already has strong conditions and failure modes.

## Edited Production Articles

- `01-spring-year-one-first-week.md` - added `relatedDataLinks` for crops and minerals.
- `02-beginner-energy-management.md` - added `relatedDataLinks` for crops, fish, and minerals.
- `04-mining-first-month.md` - added `relatedDataLinks` for minerals and the database.
- `05-fishing-early-game-cash.md` - added `relatedDataLinks` for fish, Community Center tracking, and money guides.
- `06-sprinklers-and-farm-scaling.md` - added `relatedDataLinks` for crops and minerals.

## Skipped Articles And Reasons

- `07-tool-upgrade-timing.md` - low-risk candidate for later links, but not edited to stay within the five-article cap.
- `10-year-one-fall-preparation.md` - useful later link candidate, but not edited to stay within the five-article cap.
- `11-rainy-day-planning.md` - no urgent editorial issue found in this pass.

## Duplicate / Topic-Overlap Awareness

- `money-guides.json` contains route-style money topics such as Tea Saplings, Strawberries, and Blueberries.
- The reviewed fishing and sprinkler articles remain broad beginner decision guides, not exact profit models or duplicate route pages.

## Remaining Risks

- Older articles `07-*` through `16-*` should be revisited for `relatedDataLinks` in the next legacy refresh.
- The existing later guide `17-stardew-valley-festivals-overview.md` contains a `/stardew/villagers` related link that is outside this automation's current allowlist; it was pre-existing and was not edited in this run.
- This pass did not perform fresh gameplay testing. Strategy confidence remains bounded by wiki/database support plus editorial reasoning.
