# Local Crops Compare

- Formal count: 46
- Local count: 50
- Matched entries: 46
- Local-only entries: 4
- Formal-only entries: 0

## Matched entries

blue-jazz, carrot, cauliflower, coffee-bean, garlic, green-bean, kale, parsnip, potato, rhubarb, strawberry, tulip, unmilled-rice, blueberry, corn, hops, hot-pepper, melon, poppy, radish, red-cabbage, starfruit, summer-spangle, summer-squash, sunflower, tomato, wheat, amaranth, artichoke, beet, bok-choy, broccoli, cranberries, eggplant, fairy-rose, grape, pumpkin, yam, powdermelon, ancient-fruit, cactus-fruit, pineapple, qi-fruit, sweet-gem-berry, taro-root, tea-leaves

## Local-only entries

fiber, mixed-flower-seeds, mixed-seeds, wild-seeds

## Formal-only entries

none

## Fields that can be supplemented

- `nameZh`, `descriptionZh`, and `seedNameZh` can be surfaced as future localized supplements.
- The local file also contains rich seed and processing information, but this stage only keeps compare-safe supplement suggestions.

## Icon / avatar URL coverage

- `作物头像URL` exists for 50/50 local crops.
- `种子头像URL` exists for 50/50 local crops.
- `页面URL` exists for 50/50 local crops.
- `来源URL` exists for 50/50 local crops.

## Fields not recommended for direct writeback

- Raw `中文名`, `作物头像URL`, `种子头像URL`, `页面URL`, `来源URL` should not be written directly into the canonical English JSON.
- Do not copy image URLs into formal data.

## Fields needing Wiki verification

- `descriptionZh` and `seedNameZh` should be checked against Wiki before any future promotion.
- Seed and crop icon URLs are review-only.

## Encoding / source notes

- JSON parsed cleanly. No replacement characters found. The local crop file uses Chinese-localized field names and English companion fields without parse errors.

