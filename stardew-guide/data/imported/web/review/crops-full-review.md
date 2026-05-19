# Crops Full Candidate Review

Last checked: 2026-05-18

## Snapshot

- Current crops.json entries: 20
- Target crop entries from Wiki tilled-land crop list: 46
- Missing crops: 26
- Clean candidates: 26

## Current Schema Check

- Candidate fields: beginnerNote, growthDays, id, lastChecked, name, regrowDays, seasons, seedPrice, sellPrice, slug, sourceUrls
- disallowed fields present: no
- season field present: no
- seasons field present: yes
- needs verification count in current crops.json: 13

## Missing Crops

- Blue Jazz (blue-jazz)
- Carrot (carrot)
- Garlic (garlic)
- Kale (kale)
- Rhubarb (rhubarb)
- Tulip (tulip)
- Unmilled Rice (unmilled-rice)
- Hops (hops)
- Poppy (poppy)
- Radish (radish)
- Summer Spangle (summer-spangle)
- Summer Squash (summer-squash)
- Sunflower (sunflower)
- Artichoke (artichoke)
- Beet (beet)
- Bok Choy (bok-choy)
- Broccoli (broccoli)
- Fairy Rose (fairy-rose)
- Grape (grape)
- Powdermelon (powdermelon)
- Cactus Fruit (cactus-fruit)
- Pineapple (pineapple)
- Qi Fruit (qi-fruit)
- Sweet Gem Berry (sweet-gem-berry)
- Taro Root (taro-root)
- Tea Leaves (tea-leaves)

## Excluded or Deferred Items

- Fruit Trees
- Wild Seeds
- Mixed Seeds
- Mixed Flower Seeds
- Mushroom Log products
- Artisan Goods
- Animal Products

## Classification Questions

- Special crops that show Season All on the Wiki were kept in scope only when the crop page itself identifies them as crops and the current crop target includes them.
- Grape is modeled as the Fall crop form only; summer forage grapes are intentionally excluded from crops.json.
- Fruit-tree and seed-group content remains out of scope for this file.

## needs verification Summary

- Candidates with seedPrice still needs verification: 7
- Deferred seedPrice slugs: carrot, summer-squash, broccoli, powdermelon, pineapple, qi-fruit, taro-root
- seasons needing verification in clean candidate: 0
- sourceUrls coverage: 26/26

## Recommendation

The candidate set is now schema-clean and ready for commander review. The remaining risk is a small seedPrice deferred list, not schema compatibility.
