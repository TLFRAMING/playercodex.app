# Core Verification Review

## Scope

- Crops seedPrice candidates: 7
- Villager gift fields under review: 8
- Formal data was not modified in this stage.

## Crops seedPrice

### carrot
- currentValue: needs verification
- candidateValue: needs verification
- confidence: needs verification
- sourceUrls: https://stardewvalleywiki.com/Carrot, https://stardewvalleywiki.com/Carrot_Seeds
- notes: Seed page says the crop is not sold at General Store, JojaMart, or Traveling Cart. It is obtained from Seed Spots, Raccoon requests, the Raccoon Wife shop for 1 Maple Seed, and Golden Fishing Treasure. No common gold purchase price found.

### summer-squash
- currentValue: needs verification
- candidateValue: needs verification
- confidence: needs verification
- sourceUrls: https://stardewvalleywiki.com/Summer_Squash, https://stardewvalleywiki.com/Summer_Squash_Seeds
- notes: Seed page says the crop is not sold at General Store, JojaMart, or Traveling Cart. It is obtained from Seed Spots, Raccoon requests, the Raccoon Wife shop for 15 Sap, and Golden Fishing Treasure. No common gold purchase price found.

### broccoli
- currentValue: needs verification
- candidateValue: needs verification
- confidence: needs verification
- sourceUrls: https://stardewvalleywiki.com/Broccoli, https://stardewvalleywiki.com/Broccoli_Seeds
- notes: Seed page says the crop is not sold at General Store, JojaMart, or Traveling Cart. It is obtained from Seed Spots, Raccoon requests, the Raccoon Wife shop for 5 Moss, and Golden Fishing Treasure. No common gold purchase price found.

### powdermelon
- currentValue: needs verification
- candidateValue: needs verification
- confidence: needs verification
- sourceUrls: https://stardewvalleywiki.com/Powdermelon, https://stardewvalleywiki.com/Powdermelon_Seeds
- notes: Seed page says the crop is not sold at General Store, JojaMart, or Traveling Cart. It is obtained from Seed Spots, Raccoon requests, the Raccoon Wife shop for 2 Pine Cone, and Golden Fishing Treasure. No common gold purchase price found.

### pineapple
- currentValue: needs verification
- candidateValue: Magma Cap (1)
- confidence: medium
- sourceUrls: https://stardewvalleywiki.com/Pineapple, https://stardewvalleywiki.com/Pineapple_Seeds
- notes: Seed page states Island Trader sells Pineapple Seeds for one Magma Cap each. This is an item-based purchase price, not a gold price.

### qi-fruit
- currentValue: needs verification
- candidateValue: needs verification
- confidence: needs verification
- sourceUrls: https://stardewvalleywiki.com/Qi_Fruit, https://stardewvalleywiki.com/Qi_Bean
- notes: Seed page describes Qi Bean as a quest seed found during Qi's Crop. It is not a standard purchasable seed with a common shop gold price.

### taro-root
- currentValue: needs verification
- candidateValue: Bone Fragment (2)
- confidence: medium
- sourceUrls: https://stardewvalleywiki.com/Taro_Root, https://stardewvalleywiki.com/Taro_Tuber
- notes: Seed page states Island Trader sells Taro Tubers for 2 Bone Fragments each. This is an item-based purchase price, not a gold price.

## Villager gifts

The eight reviewed villager gift fields contained rule-only tables and no explicit item rows. The clean candidate file is therefore limited to rule exclusions and keeps the suggested explicit-item value empty.

### shane.likedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Likes (except Pickles); All Eggs (except Void Egg); All Fruit (except Hot Pepper)
- confidence: needs verification
- notes: Gift table contains only universal/category rules; no explicit item rows were found for liked gifts.

### jodi.likedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Likes (except Garlic); All Eggs (except Void Egg); All Fruit (except Spice Berry); All Milk
- confidence: needs verification
- notes: Gift table contains only universal/category rules; no explicit item rows were found for liked gifts.

### sandy.dislikedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Dislikes
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for disliked gifts.

### dwarf.hatedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Hates
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for hated gifts.

### krobus.hatedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Hates (except Monster Musk, Seafoam Pudding, Strange Bun, & Void Mayonnaise)
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for hated gifts.

### linus.hatedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Hates (except Carp and Wild Bait)
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for hated gifts.

### willy.hatedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Hates (except Seafoam Pudding)
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for hated gifts.

### wizard.hatedGifts
- currentValue: ["needs verification"]
- candidateValue: []
- excludedRules: All Universal Hates (except Slime)
- confidence: needs verification
- notes: Gift table contains only universal rules; no explicit item rows were found for hated gifts.

## Source coverage

- Each crop candidate has at least one source URL and usually two.
- Each villager candidate has the corresponding villager page URL.

## Recommendation

- Crops: keep the five non-buyable entries under review; pineapple and taro-root have confirmed item-based purchase prices.
- Villagers: keep all eight fields under review until explicit item rows appear or the team accepts the rule-only interpretation as a separate schema choice.

## Final Decision

- No formal data write this round.
- Keep crops `seedPrice` needs verification for:
  - carrot
  - summer-squash
  - broccoli
  - powdermelon
  - pineapple
  - qi-fruit
  - taro-root

- Keep villager gift `needs verification` for:
  - shane.likedGifts
  - jodi.likedGifts
  - sandy.dislikedGifts
  - dwarf.hatedGifts
  - krobus.hatedGifts
  - linus.hatedGifts
  - willy.hatedGifts
  - wizard.hatedGifts

- Pineapple and taro-root have item-based acquisition costs, but the current schema cannot represent them safely.
- Future schema idea:
  - seedSource
  - seedCost
  - exchangeCost
  - acquisitionNotes
  But do not implement now.
