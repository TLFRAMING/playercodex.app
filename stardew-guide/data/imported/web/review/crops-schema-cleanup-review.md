# Crops Schema Cleanup Review

Last checked: 2026-05-18

## Snapshot

- Current crops.json entries: 46
- Formal data file reviewed: data/stardew/crops.json
- No formal JSON was modified.

## Field Counts

- id: 46
- slug: 46
- name: 46
- seasons: 46
- growthDays: 46
- seedPrice: 46
- sellPrice: 46
- beginnerNote: 46
- sourceUrls: 46
- lastChecked: 46
- regrowDays: 26
- regrowthDays: 20
- description: 20
- seedSource: 20
- profitNotes: 20
- bestUses: 20

## Field Classification

### Canonical schema fields

- id
- slug
- name
- seasons
- growthDays
- regrowthDays
- seedPrice
- sellPrice
- beginnerNote
- sourceUrls
- lastChecked

### Legacy extra fields

- description
- seedSource
- profitNotes
- bestUses

### Compatibility-only fields or values

- regrowDays
- season
- seasons value `All`

### Should-remove fields

- season
- regrowDays

### Needs-decision fields

- description
- seedSource
- profitNotes
- bestUses

Reason: current crop pages still read these fields directly from normalized crop data, so removing them now would affect engineering read logic unless 1号 updates the readers first.

## regrowDays / regrowthDays

### Entries using `regrowDays`

- blue-jazz
- carrot
- garlic
- kale
- rhubarb
- tulip
- unmilled-rice
- hops
- poppy
- radish
- summer-spangle
- summer-squash
- sunflower
- artichoke
- beet
- bok-choy
- broccoli
- fairy-rose
- grape
- powdermelon
- cactus-fruit
- pineapple
- qi-fruit
- sweet-gem-berry
- taro-root
- tea-leaves

### Entries using `regrowthDays`

- parsnip
- potato
- cauliflower
- green-bean
- strawberry
- tomato
- hot-pepper
- blueberry
- melon
- corn
- starfruit
- cranberries
- pumpkin
- yam
- eggplant
- ancient-fruit
- coffee-bean
- red-cabbage
- wheat
- amaranth

### Entries using neither

- None

### Recommendation

- Final cleanup should unify on `regrowthDays`.
- Keep `regrowDays` only as a temporary compatibility shim until the readers are updated.

## seasons / All / Special

### Entries containing `All`

- cactus-fruit
- pineapple
- qi-fruit
- taro-root

### Entries containing `Special`

- None

### Non-array seasons

- None

### Recommendation

- Final cleanup should unify these values to `Special` for the pages and filters that treat special crops separately.
- Keep the compatibility mapping only until the reader and filter logic are confirmed stable.

## Legacy Field Placement

### description

- Present on: parsnip, potato, cauliflower, green-bean, strawberry, tomato, hot-pepper, blueberry, melon, corn, starfruit, cranberries, pumpkin, yam, eggplant, ancient-fruit, coffee-bean, red-cabbage, wheat, amaranth
- Page dependency: yes. The crop detail page uses `crop.description` as part of the rendered detail text.
- Recommendation: do not delete yet. If the goal is full schema cleanup, move narrative detail into review or derive it in the reader first.

### seedSource

- Present on: parsnip, potato, cauliflower, green-bean, strawberry, tomato, hot-pepper, blueberry, melon, corn, starfruit, cranberries, pumpkin, yam, eggplant, ancient-fruit, coffee-bean, red-cabbage, wheat, amaranth
- Page dependency: yes. The crop detail page renders `Seed source` from `crop.seedSource`.
- Recommendation: do not delete yet without 1号 updating the reader path.

### profitNotes

- Present on: parsnip, potato, cauliflower, green-bean, strawberry, tomato, hot-pepper, blueberry, melon, corn, starfruit, cranberries, pumpkin, yam, eggplant, ancient-fruit, coffee-bean, red-cabbage, wheat, amaranth
- Page dependency: yes. The crop detail page and directory render profit notes directly.
- Recommendation: keep for now or move to review after reader changes.

### bestUses

- Present on: parsnip, potato, cauliflower, green-bean, strawberry, tomato, hot-pepper, blueberry, melon, corn, starfruit, cranberries, pumpkin, yam, eggplant, ancient-fruit, coffee-bean, red-cabbage, wheat, amaranth
- Page dependency: yes. The crop detail page renders best uses directly.
- Recommendation: keep for now or move to review after reader changes.

## seedPrice Needs Verification

Current approved debt list remains limited to 7 crops:

- carrot
- summer-squash
- broccoli
- powdermelon
- pineapple
- qi-fruit
- taro-root

No additional crop entered this review as a seedPrice debt item.

## Cleanup Plans

### Plan A: Minimal cleanup

- Unify field names and values only.
- Keep current schema-compatible legacy fields in place.
- Do not process seedPrice yet.
- Do not add fields.
- Do not change page code.

### Plan B: Full cleanup

- Remove legacy extra fields from production crops JSON.
- Unify regrowDays usage to regrowthDays.
- Unify seasons values to Special for special crops.
- Preserve the approved seedPrice debt list.
- Do not add fields.

## Recommendation

- Recommend Plan A for now.
- Reason: current crop pages still depend on the legacy extra fields, so removing them without 1号 updating the reader logic would create avoidable read-path risk.
- Plan B should wait for a coordinated reader update and validation pass.

## Next Step

- If the team wants to proceed with cleanup, the next phase should be a reader-aware schema migration led with 1号 involved.
