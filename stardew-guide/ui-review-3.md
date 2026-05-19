# UI Review 3 - Stardew Guide Game-Site Redesign Audit

## 一、当前 UI 问题

- 首页第一屏虽然直接给出 Villagers / Crops / Fish / Community Center / Money 的入口，功能方向是对的，但视觉层级仍像普通资料站首页：`PageShell` 顶部是白色半透明标题卡，下面是均质的二维卡片网格，没有形成“游戏资料入口 / 工具面板 / 冒险笔记目录”的第一印象。
- 首页标题 `A calmer Stardew Valley guide` 偏品牌描述，入口模块本身也主要依赖文字标题和小色条，缺少可扫描的工具属性，例如进度、日历、礼物、鱼点、金币路线等轻量符号或状态式结构。
- `SiteNav` 信息清楚，但当前是常规网站导航：品牌文字 + 普通链接 chip。它没有明显的游戏资料站感，也没有“手册目录 / 顶部工具条 / codex tab”的层级；移动端换行后可用，但视觉上像普通 SaaS 顶栏。
- `PageShell` 过于通用。所有页面使用同一种圆角白色标题容器、同一种 meadow 色条、同一种大标题节奏，Villagers、Crops、Fish、Tracker、Money 的页面气质没有被区分。
- Villagers / Crops / Fish 列表都使用 `rounded-lg border bg-white p-5 shadow-soft` 的卡片库模式，区别主要是 badge 颜色和字段内容。它们能读，但不像游戏资料表、日历、图鉴或工具面板。
- 列表筛选工具也是标准表单块：白底面板、input、select、results badge。功能完整，但缺少“工具条”感；Fish 的四个过滤器在桌面端合理，移动端会纵向堆叠，扫描时需要较多滚动。
- Crops 的 `Fact` 小块是卡片内再放浅底块，接近“卡片套卡片”。信息密度还可以，但视觉上继续强化了普通白卡片资料库。
- Fish 列表没有把季节、天气、时间、地点做成更像“捕获条件表”的结构，用户要在每张卡里读多段 chip 和文本，移动端快速比较不同鱼时效率一般。
- Villager 列表没有突出礼物查找的核心任务。Birthday、candidate、location、loved gifts 都在卡片内平均展示，缺少一眼扫出“可送什么 / 是否结婚候选 / 生日”的优先级。
- Community Center Tracker 有进度条、百分比和 checkbox，已经具备任务追踪器基础，但视觉仍是普通白卡片列表。房间没有像“任务板 / bundle board”的分区感，bundle item checkbox 也还像表单清单，不像游戏内收集任务。
- Money Guides 目录有对比表，这是正确方向；但上方攻略入口仍是普通文章卡片。详情页由 `Quick facts`、`Why it works`、`Setup steps`、`Profit estimates` 等白色 section 组成，像内部文档或数据审阅页，不像玩家攻略页。
- Money Guide Detail 的 `TextList` 使用手写 `-` 文本列表，而不是语义 bullet 或更强的攻略步骤/注意事项样式；视觉精度和阅读节奏都偏临时。
- 全站色彩 token 当前只有 `cream / meadow / pond / berry / ink`，gold 主要直接用 Tailwind amber。实际界面大面积是 cream 背景 + green text + white cards，pond / berry / gold 的存在感主要限于 chip，整体仍偏单调。
- `globals.css` 有轻量 radial gradient，但页面主体大量白色面板覆盖后纹理感很弱，没有形成 soil / wood / river / notebook 的层级。
- 白卡片使用频率过高：首页入口、PageShell header、Directory tools、列表项、Tracker 面板、Money sections、DataCard 都是白底圆角阴影，页面之间差异小。
- 移动端 375px 宽度下，主要布局使用 `px-4`、`grid gap`、`w-full` 和 `overflow-x-auto`，大概率不会横向溢出；但 Money comparison table 的 `min-w-[720px]` 会产生横向滚动，这是可接受的表格策略，但需要后续 polish 成明确的比较表体验。
- 当前 hover 使用 `hover:-translate-y-0.5`，动效轻量，不会影响静态导出；但过多卡片 hover 也强化了普通卡片站感。

## 二、目标视觉方向

- 网站应像一本可操作的 Stardew 玩家手册：第一页就是目录、工具入口和关键资料索引，不做营销 hero。
- 视觉语言应从“白卡片资料库”转向“codex / field notebook / quest board / tool tray”，用分隔线、标签栏、状态条、像素边框和轻量纸纹提升游戏感。
- 保持移动端优先：入口和列表在 375px 下应先显示最常用字段，次要字段用紧凑 chip 或分组，不让用户在每张卡里读长段落。
- 色彩应更分层但克制：meadow / forest 用于主导航和完成态，pond / river 用于鱼和筛选，berry 用于人物/关系提示，gold 用于收益和 tracker，soil / wood 用于边框、分隔和背景层。
- 首页入口应更像工具模块：Gift Finder、Crop Planner、Fish Calendar、Bundle Tracker、Money Routes 每个模块有清晰功能角色，而不是同一种文章卡。
- 组件应减少大面积纯白面板，改用半透明 notebook surface、浅色 band、左侧色轨、像素式 corner、细网格或纸纹背景。
- 攻略页应更像玩家策略笔记：quick facts、setup steps、profit estimates、caveats 应有攻略阅读节奏，而不是内部审阅文档。
- 不使用官方 Stardew Valley 素材，不靠截图或 logo 获得游戏感；游戏感应来自 CSS 图案、排版、资料结构和轻量组件语法。

