# Hero Stack and Case Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage hero stack with responsive React/CSS and replace the three portfolio visuals with one supplied and two generated enterprise-dashboard images.

**Architecture:** Keep `Hero` and `Portfolio` as the owning components. Move the hero layer contract into a small data module that can be tested with Node's built-in test runner, render the diagram as semantic DOM, and style connectors with CSS pseudo-elements. Store all case images as local PNG assets and leave the existing carousel state machine unchanged.

**Tech Stack:** React 19, Vite 8, CSS, Node `node:test`, OpenAI Image Generation, browser visual QA.

## Global Constraints

- The hero reference must be recreated with React structure and CSS, never as a full-card bitmap.
- Keep the homepage copy, navigation, carousel controls, case copy, routes, and backend surface unchanged.
- Use the supplied tender-system screenshot for the first case.
- Generate the sales and knowledge images in the same light-gray/blue enterprise-dashboard design language and store them locally.
- Preserve responsive behavior and `prefers-reduced-motion` support.

---

### Task 1: Hero stack contract and semantic rendering

**Files:**
- Create: `src/components/heroStackData.js`
- Create: `tests/hero-stack.test.mjs`
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Produces: `heroStackLayers`, an ordered array of `{ id, title, icon, tone }` records.
- Consumes: `LineIcon` icon names `grid`, `database`, `brain`, and `cube` in `Hero.jsx`.

- [ ] **Step 1: Write the failing data-contract test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { heroStackLayers } from '../src/components/heroStackData.js'

test('hero stack exposes the four approved layers in order', () => {
  assert.deepEqual(
    heroStackLayers.map(({ title }) => title),
    ['业务场景', '数据与规则', 'AI 能力', '智能软件'],
  )
  assert.equal(heroStackLayers[1].tone, 'rules')
  assert.equal(heroStackLayers[3].tone, 'accent')
})
```

- [ ] **Step 2: Run the test and confirm RED**

Run: `node --test tests/hero-stack.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `heroStackData.js`.

- [ ] **Step 3: Add the minimal layer data**

```js
export const heroStackLayers = [
  { id: 'business', title: '业务场景', icon: 'grid', tone: 'default' },
  { id: 'rules', title: '数据与规则', icon: 'database', tone: 'rules' },
  { id: 'ai', title: 'AI 能力', icon: 'brain', tone: 'default' },
  { id: 'software', title: '智能软件', icon: 'cube', tone: 'accent' },
]
```

- [ ] **Step 4: Run the data test and confirm GREEN**

Run: `node --test tests/hero-stack.test.mjs`

Expected: one passing test and zero failures.

- [ ] **Step 5: Refactor `Hero.jsx` to consume the contract**

Import `heroStackLayers`, add a brain line icon, replace the current toolbar/detail/code markup with:

```jsx
<div className="hero-system" aria-label="智能软件构建路径">
  <p className="system-name">Intelligent software stack</p>
  <div className="system-loop system-loop-left" aria-hidden="true" />
  <div className="system-loop system-loop-right" aria-hidden="true" />
  <div className="system-flow">
    {heroStackLayers.map((item, index) => (
      <div className="system-flow-row" key={item.id}>
        <div className={`system-node system-node-${item.tone}`}>
          <span className="system-icon"><LineIcon type={item.icon} size={30} /></span>
          <strong>{item.title}</strong>
        </div>
        {index < heroStackLayers.length - 1 ? <span className="system-connector" aria-hidden="true" /> : null}
      </div>
    ))}
  </div>
  <p className="system-footer">从一个高价值环节开始 · 持续迭代</p>
</div>
```

- [ ] **Step 6: Run test and lint for the component change**

Run: `node --test tests/hero-stack.test.mjs && npm run lint`

Expected: the data test passes and Oxlint exits with code 0.

### Task 2: Responsive hero diagram styling

**Files:**
- Modify: `src/index.css` hero-system rules and responsive overrides.

**Interfaces:**
- Consumes: `.system-loop-left`, `.system-loop-right`, `.system-node-default`, `.system-node-rules`, and `.system-node-accent` emitted by `Hero.jsx`.
- Produces: a responsive four-layer diagram with center connectors and side return loops.

- [ ] **Step 1: Capture the current desktop hero as the visual RED baseline**

Open `http://127.0.0.1:5173/` at a desktop viewport and save a screenshot showing that the current right-side card does not match the approved reference.

- [ ] **Step 2: Replace the hero-system CSS block**

Implement these exact visual relationships:

