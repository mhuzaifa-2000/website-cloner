# InsightsSection Specification

- **Target file:** `src/components/InsightsSection.tsx`
- **Interaction model:** static; row hover.
- bg `#001413`, py ~120px. Max-width ~1360px mx-auto, px-8. `id="insights"`.

## Top (centered)
- Eyebrow "INSIGHTS" (uppercase Matter ~14px ls 0.3em `#bbc7c6`, mb-3).
- `<h2>` "Insights and Perspectives" — Matter 500 ~56px, centered. Apply `auros-gradient-text`.
- Subtitle (Matter ~18px `#bbc7c6`, mt-4, centered, max-w ~560px): "Explore thought pieces, market perspectives, and the latest from Auros."

## Article rows (mt ~64px) — from `ARTICLES`
- Each row separated by top hairline (`border-top:1px solid rgba(255,255,255,0.12)`), py ~40px.
- Row layout: `grid grid-cols-[260px_1fr_auto] gap-10 items-start` (desktop).
  - **Thumbnail:** `<img src={a.image}>` ~260×170, object-cover, rounded-xl. eslint-disable comment above `<img>`.
  - **Middle:** title (Matter 500 ~32px white, max-w ~640px), excerpt (Matter ~16px `#bbc7c6`, mt-4, line-height 1.5), date (uppercase Matter ~14px `#bbc7c6`, mt-6).
  - **Right:** arrow button — rounded-md ~44px square, border `1px solid rgba(255,255,255,0.15)`, `ArrowUpRightIcon` (white). Hover: bg white/10.
- After rows: "VIEW ALL ARTICLES" link/button (uppercase, white, with ArrowUpRightIcon), centered or left, mt ~48px.

## Responsive
- **≤768px:** rows stack (thumbnail full-width on top, then text; arrow button moves below or inline with date); title ~24px.

## Imports
`ARTICLES` from `@/lib/site-data`; `ArrowUpRightIcon` from `@/components/icons`; `cn`.
