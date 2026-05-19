# Full Data Gap Audit

Last checked: 2026-05-18

Scope: audit only for formal data/stardew/villagers.json, crops.json, and fish.json. No formal JSON was modified.

## Source Basis

- Existing formal data: data/stardew/villagers.json, data/stardew/crops.json, data/stardew/fish.json
- Wiki overview extraction: data/imported/web/raw/audit/villagers-overview.json
- Wiki overview extraction: data/imported/web/raw/audit/crops-overview.json
- Wiki overview extraction: data/imported/web/raw/audit/fish-overview.json

## Villagers

- Current entries: 10
- Proposed target entries: 34
- Missing entries: 24

### Missing Villagers

- Alex
- Elliott
- Caroline
- Clint
- Demetrius
- Dwarf
- Evelyn
- George
- Gus
- Jas
- Jodi
- Kent
- Krobus
- Leo
- Lewis
- Linus
- Marnie
- Pam
- Pierre
- Robin
- Sandy
- Vincent
- Willy
- Wizard

### Schema Compatibility

- Existing schema fields: id, slug, name, description, birthday, location, marriageCandidate, lovedGifts, likedGifts, dislikedGifts, hatedGifts, scheduleNotes, sourceUrls, lastChecked, beginnerNote
- Batch 10A candidates use the same field set and do not add new fields.
- needs verification records in current villagers.json: 10
- sourceUrls missing or empty: None
- lastChecked missing: None

## Crops

- Current entries: 20
- Proposed target entries for current crops schema: 46
- Missing entries: 26

### Missing Crops

- Blue Jazz
- Carrot
- Garlic
- Kale
- Rhubarb
- Tulip
- Unmilled Rice
- Hops
- Poppy
- Radish
- Summer Spangle
- Summer Squash
- Sunflower
- Artichoke
- Beet
- Bok Choy
- Broccoli
- Fairy Rose
- Grape
- Powdermelon
- Cactus Fruit
- Pineapple
- Qi Fruit
- Sweet Gem Berry
- Taro Root
- Tea Leaves

### Boundary Notes

- Current target includes standard seasonal crops, multi-season crops, winter crop Powdermelon, and special tilled-land crops from the Wiki Crops overview.
- Multi-season and special crop coverage is incomplete in the current JSON.
- Fruit trees should not be added to crops.json without a separate tree/fruit-tree schema decision.
- Wild Seeds and Mixed Seeds are seed items/groups, not normal crop entries in the current schema.
- Mixed Flower Seeds are also seed/group data and should not be added as a regular crop without schema approval.
- needs verification records in current crops.json: 13

## Fish

- Current entries: 25
- Proposed target fish entries excluding Crab Pot catchables: 61
- Missing fish entries under that target: 36
- Crab Pot catchables requiring separate classification decision: 10

### Missing Fish

- Angler
- Crimsonfish
- Glacierfish
- Glacierfish Jr.
- Legend
- Legend II
- Ms. Angler
- Mutant Carp
- Radioactive Carp
- Son of Crimsonfish
- Albacore
- Pufferfish
- Red Mullet
- Sea Cucumber
- Squid
- Super Cucumber
- Chub
- Dorado
- Goby
- Lingcod
- Midnight Carp
- Woodskip
- Ghostfish
- Ice Pip
- Lava Eel
- Stonefish
- Sandfish
- Scorpion Carp
- Slimejack
- Void Salmon
- Blobfish
- Midnight Squid
- Spook Fish
- Blue Discus
- Lionfish
- Stingray

### Boundary Notes

- Target fish list includes normal fishing pole fish, Night Market fish, Legendary Fish, Legendary Fish II, Ginger Island fish, and special-location fish from the Wiki Fish overview.
- Crab Pot entries are catchables/items and may need a separate catchables schema instead of fish.json.
- Crab Pot candidates: Clam, Cockle, Crab, Crayfish, Lobster, Mussel, Oyster, Periwinkle, Shrimp, Snail
- Other catchables/trash should not be added to fish.json without a separate items/catchables decision.
- needs verification records in current fish.json: 0

## Batch Plan

### Batch 10A

- Target: complete villagers candidates for missing social/giftable villagers
- Quantity: 24 new candidates
- Risk: medium; identity fields are stable, but gift preferences include universal/category rules that must remain out of arrays.
- UI/TypeScript change needed: no, if existing schema remains unchanged.

### Batch 10B

- Target: complete crops under current tilled-land crop schema
- Quantity: 26 missing entries against proposed target
- Risk: medium; boundary decisions are needed for fruit trees, seed groups, wild seeds, mixed seeds, and special crops.
- UI/TypeScript change needed: no for same schema, yes if fruit trees or seed groups are included.

### Batch 10C

- Target: complete fish under current fish schema
- Quantity: 36 missing fish plus 10 Crab Pot catchables needing classification
- Risk: medium-high; legendary, Night Market, Ginger Island, Crab Pot, and other catchables require classification consistency.
- UI/TypeScript change needed: no for fish-only additions, yes if catchables/items become separate schema.

## Recommended First Batch

Batch 10A villagers is the safest first writeback candidate after commander review. It uses the existing villager schema and does not require UI or TypeScript changes.