```css
.hero-system { min-height: 590px; padding: 30px 62px 0; background: #fff; }
.system-name { text-align: center; letter-spacing: .15em; text-transform: uppercase; }
.system-flow { padding: 18px 0 28px; }
.system-node { grid-template-columns: 54px 1fr; min-height: 80px; padding: 16px 72px; }
.system-node-rules { border-color: rgba(11,143,151,.58); }
.system-node-accent { border-color: #0b8f97; background: linear-gradient(110deg,#0b8f97,#138f90); color: #fff; }
.system-connector { width: 2px; height: 34px; position: relative; }
.system-loop { position: absolute; top: 112px; bottom: 112px; width: 42px; border-block: 1px dashed #aebdce; }
.system-footer { margin-inline: -62px; padding: 18px 24px; border-top: 1px solid var(--line); text-align: center; }
```

Add arrowheads and center connector dots with pseudo-elements. At `max-width: 720px`, reduce side padding to `42px`, node padding to `12px 28px`, and hide side loops below `440px`.

- [ ] **Step 3: Verify responsive rendering**

Check desktop and mobile widths. Expected: no horizontal scrolling; four labels remain visible; connectors stay centered; side loops never overlap text; reduced-motion mode removes continuous animation.

### Task 3: Portfolio raster assets and carousel integration

**Files:**
- Create: `src/assets/case-tender.png`
- Create: `src/assets/case-sales.png`
- Create: `src/assets/case-knowledge.png`
- Create: `tests/case-assets.test.mjs`
- Modify: `src/components/Portfolio.jsx`
- Modify: `src/index.css` case image sizing only if visual QA requires it.

**Interfaces:**
- Produces: three local PNG files at the exact import paths above.
- Consumes: the existing `cases` array and carousel state in `Portfolio.jsx`.

- [ ] **Step 1: Write the failing asset test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const files = ['case-tender.png', 'case-sales.png', 'case-knowledge.png']

test('portfolio uses three non-trivial local PNG dashboard images', async () => {
  for (const file of files) {
    const bytes = await readFile(new URL(`../src/assets/${file}`, import.meta.url))
    assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10])
    assert.ok(bytes.length > 10_000, `${file} should contain a full dashboard image`)
  }
})
```

- [ ] **Step 2: Run the test and confirm RED**

Run: `node --test tests/case-assets.test.mjs`

Expected: FAIL with `ENOENT` for `case-tender.png`.

- [ ] **Step 3: Add the supplied tender image**

Copy `C:/Users/YT/AppData/Local/Temp/codex-clipboard-0bb5d0ff-c077-40bd-a737-873fe5f18c49.png` to `src/assets/case-tender.png` without changing its content.

- [ ] **Step 4: Generate the sales dashboard image**

Generate a wide light enterprise SaaS screenshot matching the supplied tender image: top brand bar, left navigation, blue/teal accents, KPI cards for new leads, qualified customers, follow-ups, and conversions, a prospect table, and a sales pipeline panel. The product title must read `外贸获客工作台`. Save as `src/assets/case-sales.png`.

- [ ] **Step 5: Generate the knowledge dashboard image**

Generate a matching wide light enterprise SaaS screenshot with the title `企业知识与流程中心`: top brand bar, left navigation, knowledge KPIs, document list, search/AI Q&A panel, and workflow progress. Save as `src/assets/case-knowledge.png`.

- [ ] **Step 6: Run the asset test and confirm GREEN**

Run: `node --test tests/case-assets.test.mjs`

Expected: one passing test and zero failures.

- [ ] **Step 7: Switch the carousel imports from SVG to PNG**

```jsx
import caseTender from '../assets/case-tender.png'
import caseSales from '../assets/case-sales.png'
import caseKnowledge from '../assets/case-knowledge.png'
```

Keep the `cases` array order and all carousel behavior unchanged.

- [ ] **Step 8: Verify all three carousel states**

Open each case tab and capture the image area. Expected: each image fills the visual region without stretching, key navigation and dashboard modules remain readable, and switching slides does not move the case frame.

### Task 4: Full quality gate

**Files:**
- Create: `design-qa.md`
- Modify: only files required to fix P0/P1/P2 issues found during QA.

**Interfaces:**
- Consumes: the approved hero reference, the supplied tender image, and current local build.
- Produces: `design-qa.md` ending in `final result: passed`.

- [ ] **Step 1: Run automated checks**

Run: `node --test tests/*.test.mjs; npm run lint; npm run build`

Expected: all tests pass, lint exits 0, and Vite completes a production build.

- [ ] **Step 2: Run browser and console QA**

Verify desktop hero, mobile hero, and all three carousel states. Check browser console for runtime errors and compare the hero against the approved reference.

- [ ] **Step 3: Write the QA report and fix blocking differences**

Record viewport, screenshots reviewed, console state, accessibility checks, and visual differences in `design-qa.md`. Fix every P0/P1/P2 issue and repeat checks until the report ends with `final result: passed`.

- [ ] **Step 4: Keep the Vite server running for handoff**

Confirm `http://127.0.0.1:5173/` returns HTTP 200 and leave the development server active.
