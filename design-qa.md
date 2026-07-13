# Design QA — 首页软件栈与案例轮播图片

## Evidence

- Hero source visual truth: `C:/Users/YT/AppData/Local/Temp/codex-clipboard-0453f043-a907-4013-9008-59443cafd3d4.png`
- Tender dashboard source visual truth: `C:/Users/YT/AppData/Local/Temp/codex-clipboard-0bb5d0ff-c077-40bd-a737-873fe5f18c49.png`
- Desktop implementation: `qa/hero-desktop.png`
- Mobile implementation: `qa/hero-mobile-final.png`
- Normalized hero comparison: `qa/hero-comparison.png`
- Tender carousel state: `qa/portfolio-tender.png`
- Sales carousel state: `qa/portfolio-sales.png`
- Knowledge carousel state: `qa/portfolio-knowledge-rerun.png`
- Saturated knowledge carousel state: `qa/portfolio-knowledge-saturated-rerun.png`
- Uncropped tender carousel state: `qa/portfolio-tender-uncropped.png`

## Viewports and states

- Desktop: 1440 × 1000, homepage top, default hero state.
- Desktop carousel: 1440 × 1000, each of the three case tabs selected in turn.
- Mobile: 390 × 844, homepage top, navigation collapsed, default hero state.
- Primary interactions tested: selecting each case tab; carousel image and case copy update together.
- Browser console checked after desktop, carousel, and mobile captures: no runtime errors.

## Full-view comparison evidence

The desktop homepage capture shows the rebuilt stack inside the existing two-column hero. Its scale, visual weight, whitespace, and footer alignment remain balanced with the left copy. The supplied and generated dashboard images fill the case image region consistently without stretching or changing the case frame.

## Focused comparison evidence

`qa/hero-comparison.png` places the source card and a crop from the browser-rendered implementation in the same image. This focused comparison was required because the full homepage capture makes connector, icon, border, and footer differences too small to judge reliably.

## Required fidelity surfaces

- Fonts and typography: uppercase stack label, Chinese layer hierarchy, weights, line heights, and footer copy match the reference closely while using the site's existing font stack.
- Spacing and layout rhythm: four equal-height layers, three consistent connector gaps, centered nodes, side return loops, and separated footer reproduce the source hierarchy. The implementation is slightly narrower because it fits the existing hero column.
- Colors and visual tokens: pale blue default borders, teal rules border, navy text, teal final layer, white final-layer content, and cool-gray footer map to the source and existing site tokens.
- Image quality and asset fidelity: the tender image is the supplied PNG without content alteration. The sales and knowledge PNGs are high-resolution generated dashboard screens matching the reference composition and palette. All three preserve their aspect ratio in the carousel.
- Copy and content: the four approved hero labels and footer sentence are exact. Case titles and detail copy remain unchanged. Generated dashboards contain scenario-specific Chinese labels for their named products.

## Findings

- No actionable P0, P1, or P2 findings remain.
- P3: the source return loops include small mid-line directional arrows; the implementation uses endpoint arrowheads only. This does not change hierarchy or meaning.
- P3: the source card has a marginally softer outer border and shadow. The implementation uses the site's existing border and elevation language for consistency.

## Comparison history

1. Initial mobile check found a P2 horizontal overflow: viewport width was 390px while document scroll width was 537px. The cause was the existing portfolio heading rule `white-space: nowrap`.
2. Fix applied: added `white-space: normal` to the mobile `.portfolio-heading .section-title` rule.
3. Post-fix browser evidence: viewport width 390px and document scroll width 390px; `qa/hero-mobile-final.png` shows the corrected state.
4. The first knowledge-carousel screenshot contained black compositor tiles. Reloading the same URL and state produced `qa/portfolio-knowledge-rerun.png` without black tiles, confirming a capture-tool artifact rather than a page defect.
5. Browser annotation feedback identified excessive whitespace around the left case image at 1115 × 842. Measurement showed a 630 × 480 image region (1.31:1) for a 1.51:1 source image, plus 24px padding.
6. The first full-bleed pass removed whitespace but cropped the screenshot sidebar because the image region was still too tall. That pass was rejected rather than shipped.
7. Final fix: removed visual padding, reduced the case card to a 420px minimum height, compacted the right-side vertical spacing, and used a wider desktop image column. The rendered image region is now 630 × 430 (1.46:1), so all key navigation and dashboard content remain visible with only marginal edge cropping.
8. Post-fix evidence: `qa/portfolio-knowledge-saturated-rerun.png` shows the denser card at the annotated viewport with no horizontal overflow or console errors.
9. Follow-up browser annotation required zero image cropping. The image rule changed from `object-fit: cover` to `object-fit: contain`, while the previously corrected 1.46:1 container ratio was retained. `qa/portfolio-tender-uncropped.png` confirms the supplied screenshot's complete left sidebar, header, and right edge are visible.

## Automated verification

- `node --test tests/*.test.mjs`: 6 tests passed, 0 failed.
- `npm.cmd run lint -- src tests`: passed with 0 errors.
- `npm.cmd run build`: passed; 27 modules transformed.
- `git diff --check`: passed.
- `http://127.0.0.1:5173/`: HTTP 200.

## Follow-up polish

- If closer decorative fidelity is desired later, add the two mid-line directional arrows to the side loops without changing layout.

## 2026-07-13 annotation follow-up

- Navigation labels were revised consistently to `解决方案` and `服务流程` in the primary navigation and footer.
- The final `智能软件` hero node now uses a pale teal gradient (`#dff4f3` to `#c8ebe7`) with navy text and a teal icon.
- `src/assets/case-sales.png` and `src/assets/case-knowledge.png` were regenerated as 1536 × 1024 Bento-style enterprise dashboards. Both use a compact navy icon rail and a denser modular card system, clearly separating their visual language from the tender dashboard.
- Browser evidence at 1115 × 842: `qa/hero-nav-accent-final.png`, `qa/portfolio-sales-bento-settled.png`, and `qa/portfolio-knowledge-bento-settled.png`.
- Runtime measurement for both regenerated case images: natural size 1536 × 1024; rendered image box 629.125 × 455.75; `object-fit: contain`; document horizontal overflow 0px.
- Browser console and runtime error inspection found no application errors. The earlier mid-transition captures were discarded in favor of the settled carousel evidence listed above.

### Navigation-label synchronization and accent refinement

- The `#services` section label now reads `01 / 解决方案`, matching the primary navigation.
- The `#process` section label now reads `02 / 服务流程`, matching the primary navigation.
- The final hero node background was lightened to `#f7fcfc → #edf8f7`; its teal shadow opacity was reduced from 0.14 to 0.08.
- Browser evidence at 1115 × 842: `qa/hero-accent-lighter.png`, `qa/services-label-synced-clean.png`, and `qa/process-label-synced-rerun.png`.
- Browser-computed state: both labels match their navigation targets, the accent gradient resolves to `rgb(247, 252, 252) → rgb(237, 248, 247)`, horizontal overflow is 0px, and no runtime errors were reported.

final result: passed
