# TextSpacer Specification

- **Target file:** `src/components/TextSpacer.tsx` (client — scroll-driven word reveal)
- **Interaction model:** scroll-driven word-by-word brightness reveal.
- Reusable component used 4× with different text. Props: `{ text: string }`.
- bg `#001413`, py ~120px, flex center, text-center, min-h ~560px. Max-width ~1100px mx-auto, px-6.

## Content & behavior
- Render `text` split into words. Each word in a `<span>`. Words start **dim** (color `rgba(255,255,255,0.18)`) and brighten to **white** (`#ffffff`) as the section scrolls through the viewport.
- Heading style: Matter weight 500, `clamp(40px, 6vw, 80px)`, line-height ~1.05, letter-spacing -0.03em, centered.
- **Implementation:** `"use client"`. On scroll, compute the section's progress through the viewport (e.g. based on `getBoundingClientRect().top` vs window height). Map progress (0→1) to how many words are "lit". Use a scroll listener (rAF-throttled) or IntersectionObserver + scroll. Each lit word transitions color over ~200ms. Keep it smooth and subtle.
- Acceptable simpler fallback if needed: fade the whole block up (`auros-fade-up`) when it enters view via IntersectionObserver — but prefer the per-word reveal.

## Usage (in page.tsx, by orchestrator)
- `<TextSpacer text="Auros is a global trading firm and liquidity provider." />` etc. (4 instances from `TEXT_SPACERS`).

## Responsive
- clamp handles sizing; reduce py to ~80px ≤768px.

## Imports
`cn`, `useState`, `useEffect`, `useRef`. Export named `TextSpacer`. Props interface inline.
