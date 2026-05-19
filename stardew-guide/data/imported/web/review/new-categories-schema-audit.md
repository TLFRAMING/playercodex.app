# New Categories Schema Audit

本轮只做本地资料库审计，不修改正式数据，不改代码。

## 1. 文件总览

| 文件 | 可解析 | 顶层结构 | 条数 | metadata | sources / URL 字段 | icon / avatar URL | 中文字段 | 英文字段 | 乱码 |
| --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| `stardew_fruit_trees_data_with_icons_zh.json` | 是 | array | 8 | 否 | 有，包含 `页面URL` / `中文页面URL` / `来源URL` | 有 | 有 | 有 | 无 |
| `stardew_all_forage_data_with_icons_zh.json` | 是 | object + rows | 39 | 是 | 有，包含 `页面URL` / `来源URL` | 有 | 有 | 有 | 无 |
| `stardew_animals_data_with_icons_zh.json` | 是 | object + rows | 11 | 否 | 有，包含 `页面URL` / `来源URL` / `图片文件页URL` | 有 | 有 | 有 | 无 |
| `stardew_all_animal_products_data_with_icons_zh.json` | 是 | object + rows | 20 | 否 | 有，包含 `页面URL` / `来源URL` / `图片文件页URL` | 有 | 有 | 有 | 无 |
| `stardew_all_artisan_goods_data_with_icons_zh.json` | 是 | array | 31 | 否 | 有，包含 `页面URL` / `来源URL` / `图片文件页URL` | 有 | 有 | 有 | 无 |
| `stardew_all_cooking_recipes_data_with_icons_zh.json` | 是 | array | 81 | 否 | 有，包含 `英文页面URL` / `中文页面URL` / `来源URL` / `中文来源URL` | 有 | 有 | 有 | 无 |
| `stardew_all_crafting_recipes_data_with_icons_zh.json` | 是 | array | 150 | 否 | 有，包含 `页面URL` / `来源URL` / `图片文件页URL` | 有 | 有 | 有 | 无 |
| `stardew_all_minerals_data_with_icons_zh.json` | 是 | object + rows | 53 | 是 | 有，包含 `页面URL` / `中文页面URL` / `来源URL` / `英文页面URL` | 有 | 有 | 有 | 无 |
| `stardew_all_artifacts_data_with_icons_zh.json` | 是 | object + rows | 42 | 是 | 有，包含 `页面URL` / `中文页面URL` / `来源URL` / `英文页面URL` | 有 | 有 | 有 | 无 |

### 结构观察
- 9 份文件都可解析。
- 所有文件都有英文名字段，且大多数同时有中文名字段。
- 所有文件都有来源 / 页面 URL 字段，但命名不统一，当前没有统一的 `sourceUrls` 形状。
- 所有文件都有 icon / avatar 相关 URL，但大多是 wiki 托管链接，不是正式游戏资产目录。
- 目前本地资料库没有明显乱码问题。

## 2. 分类边界判断

### fruit-trees.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与现有 crops 冲突：低，属于相邻但不同实体
- 需要关系：与 crops、artisan goods 有弱关系

### forage.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与现有 crops/fish 冲突：低
- 需要关系：与 seasons、locations 有关系

### animals.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与现有 villagers/crops 冲突：低
- 需要关系：与 animal-products、artisan goods 有关系

### animal-products.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与 animals 冲突：中，必须保留 source animal 关系
- 需要关系：与 animals、artisan goods 有关系

### artisan-goods.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与 crops/animals/fish 冲突：中，主要是输入来源关系
- 需要关系：与 crops、animals、fish、machines 有关系

### cooking-recipes.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与现有分类冲突：低
- 需要关系：与 crops、animal-products、fish、forage、artisan goods 有关系

### crafting-recipes.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与现有分类冲突：低
- 需要关系：与 crops、forage、minerals、artifacts、animal-products 有关系

### minerals.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与 artifacts 冲突：低
- 需要关系：与 geodes、museum 有关系

### artifacts.json
- 建议独立 JSON：是
- 建议独立页面：是
- 建议详情页：是
- 应进入 `/database`：是
- 应进入顶部导航：否，先放在数据库 hub 下
- 与 minerals 冲突：低
- 需要关系：与 museum、geodes、fishing/foraging 有关系

## 3. 推荐 schema 草案

### FruitTree
- id
- slug
- name
- fruitName
- saplingPrice
- growthDays
- seasons
- greenhouseCompatible
- beginnerNote
- sourceUrls
- lastChecked

### Forage
- id
- slug
- name
- seasons
- locations
- sellPrice
- beginnerNote
- sourceUrls
- lastChecked

### Animal
- id
- slug
- name
- animalType
- purchasePrice
- requiredBuilding
- matureDays
- produces
- productionInterval
- beginnerNote
- sourceUrls
- lastChecked

### AnimalProduct
- id
- slug
- name
- sourceAnimal
- sellPrice
- qualityNotes
- beginnerNote
- sourceUrls
- lastChecked

### ArtisanGood
- id
- slug
- name
- machine
- inputItems
- processingDays
- sellPrice
- beginnerNote
- sourceUrls
- lastChecked

