# Footer Specification

- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static; link hover.
- bg `#001413`, relative, overflow hidden, pt ~100px pb ~32px, px-8. Teal radial glow (`.auros-glow`) absolute bottom-center, low opacity.

## Top row (grid lg:grid-cols-2, items-start, gap, relative z-10)
- **Left:** `<h2>` "Making digital" / "markets liquid" (two lines, `<br/>`) — Matter 500 ~56px white, ls -0.04em.
- **Right (right-aligned on desktop):** "Connect with our team" (Matter ~34px white) + `<AurosButton variant="gradient" arrow>Get In Touch</AurosButton>` (mt-6).

## Links row (mt ~80px, relative z-10)
- From `FOOTER_LINKS`: Proprietary Trading | Liquidity Solutions | Careers | Brand Assets | Privacy Policy.
- Uppercase Matter ~14px ls 0.04em, color `#bbc7c6`, hover white. Separated by thin vertical bars `|` (color white/20) or gap with dividers. Wrap on mobile.

## Bottom bar (mt ~64px, flex justify-between items-center, relative z-10)
- Left: "BUILT BY OTHERLIFE" (uppercase ~13px `#bbc7c6`).
- Center/right: social icons `XIcon` + `LinkedInIcon` (h-5 w-5, color `#bbc7c6` hover white, gap-4).
- Right: "©2026 Auros" (uppercase ~13px `#bbc7c6`).
- (Order on desktop: BUILT BY OTHERLIFE left · socials · ©2026 AUROS right.)

## Responsive
- **≤768px:** top row stacks (heading then connect block); h2 ~36px; links wrap; bottom bar stacks with gap-4.

## Imports
`FOOTER_LINKS` from `@/lib/site-data`; `XIcon, LinkedInIcon` from `@/components/icons`; `AurosButton`; `cn`.
