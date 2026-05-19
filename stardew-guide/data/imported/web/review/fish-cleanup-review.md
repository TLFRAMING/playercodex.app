# Fish Cleanup Review

## Scope

- Formal file: `data/stardew/fish.json`
- Current count: 61
- This review is read-only. No formal JSON changes are made in this stage.

## 1. Seasons audit

Canonical season values currently used in formal data:

- `Spring`
- `Summer`
- `Fall`
- `Winter`

Non-canonical season values found:

- `Winter during Night Market (15-17)` on `super-cucumber`

Season value distribution:

- `Spring`: 35
- `Summer`: 40
- `Fall`: 40
- `Winter`: 43
- `Winter during Night Market (15-17)`: 1

### Required cleanup

- `super-cucumber`
  - Current `seasons`: `["Summer", "Fall", "Winter during Night Market (15-17)"]`
  - Suggested `seasons`: `["Summer", "Fall", "Winter"]`
  - Special condition should move to `beginnerNote` or a future `availability` field

### Cleanup rule

- `seasons` should contain only canonical season values
- special event or location timing should not remain embedded in `seasons`

## 2. Text cleanup audit

Fields scanned:

- `description`
- `beginnerNote`

Text residue types found:

- `data-sort-value="..."`
- citation markers like `[1]`
- wiki markup / HTML-like residue
- occasional repeated spacing

Affected fish count:

- 14 fish

Affected slugs:

- `albacore`
- `chub`
- `dorado`
- `ghostfish`
- `lingcod`
- `midnight-carp`
- `pufferfish`
- `red-mullet`
- `sandfish`
- `scorpion-carp`
- `sea-cucumber`
- `squid`
- `super-cucumber`
- `woodskip`

Representative cleanup pattern:

- remove `data-sort-value` fragments
- strip citation markers like `[1]`
- remove leftover wiki markup
- normalize whitespace
- keep the result as plain user-readable text

## 3. Locations audit

Unique location values observed:

- `Cindersap Forest`
- `Cindersap Forest Pond`
- `Mountain Lake`
- `Ocean`
- `Pelican Town`
- `River`
- `Secret Woods`
- `Cindersap Forest Waterfalls`
- `Forest Farm`
- `Forest Pond`
- `Forest River`
- `Hill-top Farm`
- `Mutant Bug Lair`
- `Riverlands Farm`
- `The Sewers`
- `Volcano Caldera`
- `Floor 100 of The Mines`
- `Floor 20 of The Mines`
- `Floors 20 and 60 of The Mines`
- `Ginger Island`
- `Ginger Island North & West (freshwater)`
- `Ginger Island Ocean`
- `Pirate Cove`
- `Submarine at Night Market`
- `The Desert`
- `The Mines , Floor 60`
- `Witch's Swamp`

Classification summary:

- Canonical-looking locations:
  - `Cindersap Forest`
  - `Cindersap Forest Pond`
  - `Mountain Lake`
  - `Ocean`
  - `Pelican Town`
  - `River`
  - `Secret Woods`
- Too-specific locations:
  - `Floor 100 of The Mines`
  - `Floor 20 of The Mines`
  - `Floors 20 and 60 of The Mines`
  - `Ginger Island`
  - `Ginger Island North & West (freshwater)`
  - `Ginger Island Ocean`
  - `Pirate Cove`
  - `Submarine at Night Market`
  - `The Desert`
  - `The Mines , Floor 60`
  - `Witch's Swamp`
- Ambiguous / mixed-detail locations:
  - `Cindersap Forest Waterfalls`
  - `Forest Farm`
  - `Forest Pond`
  - `Forest River`
  - `Hill-top Farm`
  - `Mutant Bug Lair`
  - `Riverlands Farm`
  - `The Sewers`
  - `Volcano Caldera`

### Location recommendation

- Keep `locations` as free text for now
- Only clean obvious formatting residue
- Do not split into `locationGroup + detail` in this stage

## 4. Bundle usage audit

- `bundleUsage` is an array on every fish
- No remixed bundle text remains in production `bundleUsage`
- No Crab Pot catchables are present in formal `fish.json`
- Standard Community Center bundle usage is reasonable and limited to the fish that actually belong in those bundles

Standard bundle fish still present:

- `pufferfish`
- `ghostfish`
- `sandfish`
- `woodskip`

## 5. Cleanup plan

### Plan A: Minimal cleanup

- Normalize non-canonical seasons
- Clean `description` and `beginnerNote` text residues
- Keep `locations` as free text
- Do not add fields
- Do not change code

### Plan B: Schema cleanup

- Introduce new schema concepts such as `availability` or `locationGroup`
- Requires 1号 participation for types and page support
- Not suitable during the current review window

## Recommendation

- Recommended plan: `Plan A`
- Reason: the current data quality issues are localized and can be cleaned without a schema change
- `Plan B` should wait for a dedicated schema design round with 1号

## Next-step decision

- This review is suitable for a later formal cleanup pass
- Do not write back to `data/stardew/fish.json` in this stage
