# Money Guides Source Verification Review - Round 2

Scope: `keg-empire`, `truffle-pigs`, and `fairy-rose-honey`. Formal production data was not modified.

## keg-empire

### Source URLs

- https://stardewvalleywiki.com/Ancient_Fruit (wiki)
- https://stardewvalleywiki.com/Starfruit (wiki)
- https://stardewvalleywiki.com/Starfruit_Seeds (wiki)
- https://stardewvalleywiki.com/Keg (wiki)
- https://stardewvalleywiki.com/Wine (wiki)
- https://stardewvalleywiki.com/Greenhouse (wiki)
- https://stardewvalleywiki.com/Farming (wiki)

### Verified Claims

- Ancient Fruit grows after 28 days and continues to produce every 7 days after maturity.
- Starfruit Seeds cost 400g at the Oasis.
- Starfruit grows in summer and has a 13-day growth time.
- The Keg processes fruit and vegetables into beverages and artisan goods.
- Wine is made in a Keg from any fruit.
- Wine value is based on fruit value; normal wine sells for three times fruit base price before profession or aging modifiers.
- The Greenhouse has a 10 by 12 growing area and can grow crops from any season.
- The Artisan profession increases artisan goods sell price by 40%.

### Derived / Unverified Claims

- Mature greenhouse Ancient Fruit wine: about 277,200g per week.
- Starfruit bridge batch: about 94,500g gross.

These are derived route estimates. The sources verify unit values and mechanics, but not the exact route scenarios.

### Recommended Changes

- Add the listed Wiki URLs to `sourceUrls`.
- Keep guide `confidence` as `medium`.
- Set both profit estimate confidence values to `medium`, not `high`.

## truffle-pigs

### Source URLs

- https://stardewvalleywiki.com/Pig (wiki)
- https://stardewvalleywiki.com/Truffle (wiki)
- https://stardewvalleywiki.com/Truffle_Oil (wiki)
- https://stardewvalleywiki.com/Oil_Maker (wiki)
- https://stardewvalleywiki.com/Foraging (wiki)

### Verified Claims

- Pigs live in Deluxe Barns and produce Truffles.
- Mature and fed pigs produce Truffles when required conditions are met.
- Pigs do not produce Truffles in winter.
- Truffle base sell value is 625g.
- Truffle Oil base sell value is 1,065g.
- Oil Maker processes Truffle into Truffle Oil.
- Gatherer and Botanist are relevant to forage/truffle value assumptions.

### Derived / Unverified Claims

- Ten mature pigs selling iridium truffles directly produces about 3.15M per year.
- Direct truffle sale versus Truffle Oil depends on profession, quality, processing, and labor assumptions.

### Recommended Changes

- Add the listed Wiki URLs to `sourceUrls`.
- Keep guide `confidence` as `medium`.
- Keep the annual profit estimate confidence as `needs verification`.

## fairy-rose-honey

### Source URLs

- https://stardewvalleywiki.com/Bee_House (wiki)
- https://stardewvalleywiki.com/Honey (wiki)
- https://stardewvalleywiki.com/Fairy_Rose (wiki)
- https://stardewvalleywiki.com/Ginger_Island (wiki)

### Verified Claims

- Bee Houses produce Honey every 4 days during valid outdoor seasons and do not produce in winter.
- Bee Houses can make flower honey when a grown flower is nearby.
- Bee Houses indoors, including in the Greenhouse, do not produce honey.
- Honey value depends on nearby flower type.
- Fairy Rose Honey sells for 680g.
- Fairy Rose is a fall flower crop.
- Ginger Island includes the Island Farm location.

### Derived / Unverified Claims

- 44 Bee House Fairy Rose array produces about 1.17M per year.
- Specific layout diagrams and exact Bee House flower range should be separately checked before publication.
- `Island_Farm` extraction failed; Ginger Island page was used for island relevance.

### Recommended Changes

- Add the listed Wiki URLs to `sourceUrls`.
- Keep guide `confidence` as `medium`.
- Keep the yearly layout profit estimate confidence as `needs verification`.

## Profit Estimates That Should Remain Under Review

- `truffle-pigs`: Ten mature pigs, direct iridium truffle sales.
- `fairy-rose-honey`: Compact Fairy Rose Honey array.

## Profit Estimates That Can Move To Medium If Approved

- `keg-empire`: Mature greenhouse Ancient Fruit wine.
- `keg-empire`: Starfruit bridge batch.

## Production Write Recommendation

Do not write this review directly into production data. Use `data/imported/web/clean/money-guides/source-verification-candidates-round-2.json` as the candidate source for a later approved write pass.
