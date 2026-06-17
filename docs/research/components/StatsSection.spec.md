# StatsSection Specification

- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** static.
- bg `#001413`, py ~120px. Max-width ~1360px mx-auto, px-8. Centered top block.

## Top (centered)
- Eyebrow "STATS" (uppercase Matter ~14px ls 0.3em `#bbc7c6`, mb-3).
- `<h2>` "Auros in numbers" — Matter 500 ~56px white, ls -0.04em.
- Subtitle (Matter ~18px `#bbc7c6`, mt-4, max-w ~620px mx-auto): "Three interconnected divisions driving liquidity, innovation, and market efficiency across the digital economy."

## Cards grid (mt ~56px)
Use `STATS` from `@/lib/site-data` (4 stats; first is `featured`).
Layout: `grid lg:grid-cols-2 gap-5`. LEFT column = the featured card spanning full height (`lg:row-span-2`). RIGHT column = a wide card on top + a 2-col sub-grid (two cards) below.
Concretely:
```
grid lg:grid-cols-3 lg:grid-rows-2 gap-5
  - featured card: lg:col-span-1 lg:row-span-2  (TOTAL TRADING VOLUME / $1.3T+)
  - peak card:     lg:col-span-2                (PEAK DAILY TRADING VOLUME / $18.21B)
  - team card:     lg:col-span-1                (TEAM SIZE / 150+)
  - venues card:   lg:col-span-1                (CONNECTED VENUES / 40+)
```
### Featured card (stat.featured)
- bg = signature gradient (`auros-gradient`), dark text `#012624`, rounded-2xl, p-8, flex col justify-between, min-h ~620px.
- label uppercase Matter ~14px ls 0.05em (dark), value Matter 500 `~clamp(56px,7vw,90px)` at the bottom.
### Other cards (dark glass)
- bg `rgba(255,255,255,0.05)`, border `1px solid rgba(255,255,255,0.1)`, rounded-2xl, p-8, relative, overflow hidden, flex col justify-between, min-h ~300px.
- Add a faint `auros-dotgrid` overlay (absolute inset-0, opacity ~0.4, pointer-events-none).
- label uppercase Matter ~14px `#bbc7c6`, value Matter 500 `~clamp(48px,6vw,80px)` white at bottom.

## Responsive
- **≤900px:** single column; featured card min-h ~360px; values scale via clamp.

## Imports
`STATS` from `@/lib/site-data`; `cn`.
