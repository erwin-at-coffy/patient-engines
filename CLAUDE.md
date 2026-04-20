# PatientEngines — Project Guide

## Files
| File | Role |
|------|------|
| index.html | Home page (the only page so far) |
| styles.css | All shared CSS |
| shared.js  | Nav + footer injection |
| assets/    | Image assets (matt-coffy.webp) |
| _source/, _handoff/ | Original Claude Design handoff — reference only, not deployed |

## Design Tokens (editorial clinical — cool off-white + PE blue)

```
--bg-1: #f5f8fb   cool off-white
--bg-2: #eaf0f7   blue-tinted card
--bg-3: #dbe4ef   divider
--surface-2: #c6d3e3
--surface-3: #a8b8cd

--ink-1: #0b1e3a  deep navy (default text)
--ink-2: #2b3c5a
--ink-3: #5a6b82
--ink-4: #8a98ac

--accent:   #1560bd  PatientEngines blue (primary CTA accent)
--accent-2: #00b4d8  bright cyan (highlights, underline, stars)
--accent-ink: #ffffff

--line: rgba(11,30,58,0.12)
--line-strong: rgba(11,30,58,0.22)

--r-sm: 6px · --r-md: 12px · --r-lg: 20px · --r-xl: 28px
--maxw: 1280px
```

## Typography
- **Headings:** Fraunces (serif), weights 300–600. Italic weight 300 for `<em>` accent words.
- **Body:** Inter, weights 400–700.
- **Eyebrows / labels / numbers:** JetBrains Mono.
- Google Fonts URL is in `index.html` `<head>`.

## Component Patterns
- `.eyebrow` — mono 11px uppercase label with SVG dot prefix
- `.h1 em` / `.h2 em` — italic accent words in serif headings (colored `--accent`)
- `.h1 .underline-word` — cyan highlight behind a phrase
- `.btn` variants: `.btn-primary` (navy), `.btn-ghost` (outline), `.btn-accent` (PE blue)
- `.section-head` / `.section-head-row` — heading + optional right-aligned lede
- `.port-badge-*` — floating KPI badges absolutely positioned over the hero portrait
- `.col-tag-old` / `.col-tag-new` — surface vs cyan pill tags for the OldNew comparison

## Icons
All icons are inline SVG (Lucide-style outline, `stroke-width="1.5"`) with `aria-hidden="true"`.
Never use emoji. The `◐` half-moon glyph is a typographic decoration (brand mark), not an icon.

## Behavior
- **Nav + footer** are injected by `shared.js` into `#site-nav` and `#site-footer`.
- **FAQ** uses event delegation on `#faqList` (single item open at a time).
- **Handraiser** in the CTA section is a vanilla JS multi-step quiz that renders into `#handraiser` and captures `{ type, rev, goal }` then prompts for email. Email submission is currently a stub — wire it to a real endpoint before going live.

## Client Info
- Business: PatientEngines (Matt Coffy)
- Category: B2B growth partner for cash-pay medical practices (med spa, medical weight loss, HRT, IV, regenerative, sexual wellness)
- Hero promise: full-cycle brand + patient acquisition — one partner, not five agencies
- Price band mentioned on site: $8k–$25k/mo, 90-day initial build, then month-to-month

## Image CDN Base
(No CDN — assets served locally from `/assets/`.)

## Before Going Live
- [ ] Wire handraiser email submission to backend / GHL / CRM
- [ ] Add real case studies in `.result-card` slots
- [ ] Confirm the `handraiser.html` standalone page exists / redirect target
- [ ] Replace placeholder logobar names if real client logos are cleared to use
- [ ] Swap `#cta` Apply-to-work button to a real booking link if needed

## New Page Checklist (when expanding beyond home)
1. Duplicate `index.html`
2. Update `<title>`, `<meta description>`, canonical, OG tags
3. Delete `<section>` content, build with existing CSS classes
4. `shared.js` handles nav + footer automatically
