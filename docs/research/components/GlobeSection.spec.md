# GlobeSection Specification

- **Target file:** `src/components/GlobeSection.tsx`
- **Interaction model:** static.
- Outer bg `#001413`, py ~60px, px-8. Inner = a large **rounded panel** (rounded-3xl ~32px, overflow hidden, relative, min-h ~520px), max-width ~1360px mx-auto.

## Panel background
- Teal gradient + glow: base `linear-gradient(120deg, #012624, #003734)` plus a bright teal radial glow (`.auros-glow`) center-right. The dotted globe image sits on the right.

## Content (grid lg:grid-cols-2, items-center, p ~64px, relative z-10)
### Left
- Eyebrow "NETWORK" (uppercase Matter ~14px ls 0.3em, color `#edfffe`/`#bbc7c6`, mb-3).
- `<h2>` "Global presence" — Matter 500 ~56px white, ls -0.04em.
- Subtitle (Matter ~18px white/`#bbc7c6`, mt-4, max-w ~440px): "Our decentralized workforce provides clients round-the-clock support 24 hours a day, 7 days a week, 365 days a year."
- `<AurosButton variant="gradient" arrow>Join Our Team</AurosButton>` mt-8.
### Right
- The dotted globe image: `<img src="/images/6983a2b41146b2325817e8f3_Globe.avif" alt="Global presence" />` — object-contain, positioned right, may overflow panel edge (absolute on desktop). On the original it's a dotted world map over a glowing sphere. Add eslint-disable comment above the `<img>`.

## Responsive
- **≤900px:** stack; globe below text, centered, scaled; panel padding ~32px; h2 ~36px.

## Imports
`AurosButton`; `cn`. (Globe path inline above or import `GLOBE_IMAGE` from `@/lib/site-data`.)
