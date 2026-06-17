# PartnersSection Specification

- **Target file:** `src/components/PartnersSection.tsx`
- **Interaction model:** static + CSS marquee.
- bg `#001413`, py ~120px. Max-width ~1360px mx-auto, px-8.

## Top (centered)
- Eyebrow "TRUST" (uppercase Matter ~14px ls 0.3em `#bbc7c6`, mb-3).
- `<h2>` "What our partners say" — Matter 500 ~56px, centered. Apply `auros-gradient-text` (pastel gradient fill).

## Quotes (mt ~64px) — 3 columns
- `grid md:grid-cols-3` with vertical hairline dividers between columns (`divide-x divide-white/10`, and give each col px ~8/pl on larger).
- From `PARTNER_QUOTES`. Each column (flex col, gap, justify-between, min-h ~360px):
  - Quote: Matter ~22px, color white, line-height ~1.4. Wrap in “ ” (curly quotes already in data).
  - Spacer / then name + role: name uppercase Matter ~15px white, role uppercase ~15px `#bbc7c6` (render as "NAME, ROLE" or two lines).
  - Partner logo at bottom: `<img src={q.logo}>` h ~28px, white (logos are white SVGs). eslint-disable comment above each `<img>`.

## Logo marquee (mt ~80px)
- Full-width overflow-hidden strip. Inner flex row `auros-marquee` containing `[...PARTNER_LOGOS, ...PARTNER_LOGOS]` (duplicate for seamless loop). Each logo `<img>` h ~28–32px, opacity ~0.7, mx ~40px, grayscale/white. eslint-disable comment above each `<img>`.

## Responsive
- **≤768px:** quotes stack to 1 col (remove vertical dividers, use top hairlines instead); h2 ~36px; marquee unchanged.

## Imports
`PARTNER_QUOTES, PARTNER_LOGOS` from `@/lib/site-data`; `cn`.
