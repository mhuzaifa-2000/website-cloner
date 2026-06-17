# HeroSection Specification

- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static content over an animated dark background (original uses WebGPU; approximate).
- bg `#001413`. Full viewport-ish height (min-h ~100vh), relative, overflow hidden, flex center, text-center, pt for fixed header.

## Background (approximate WebGPU)
- Dark teal base. Add 2-3 large blurred radial glows (teal `rgba(0,130,116,0.3)`) slowly drifting (`auros-drift` animation, different delays) absolutely positioned — subtle, behind content. Optionally a faint `auros-dotgrid` overlay at low opacity. Keep it understated and dark.

## Content (centered, z-10)
- Eyebrow: "AUROS" — uppercase, Matter, ~14px, letter-spacing ~0.3em, color white, margin-bottom ~24px.
- `<h1>`: "Making Digital" / "Markets Liquid" (two lines, `<br/>`). Matter weight 500, **~60px** desktop, line-height ~1.0, letter-spacing -2.44px (~-0.04em), color white.
- Subtitle: "Building next-gen liquidity infrastructure for the crypto economy." — Matter ~18px, color `#bbc7c6`, mt-6.
- CTA: `<AurosButton variant="gradient" arrow>Unlock Liquidity</AurosButton>` mt-8.

## Responsive
- **≤768px:** h1 ~40px; subtitle ~16px; reduce glows.
- **390px:** h1 ~34px.

## Imports
`AurosButton`, `cn`. Add `"use client"` only if you animate via JS (CSS animations don't need it — prefer pure CSS, no "use client").
