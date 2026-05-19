# Data Debt Inventory

Scope: `data/stardew/villagers.json`, `crops.json`, `fish.json`, `fruit-trees.json`, `forage.json`, `minerals.json`, `bundles.json`, `money-guides.json`

## 1) File Counts

| JSON | Count |
|---|---:|
| villagers.json | 34 |
| crops.json | 46 |
| fish.json | 61 |
| fruit-trees.json | 8 |
| forage.json | 39 |
| minerals.json | 53 |
| bundles.json | 26 |
| money-guides.json | 5 |

## 2) needs verification Summary

Total `needs verification` occurrences found in formal JSON: **57**

| File | Field distribution |
|---|---|
| villagers.json | `scheduleNotes` x34, `likedGifts` x2, `dislikedGifts` x1, `hatedGifts` x5 |
| crops.json | `seedPrice` x9 |
| fruit-trees.json | `saplingPrice` x2 |
| money-guides.json | `notes` x1, `profitEstimates` x3 |
| fish.json | none |
| forage.json | none |
| minerals.json | none |
| bundles.json | none |

### Crop seedPrice rows still unresolved
- `ancient-fruit`
- `coffee-bean`
- `carrot`
- `summer-squash`
- `broccoli`
- `powdermelon`
- `pineapple`
- `qi-fruit`
- `taro-root`

### Villager fields still unresolved
- `shane.likedGifts`
- `jodi.likedGifts`
- `sandy.dislikedGifts`
- `dwarf.hatedGifts`
- `krobus.hatedGifts`
- `linus.hatedGifts`
- `willy.hatedGifts`
- `wizard.hatedGifts`

## 3) sourceUrls / lastChecked / uniqueness

- `sourceUrls` missing or empty: 0
- `lastChecked` missing: 0
- duplicate `slug`: 0
- duplicate `id`: 0

## 4) Schema Inconsistencies / Debt

### villagers.json
- `scheduleNotes` is still a broad production-risk field; every villager row still carries a verification warning.
- Gift arrays still mix verified values with unresolved rule-heavy rows in a few records.

### crops.json
- Legacy fields still remain on the old 20 rows: `description`, `seedSource`, `profitNotes`, `bestUses`.
- `seedPrice` is still unresolved for 9 rows. The 7 tracked crop debts are still open, and 2 additional legacy rows remain unresolved: `ancient-fruit`, `coffee-bean`.

### fish.json
- No current `needs verification` debt.
- Current cleanup is limited to canonical text and seasonal normalization; the schema is otherwise stable for MVP.

### fruit-trees.json
- `banana-tree` and `mango-tree` still need acquisition-price review; current schema cannot safely model item-based costs beyond `saplingPrice`.

### forage.json
- `seasons` still uses `All` in 16 rows. That is a semantic debt, not a hard parse error.

### minerals.json
- `uses` and `museumDonation` are present and stable, but the data model still lacks a richer split for future geode / acquisition-style branches.

### bundles.json
- No current data debt detected in formal rows.

### money-guides.json
- One draft note still carries a verification warning.
- Three guides still have derived profit estimates under review, with one guide carrying two unresolved estimate labels.

## 5) Icon / Image / Chinese Fields

- icon / image / avatar URLs in formal data: 0
- Chinese fields in formal data: 0

## 6) SourceLine / sourceUrls[0] Watch Item

- No missing or empty `sourceUrls` arrays were found.
- Watch item: keep `sourceUrls[0]` ordering stable during staged verification so the first source remains the primary reference in future review files.

## 7) Priority

### P0
- Villagers `scheduleNotes` and unresolved gift fields
- Crops `seedPrice` unresolved rows, especially the 7 tracked crop debts plus `ancient-fruit` and `coffee-bean`

### P1
- Fruit tree acquisition-price follow-up for `banana-tree` and `mango-tree`
- Forage `All` semantic cleanup
- Money-guide estimate confidence cleanup

### P2
- Legacy crop field cleanup (`description`, `seedSource`, `profitNotes`, `bestUses`)
- Minerals schema expansion only if future categories need geode/acquisition branches
- SourceLine ordering watch item

## 8) Next-Step Recommendation

Recommended next debt work:
1. Villagers gift cleanup and `scheduleNotes` review
2. Crop `seedPrice` verification, starting with the 7 known unresolved crop prices
3. Forage `All` semantic cleanup
4. Fruit tree acquisition-cost follow-up
5. Money-guide estimate confidence tightening
