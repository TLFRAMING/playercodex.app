# Fruit Trees Full Review

- Local fruit tree rows: 8
- Clean candidates: 8
- Schema target: fruit-trees.json

## Candidate completeness

### apricot-tree
- name: Apricot Tree
- sourceUrls: https://stardewvalleywiki.com/Apricot_Tree, https://stardewvalleywiki.com/Apricot
- seasons: ["Spring"]
- saplingPrice: 2000
- growthDays: 28
- fruitName: Apricot
- fruitSellPrice: 50
- beginnerNote: Cheap spring tree for early bundles and gifting.
- field completeness: complete

### cherry-tree
- name: Cherry Tree
- sourceUrls: https://stardewvalleywiki.com/Cherry_Tree, https://stardewvalleywiki.com/Cherry
- seasons: ["Spring"]
- saplingPrice: 3400
- growthDays: 28
- fruitName: Cherry
- fruitSellPrice: 80
- beginnerNote: Spring fruit tree with modest value and bundle utility.
- field completeness: complete

### banana-tree
- name: Banana Tree
- sourceUrls: https://stardewvalleywiki.com/Banana_Tree, https://stardewvalleywiki.com/Banana
- seasons: ["Summer"]
- saplingPrice: needs verification
- growthDays: 28
- fruitName: Banana
- fruitSellPrice: 150
- beginnerNote: High-value tropical tree; sapling uses an item exchange rather than gold.
- field completeness: partial

### mango-tree
- name: Mango Tree
- sourceUrls: https://stardewvalleywiki.com/Mango_Tree, https://stardewvalleywiki.com/Mango
- seasons: ["Summer"]
- saplingPrice: needs verification
- growthDays: 28
- fruitName: Mango
- fruitSellPrice: 130
- beginnerNote: Strong island tree; sapling uses an item exchange rather than gold.
- field completeness: partial

### orange-tree
- name: Orange Tree
- sourceUrls: https://stardewvalleywiki.com/Orange_Tree, https://stardewvalleywiki.com/Orange
- seasons: ["Summer"]
- saplingPrice: 4000
- growthDays: 28
- fruitName: Orange
- fruitSellPrice: 100
- beginnerNote: Solid summer tree with moderate value and easy bundle use.
- field completeness: complete

### peach-tree
- name: Peach Tree
- sourceUrls: https://stardewvalleywiki.com/Peach_Tree, https://stardewvalleywiki.com/Peach
- seasons: ["Summer"]
- saplingPrice: 6000
- growthDays: 28
- fruitName: Peach
- fruitSellPrice: 140
- beginnerNote: Higher-value summer fruit tree that also works well for gifts.
- field completeness: complete

### apple-tree
- name: Apple Tree
- sourceUrls: https://stardewvalleywiki.com/Apple_Tree, https://stardewvalleywiki.com/Apple
- seasons: ["Fall"]
- saplingPrice: 4000
- growthDays: 28
- fruitName: Apple
- fruitSellPrice: 100
- beginnerNote: Key fall tree for bundle progress and steady orchard value.
- field completeness: complete

### pomegranate-tree
- name: Pomegranate Tree
- sourceUrls: https://stardewvalleywiki.com/Pomegranate_Tree, https://stardewvalleywiki.com/Pomegranate
- seasons: ["Fall"]
- saplingPrice: 6000
- growthDays: 28
- fruitName: Pomegranate
- fruitSellPrice: 140
- beginnerNote: High-value fall tree with strong bundle and gift utility.
- field completeness: complete

## Needs verification

- saplingPrice: banana-tree, mango-tree
- item-based sapling acquisition is not representable as a gold price in the current minimal schema

## Image / icon URL risk

- Local source data contains icon/avatar URLs, but they are not written into clean candidates or formal data.
- Keep them review-only. Do not download, hotlink, or add to UI.

## Recommendation

- Candidate schema is usable for MVP.
- Banana Tree and Mango Tree need a future acquisition-cost field if the team wants exact item exchange costs.
- Writing a formal fruit-trees.json is reasonable after review approval.
