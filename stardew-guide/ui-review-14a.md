# UI Audit 14A

## 一、当前 UI 最大的 5 个问题

1. `Database Hub` 的层级是清楚的，但 Live / Planned 的视觉区分还偏弱，更多依赖小 pill 和段落标题，第一眼仍像一份普通分类清单。
2. `Fruit Trees / Forage / Minerals` 已经统一到同一套 codex 视觉语言，但三者卡片结构仍非常接近，只是换了标题和 accent 色，工具气质还不够强。
3. `Forage` 和尤其 `Minerals` 的 `locations` / `uses` 文本很长，虽然会换行，但在 375px 下卡片高度很快增长，扫描效率会被密集文本拖慢。
4. `Minerals` 的用途信息是最容易压迫版面的区域，长 `uses` 列表在多行后会吃掉很多首屏可见卡片数量，后续继续扩量时最先失去可扫性。
5. 新增页面整体没有回退成普通白卡片堆叠，这是好事，但部分目录页的卡片“厚度”和“信息块数量”已经接近上限，后续需要更明确的分层，否则会变成高密度但不够聚焦的资料墙。

## 二、目标视觉方向

- 继续维持 `Player Codex / Stardew Guide` 的手册感，不回到 SaaS 式卡片库。
- 每个目录页保留统一的系统语言，但要通过卡片内部信息优先级区分“工具气质”。
- `Database Hub` 应该像总索引台，Live / Planned 的层次比现在再清楚一点。
- `Fruit Trees` 要更像 orchard planner，强调季节和成长周期。
- `Forage` 要更像 seasonal pickup index，重点是 location 和 bundle 价值。
- `Minerals` 要更像 museum / uses index，强调用途和归类，而不是把长列表平铺出来。
- 375px 下优先保信息扫描，不优先堆更多装饰。
- 长文本要可读，但不能继续无限扩张卡片高度。

## 三、建议分阶段改动

### Phase UI-3A:
- 目标：收紧 `Database Hub` 的 Live / Planned 层级，让总索引台更像入口而不是普通分类表。
- 修改文件：`stardew-guide/app/database/page.tsx`，如需少量收口样式则可复用 `stardew-guide/app/globals.css` 的现有 token。
- 用户感知收益：用户会更快分辨哪些是已上线工具，哪些只是规划项。
- 风险：低到中等，主要是 section 级排版和 status 呈现。
- 是否影响 build：是，任何页面改动都应重新 build。

### Phase UI-3B:
- 目标：压缩 `Minerals` 的长 `uses` / `locations` 密度，让移动端更容易扫。
- 修改文件：`stardew-guide/components/MineralDirectory.tsx`，必要时少量复用 `stardew-guide/app/globals.css`。
- 用户感知收益：首屏能看到更多条目，长用途文本不会把卡片拖得过高。
- 风险：中等，属于高密度信息块重排。
- 是否影响 build：是。

### Phase UI-3C:
- 目标：再微调 `Forage` 和 `Fruit Trees` 的卡片内部优先级，让三类目录页在同一系统下仍有明显工具差异。
- 修改文件：`stardew-guide/components/ForageDirectory.tsx`、`stardew-guide/components/FruitTreeDirectory.tsx`，必要时少量复用 `stardew-guide/app/globals.css`。
- 用户感知收益：目录页会更像不同工具，而不是同一模板的三个变体。
- 风险：中等，主要是密度和层级的再平衡。
- 是否影响 build：是。

## 四、不建议做的事

- 不要改正式数据。
- 不要加官方 Stardew Valley 素材、截图、logo。
- 不要引入大型 UI 库。
- 不要做复杂动画。
- 不要把目录页重新拉回普通白卡片堆叠。
- 不要把 `locations` / `uses` 直接截断到失去可用信息。
- 不要把页面做成深色赛博风。
- 不要让 `Database Hub` 变成纯营销 landing page。

## 五、需要总指挥确认的问题

1. `Database Hub` 需不需要在下一阶段继续强化 Live / Planned 的视觉分层？
2. `Minerals` 是否允许在卡片里把 `uses` 做更强的层级压缩，以换取更好的移动端扫描效率？
3. `Forage` 和 `Fruit Trees` 是否要继续做成更明显的不同工具，而不是共享更强的统一模板？

## 六、审计结论

- 是否修改代码：否
- 输出文件路径：`stardew-guide/ui-review-14a.md`
- 优先 polish 页面：`/minerals`，其次 `/forage`，再是 `/database`
- 是否建议进入 UI-3：建议
