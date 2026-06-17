# Auros (auros.global) — Page Topology

Target: https://www.auros.global/  (Webflow static site + Lenis smooth scroll + WebGPU hero)
Page height ~10624px @1440. Body bg `#001413` (near-black teal). Font: **Matter** (Medium 500 headings).

## Section order (top → bottom)

| # | Name | Class | top | h | Interaction |
|---|------|-------|-----|---|-------------|
| 0 | Header | `.header` | 0 (fixed) | 81 | transparent fixed bar; Liquidity Solutions dropdown |
| 1 | Hero | `.webgpu-container` | 68 | 1382 | WebGPU/canvas animated bg → approximate w/ video or animated gradient. "AUROS / Making Digital Markets Liquid" + Unlock Liquidity |
| 2 | TextScroll | `.section_text-scroll` | 1450 | 591 | huge gradient "We Drive Liquidity" on teal radial glow |
| 3 | TextSpacer #1 | `.section_text-spacer` | 2041 | 610 | scroll-reveal big text: "Auros is a global trading firm and liquidity provider." |
| 4 | Explore | `.section_explore` | 2651 | 1028 | left 3-item list (Prop Trading / Liquidity Solutions / Careers) + right metaball dot-grid |
| 5 | Stats | `.section_resources` | 3798 | 1140 | "Auros in numbers" — 1 gradient featured card + 3 dark glass cards |
| 6 | TextSpacer #2 | `.section_text-spacer` | 4938 | 610 | "We're shaping the next generation of decentralized finance." |
| 7 | Globe | `.section_globe-presence` | 5548 | 602 | teal panel + dotted globe image + Join Our Team |
| 8 | TextSpacer #3 | `.section_text-spacer` | 6150 | 610 | "Helping institutions operate with confidence." |
| 9 | Partners | `.section_partners` | 6759 | 1041 | "What our partners say" 3 testimonial cols + logo marquee |
| 10 | TextSpacer #4 | `.section_text-spacer` | 7800 | 610 | "Building systems that keep value moving." |
| 11 | Insights | `.section_resources` | 8410 | 1515 | "Insights and Perspectives" — article list rows |
| 12 | Footer | `.footer` | 9925 | 699 | "Making digital markets liquid" + Connect/Get In Touch + links + socials |

## Layout
- Single scroll, **Lenis smooth scroll** (`.lenis` on html). Install `lenis`.
- Header fixed, transparent, overlays content, z-high.
- Content max-width ~1280–1360px, centered, generous side padding.
- Heavy use of teal **radial glows** (`radial-gradient` at center/edges) behind dark sections.
- Many sections are rounded panels with subtle gradient/glow.

## Components → files
`Header.tsx`, `HeroSection.tsx`, `TextScrollSection.tsx`, `TextSpacer.tsx` (reused ×4),
`ExploreSection.tsx`, `StatsSection.tsx`, `GlobeSection.tsx`, `PartnersSection.tsx`,
`InsightsSection.tsx`, `Footer.tsx`, plus `SmoothScroll.tsx` (Lenis provider).
