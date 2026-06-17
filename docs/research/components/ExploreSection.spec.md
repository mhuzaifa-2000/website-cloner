# ExploreSection Specification

- **Target file:** `src/components/ExploreSection.tsx` (client — hover-highlight active item)
- **Interaction model:** hover-driven item highlight (first active by default).
- bg `#001413`, py ~120px. Max-width ~1360px mx-auto, px-8. `id="explore"`.

## Top
- Eyebrow "EXPLORE" (uppercase, Matter ~14px, ls 0.3em, color `#bbc7c6`/teal, mb-3).
- `<h2>` "Explore Auros" — Matter 500, ~56px, white, ls -0.04em.

## Body — grid lg:grid-cols-2 gap-16, mt ~56px
### Left: item list (from `EXPLORE_ITEMS`)
- Vertical list of 3 items, each separated by a top hairline (`border-top: 1px solid rgba(255,255,255,0.12)`), py ~28px.
- Each item: flex row justify-between, items-start. Left col = title (Matter 500 ~32px white) + description (Matter ~16px `#bbc7c6`, mt-3, max-w ~520px). Right = arrow button: rounded-md (~10px) square ~44px, border `1px solid rgba(255,255,255,0.15)`, contains `ArrowUpRightIcon` (h-4 w-4 white). 
- **Active/hover item** (default first): subtle bg `rgba(255,255,255,0.04)`, rounded, and/or arrow button bg white/10. Hover sets active. Transition 200ms.

### Right: metaball dot-grid visual
- A square-ish area (aspect ~1/1). Background: `auros-dotgrid` (faint dot matrix). Over it, place 5–7 white circles of varying sizes (`bg-[#edfffe]`, rounded-full, some blurred/soft), a few connected by thick rounded "neck" shapes to look like merging metaballs. Subtle drift animation (`auros-drift`, staggered delays) optional. Decorative, pointer-events-none.

## Responsive
- **≤900px:** stack to 1 col (list above visual, or hide visual); h2 ~36px; item title ~24px.

## Imports
`EXPLORE_ITEMS` from `@/lib/site-data`; `ArrowUpRightIcon` from `@/components/icons`; `cn`; `useState`.
