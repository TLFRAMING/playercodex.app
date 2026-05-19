# Local Villagers Compare

- Formal count: 34
- Local count: 46
- Matched entries: 34
- Local-only entries: 12
- Formal-only entries: 0

## Matched entries

kent, lewis, vincent, haley, pam, shane, pierre, emily, jas, gus, maru, alex, sam, demetrius, dwarf, willy, leo, penny, elliott, jodi, abigail, sandy, marnie, robin, george, krobus, linus, caroline, sebastian, harvey, wizard, evelyn, leah, clint

## Local-only entries

birdie, bouncer, fizz, gil, governor, grandpa, gunther, henchman, marlon, morris, mr-qi, professor-snail

## Formal-only entries

none

## Fields that can be supplemented

- `nameZh`, `descriptionZh`, `backgroundZh` can be surfaced as future localized supplements.
- `pageUrl` and `礼物数据来源` exist in the local database for all or most rows, but they are review references rather than canonical write targets.

## Icon / avatar URL coverage

- `头像URL` exists for 46/46 local villagers.
- `页面URL` exists for 46/46 local villagers.
- `礼物数据来源` exists for 34/46 local villagers.
- `村民分类来源` exists for 46/46 local villagers.

## Fields not recommended for direct writeback

- Raw `中文名`, `头像URL`, `页面URL`, `礼物数据来源`, `村民分类来源` should not be written directly into the canonical English JSON.
- Do not copy image URLs into formal data.

## Fields needing Wiki verification

- `descriptionZh` and `backgroundZh` should be checked against Wiki before any future promotion.
- `头像URL` is review-only and should be rechecked if used in a public asset strategy.

## Encoding / source notes

- JSON parsed cleanly. No replacement characters found. Local keys are readable Chinese/English field names, not乱码.