### CookingRecipe
- id
- slug
- name
- ingredients
- energy
- health
- buffs
- unlockSource
- beginnerNote
- sourceUrls
- lastChecked

### CraftingRecipe
- id
- slug
- name
- ingredients
- outputQuantity
- unlockSource
- beginnerNote
- sourceUrls
- lastChecked

### Mineral
- id
- slug
- name
- category
- sellPrice
- museumDonation
- sourceMethods
- beginnerNote
- sourceUrls
- lastChecked

### Artifact
- id
- slug
- name
- category
- sellPrice
- museumDonation
- sourceMethods
- beginnerNote
- sourceUrls
- lastChecked

## 4. 页面建议

### Fruit Trees
- 推荐路由：`/database/fruit-trees`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：season / greenhouseCompatible / growthDays
- 第一版不做：收益计算器、复杂关系图

### Forage
- 推荐路由：`/database/forage`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：season / location / sellPrice
- 第一版不做：地图层、概率分析

### Animals
- 推荐路由：`/database/animals`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：animalType / requiredBuilding / produce
- 第一版不做：繁殖模拟、利润优化器

### Animal Products
- 推荐路由：`/database/animal-products`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：sourceAnimal / sellPrice / quality
- 第一版不做：加工链图谱

### Artisan Goods
- 推荐路由：`/database/artisan-goods`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：machine / input type / sellPrice
- 第一版不做：全工艺链利润工具

### Cooking Recipes
- 推荐路由：`/database/cooking-recipes`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：buff / ingredient count / unlock source
- 第一版不做：配餐规划器

### Crafting Recipes
- 推荐路由：`/database/crafting-recipes`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：unlock source / output type / ingredient count
- 第一版不做：材料成本估算器

### Minerals
- 推荐路由：`/database/minerals`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：category / sellPrice / museumDonation
- 第一版不做：矿井分层策略

### Artifacts
- 推荐路由：`/database/artifacts`
- 需要列表页：是
- 需要详情页：是
- 第一版筛选：source method / museumDonation / sellPrice
- 第一版不做：博物馆收集进度追踪

## 5. 优先级排序

### Phase 13B
- Fruit Trees

### Phase 13C
- Forage
- Minerals

### Phase 13D
- Animals
- Animal Products
- Artifacts

### Phase Later
- Artisan Goods
- Cooking Recipes
- Crafting Recipes

### 排序理由
- Fruit Trees 数据最小、语义清晰、最接近现有 crops 页面形态。
- Forage 和 Minerals 数据结构简单、筛选直观、静态生成风险低。
- Animals / Animal Products 有稳定业务价值，但需要处理来源关系。
- Artifacts 仍是对象型资料库，但关系和来源比 minerals 稍复杂。
- Artisan Goods / Cooking / Crafting 的关系链更重，适合在前几批 schema 稳定后再做。

## 6. 图片 / icon URL 风险

- 所有文件都有 icon / avatar / 图片文件页 URL。
- 主要域名：
  - `stardewvalleywiki.com`
  - `zh.stardewvalleywiki.com`
  - `wiki.stardewvalley.net`
- 这些 URL 都是 wiki 托管链接，不是官方游戏素材 CDN。
- `animals`、`animal-products`、`cooking-recipes`、`minerals`、`artifacts` 中可见多 URL 拼接在单个字符串里的情况，说明当前资料库更适合作为 review 参考，不适合直接热链到正式 UI。
- 默认结论：当前不写入正式数据，不接 UI，不下载，不 hotlink。

## 7. verificationNeeded

### Fruit Trees
- `fruitName`
- `saplingPrice`
- `growthDays`
- `seasons`
- `greenhouseCompatible`

### Forage
- `locations`
- `seasons`
- `sellPrice`
- `beginnerNote`

### Animals
- `purchasePrice`
- `requiredBuilding`
- `matureDays`
- `produces`
- `productionInterval`

### Animal Products
- `sourceAnimal`
- `sellPrice`
- `qualityNotes`

### Artisan Goods
- `machine`
- `inputItems`
- `processingDays`
- `sellPrice`

### Cooking Recipes
- `ingredients`
- `energy`
- `health`
- `buffs`
- `unlockSource`

### Crafting Recipes
- `ingredients`
- `outputQuantity`
- `unlockSource`

### Minerals
- `category`
- `sellPrice`
- `museumDonation`
- `sourceMethods`

### Artifacts
- `category`
- `sellPrice`
- `museumDonation`
- `sourceMethods`

## 8. 推荐总方案

- 先做：Fruit Trees
- 需要 1 号做什么：确认 `/database` 路由层级、列表/详情页的通用布局和静态生成策略
- 需要 2 号做什么：把本地资料库继续拆成可写入的 review / clean candidate
- 需要 3 号做什么：如果要正式上线图标或素材，先做版权与热链策略确认
- 暂缓：Artisan Goods、Cooking Recipes、Crafting Recipes

## 9. 结论

- 9 个分类都建议做成独立 JSON。
- 9 个分类都建议有详情页。
- 第一版都应进入 `/database`，但先不进顶部导航。
- 图片 / icon URL 只保留在 review 阶段，不进入正式 schema。
- 当前最适合先做的是 Fruit Trees。