## 三、建议分阶段改动

### Phase UI-1:

- 目标：
  建立全站视觉 token 和第一屏方向。把背景、PageShell、SiteNav、首页入口从普通白卡片站调整为“游戏资料手册 / 工具目录”的基础视觉系统。
- 修改文件：
  `app/globals.css`
  `app/page.tsx`
  `components/PageShell.tsx`
  `components/CardLink.tsx`
  `components/SiteNav.tsx`
  `components/SiteFooter.tsx`
- 用户感知收益：
  首页第一屏会更像可用的 Stardew 工具目录；导航更有品牌和 codex 层级；页面标题区域不再像通用 SaaS header；全站颜色从 cream + green + white 扩展到更丰富的 meadow / pond / berry / gold / soil / wood 层级。
- 风险：
  低。主要是 className 和结构层级 polish，不需要改数据、不需要改路由、不需要动 AdSense、不需要动 SEO 配置。需要注意不要让首页入口变成营销 hero，也不要引入复杂动画。
- 是否影响 build：
  理论上不影响。仍需执行 `npm.cmd run build` 验证 Tailwind class、TypeScript 和静态导出。

### Phase UI-2:

- 目标：
  改善 Villagers / Crops / Fish 的扫描体验，把普通卡片库调整为更像 gift finder、crop planner、fish calendar 的资料工具列表。
- 修改文件：
  `components/VillagerDirectory.tsx`
  `components/CropDirectory.tsx`
  `components/FishDirectory.tsx`
  可能少量复用 `app/globals.css` 中已建立的 token。
- 用户感知收益：
  Villagers 更突出生日、候选状态和可送礼物；Crops 更像收益/季节表；Fish 更像捕获条件日历。移动端能更快比较关键字段，减少每张卡片的重复阅读成本。
- 风险：
  中等。虽然不改数据和逻辑，但会触碰 client component 的筛选结果展示结构。需要保持现有 query、select、memo filter、链接 slug 和空状态不变，只改视觉与信息编排。
- 是否影响 build：
  理论上不影响，但必须执行 `npm.cmd run build`。同时建议在 375px 宽度做视觉检查，尤其是 Fish 的多筛选控件和地点 chip。

### Phase UI-3:

- 目标：
  让 Community Center 更像任务追踪器，让 Money Guides 更像玩家攻略，而不是普通白色 section 文档。
- 修改文件：
  `components/CommunityCenterTracker.tsx`
  `components/MoneyGuideDirectory.tsx`
  `components/MoneyGuideDetail.tsx`
  可能少量复用 `app/globals.css` 中已建立的 token。
- 用户感知收益：
  Community Center 的整体进度、房间进度、bundle checkbox 会更像任务板；Money Guides 的目录和详情会更像攻略工具，比较表、步骤、估算和风险提示更清晰。
- 风险：
  中等。Community Center 包含 localStorage 状态、checkbox 更新和进度计算，必须只改 DOM/样式，不改 `storageKey`、item id、progress 计算或 toggle 行为。Money 详情页不能改变字段含义、source notice 或验证状态表达。
- 是否影响 build：
  理论上不影响，但必须执行 `npm.cmd run build`。Community Center 还建议手动确认 checkbox 勾选、刷新后 localStorage 仍保留。

## 四、不建议做的事

- 不使用官方 Stardew Valley 截图、图标、logo、角色图、物品图或 ConcernedApe 相关素材。
- 不做大 landing page，不把首页第一屏变成品牌口号、营销 hero 或宣传页。
- 不引入大型 UI 库，不为了 polish 改项目依赖或 `package.json`。
- 不做复杂动画、滚动叙事、重型 canvas 或会影响静态导出的交互。
- 不把所有内容改成深色赛博风；这与 Stardew Guide / Player Codex 的玩家手册气质不一致。
- 不牺牲信息密度。资料站的核心价值是快速查礼物、季节、地点、bundle 和赚钱路线。
- 不继续把所有内容都放进白色圆角阴影卡片，也不做卡片套卡片。
- 不通过模糊背景、低对比文字或过度纹理制造氛围；所有资料文本必须清晰可读。
- 不改数据结构、数据内容、路由逻辑、SEO 配置、AdSense、sitemap、robots、Cloudflare 或 GitHub 配置。
- 不在第一批 UI 改动里重写 Community Center 逻辑、Money Guide 内容结构或任何广告相关区域。

## 五、需要总指挥确认的问题

1. Phase UI-1 的主视觉是否确认走“field notebook + codex tool tray + light quest board”方向，而不是更像传统 wiki 或更像现代 dashboard？
2. 全站是否可以新增 soil / wood / forest / river / gold 等 Tailwind token，前提是不改 `package.json`、不引入库、只改样式配置或 CSS 变量？如果不想动 `tailwind.config.ts`，可只在 `globals.css` 使用 CSS variables。
3. 首页入口是否允许从当前普通二列卡片改为更强的工具模块布局，例如顶部紧凑工具条 + 主要入口列表 + 小状态标签？
4. 列表页 Phase UI-2 是否允许改变卡片内部字段顺序和视觉分组，但保持现有数据字段、filter 逻辑和链接不变？
5. Money Guides 的视觉是否应偏“攻略笔记 / strategy board”，还是偏“收益比较工具 / planner table”？这会影响 Phase UI-3 的详情页信息节奏。
