# Money Guides Source Verification Review

Scope: 	ea-saplings and ish-smoker. Formal production data was not modified.

## tea-saplings

### Source URLs
- https://stardewvalleywiki.com/Tea_Sapling (wiki)
- https://stardewvalleywiki.com/Tea_Leaves (wiki)
- https://stardewvalleywiki.com/Caroline (wiki)

### Verified Claims
- Tea Sapling current sell price is 250g. | source: https://stardewvalleywiki.com/Tea_Sapling | confidence: high
- Tea Sapling recipe is mailed the day after Caroline's 2-heart event. | source: https://stardewvalleywiki.com/Tea_Sapling | confidence: high
- Tea Sapling takes 20 days to mature and produces Tea Leaves during the final week of each season except winter outdoors. | source: https://stardewvalleywiki.com/Tea_Sapling | confidence: high
- Tea Leaves are the crop produced by Tea Bushes. | source: https://stardewvalleywiki.com/Tea_Leaves | confidence: high

### Unverified Claims
- Official 1.6 changelog confirms the Tea Sapling sell-price change. | reason: Official changelog extraction failed in this environment; Wiki currently verifies current price but not this changelog claim.
- 100 saplings cash out to about 25,000g before material opportunity cost. | reason: Derived estimate; source verifies 250g unit price but not this exact scenario.

### Recommended Changes
- sourceUrls: ["https://stardewvalleywiki.com/Tea_Sapling","https://stardewvalleywiki.com/Tea_Leaves","https://stardewvalleywiki.com/Caroline"]
- confidence: medium
- profit estimate confidence recommendations: [{"label":"Post-1.6 Tea Sapling sale value","confidence":"high"},{"label":"100 sapling cash-out","confidence":"medium"}]
- notes: Wiki sources verify current Tea Sapling price and recipe path. Keep versionRisk high until official 1.6 changelog or wiki history is reviewed.

## fish-smoker

### Source URLs
- https://stardewvalleywiki.com/Fish_Smoker (wiki)
- https://stardewvalleywiki.com/Smoked_Fish (wiki)
- https://stardewvalleywiki.com/Fishing (wiki)
- https://stardewvalleywiki.com/Catfish (wiki)
- https://stardewvalleywiki.com/Lava_Eel (wiki)

### Verified Claims
- Fish Smoker recipe is purchased from the Fish Shop for 10,000g. | source: https://stardewvalleywiki.com/Fish_Smoker | confidence: high
- Fish Smoker crafting ingredients are 10 Hardwood, 1 Sea Jelly, 1 River Jelly, and 1 Cave Jelly. | source: https://stardewvalleywiki.com/Fish_Smoker | confidence: high
- Fish Smoker uses any fish and 1 coal to create Smoked Fish. | source: https://stardewvalleywiki.com/Fish_Smoker | confidence: high
- Smoked Fish processing time is 50 minutes. | source: https://stardewvalleywiki.com/Smoked_Fish | confidence: high
- Smoked Fish doubles fish sell price while retaining quality. | source: https://stardewvalleywiki.com/Smoked_Fish | confidence: high
- Smoked Fish is an Artisan Good. | source: https://stardewvalleywiki.com/Smoked_Fish | confidence: high
- Smoked Fish benefits from Fisher, Angler, and Artisan professions. | source: https://stardewvalleywiki.com/Smoked_Fish | confidence: high
- Catfish and Lava Eel can be used as high-value fish examples. | source: https://stardewvalleywiki.com/Catfish | confidence: medium

### Unverified Claims
- Official 1.6 changelog confirms Fish Smoker introduction. | reason: Official changelog extraction failed in this environment; Wiki verifies current mechanics but not the official changelog text.
- Spring rainy-day Catfish model yields about 16,800g per efficient day. | reason: Derived gameplay estimate; source pages verify item mechanics and fish values, not this daily route output.
- Profession-boosted active day yields about 21,000g to 25,200g. | reason: Derived gameplay estimate based on route assumptions; not directly stated by source pages.

### Recommended Changes
- sourceUrls: ["https://stardewvalleywiki.com/Fish_Smoker","https://stardewvalleywiki.com/Smoked_Fish","https://stardewvalleywiki.com/Fishing","https://stardewvalleywiki.com/Catfish","https://stardewvalleywiki.com/Lava_Eel"]
- confidence: medium
- profit estimate confidence recommendations: [{"label":"Spring rainy-day Catfish model","confidence":"needs verification"},{"label":"Profession-boosted active day","confidence":"needs verification"}]
- notes: Wiki sources verify core Fish Smoker mechanics and profession interactions. Keep exact daily profit estimates under review because they depend on route assumptions.

## Claims That Should Remain Under Review

- Official changelog confirmation for Tea Sapling price change and Fish Smoker introduction, because official changelog extraction failed.
- Exact daily or annual route profit estimates, because source pages verify mechanics and unit values but not full route simulations.
