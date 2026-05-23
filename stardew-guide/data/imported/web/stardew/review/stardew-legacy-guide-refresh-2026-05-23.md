# Stardew Legacy Guide Refresh - 2026-05-23

## Scope

Reviewed older production Stardew guide articles against the current `game-guide-research-writer` guidance, originality checklist, `stardew-s6-quality-rules.md`, and the latest available Stardew guide quality review.

This pass continued after the 2026-05-22 legacy refresh, which had already edited articles `01`, `02`, `04`, `05`, and `06`. The review prioritized the next older numeric production articles and avoided style-only rewrites.

## Articles Reviewed

- `07-tool-upgrade-timing.md`
- `10-year-one-fall-preparation.md`
- `11-rainy-day-planning.md`
- `12-first-sprinkler-transition.md`
- `13-early-foraging-habits.md`
- `14-backpack-upgrade-timing.md`
- `15-festival-planning-for-beginners.md`
- `16-first-winter-preparation.md`

## Articles Edited

- `07-tool-upgrade-timing.md`: added `relatedDataLinks` to the mineral database and Stardew guide hub because the article discusses ore, bars, tool upgrades, and planning windows.
- `10-year-one-fall-preparation.md`: added links to crops, Community Center, money guides, and the guide hub because the article asks players to plan seasonal planting, bundle awareness, and cash reserves.
- `11-rainy-day-planning.md`: added links to fish, minerals, and the guide hub because rainy-day decisions center on fishing, mining, tool timing, and bottleneck planning.
- `12-first-sprinkler-transition.md`: added links to crops, minerals, and the guide hub because sprinkler planning depends on crop scale and mining-resource pressure.
- `13-early-foraging-habits.md`: added links to forage, crops, money guides, and the guide hub because the article discusses forage, Wild Seeds, sell/save decisions, and early cash tradeoffs.

All edits were frontmatter-only and used only the allowed internal href set.

## Skipped Articles

- `14-backpack-upgrade-timing.md`: good decision-first structure and conservative source boundary; still missing useful `relatedDataLinks`, but left for the next refresh because the edit cap was reached.
- `15-festival-planning-for-beginners.md`: useful planning guide without urgent factual risk; still missing useful `relatedDataLinks`, but left for the next refresh because the edit cap was reached.
- `16-first-winter-preparation.md`: strong enough source boundary and failure-mode coverage; still missing useful `relatedDataLinks`, but left for the next refresh because the edit cap was reached.

## Reasons And Quality Notes

- The main issue in this older batch was not factual safety; it was the newer S6 resource-link rule. These articles predated the stricter `relatedDataLinks` gate.
- No article needed a route, slug, source URL, sitemap, data schema, or app-code change.
- No article was rewritten for tone or style churn.
- The reviewed articles continue to avoid exact profit models, universal upgrade routes, current-meta claims, and tier-list framing.

## Remaining Risks

- Articles `14`, `15`, and `16` should receive `relatedDataLinks` in a future pass if they still lack them.
- `15-festival-planning-for-beginners.md` may eventually benefit from a direct festival-related internal destination if the site grows one; for now, only allowed stable destinations should be used.
- `16-first-winter-preparation.md` touches mining, fishing, crops, and money planning; future edits should keep it bounded and avoid late-game optimization claims.

## Verification Plan

- Run `npm.cmd run build` because production guide articles were edited.
- Confirm slugs were unchanged.
- Confirm sitemap contains the edited guide URLs.
- Scan edited files for prohibited risk terms and forbidden source artifacts.
