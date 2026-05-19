# Core Debt Review

## Scope
- Villager gift fields: 8
- Crop seedPrice fields: 9
- Forage seasons All fields: 16

## Candidate Counts
- Villager gift field records: 8
- Crop seedPrice records: 9
- Forage seasons records: 16

## Decisions
### Villagers
- No explicit item gift candidates were found for these 8 fields.
- Keep them as review-only; the wiki sections are rule-based, not explicit-item lists.

### Crops
- All 9 seedPrice debts remain unresolved.
- Pineapple and Taro Root are item-based exchanges and cannot be modeled safely in the current seedPrice-only schema.
- Ancient Fruit and Coffee Bean also remain outside a safe standard gold purchase pattern.

### Forage
- All 16 items are proposed for normalization from `["All"]` to `["Spring", "Summer", "Fall", "Winter"]`.
- This is a semantic cleanup proposal, not a formal write.

## Still Needs Verification
- Villager gift fields: all 8 remain review-only because no explicit item gifts were found.
- Crop seedPrice: all 9 remain under review.
- Forage seasons: schema approval still needed before formal write.

## Files
- Clean candidates: `data/imported/web/clean/core-debt/villagers-gift-candidates.json`
- Clean candidates: `data/imported/web/clean/core-debt/crops-seedprice-candidates.json`
- Clean candidates: `data/imported/web/clean/core-debt/forage-seasons-candidates.json`
- Review root: `data/imported/web/review/core-debt/`

## Recommendation
- Next write step should be villagers gift fields only if an explicit-item source appears in a follow-up review.
- Next best candidate for writeback is forage seasons, but only after schema approval.
- Crops seedPrice should remain blocked until a safer acquisition schema is approved for item-based cases.
