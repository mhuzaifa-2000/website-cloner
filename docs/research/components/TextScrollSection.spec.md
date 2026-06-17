# TextScrollSection Specification

- **Target file:** `src/components/TextScrollSection.tsx`
- **Interaction model:** static (large gradient text on glow); optional subtle scroll parallax.
- bg `#001413`, relative, overflow hidden, py ~120px, flex col items-center justify-center, text-center, min-h ~560px.

## Background
- Centered teal radial glow: a large absolutely-positioned `.auros-glow` div (~900px circle) behind the text, low opacity.

## Content
- Two-line heading "We Drive" / "Liquidity" (`<br/>`), Matter weight 500, **very large** `clamp(72px, 14vw, 180px)`, line-height ~0.95, letter-spacing -0.04em, centered.
- Apply the signature gradient as text fill via class `auros-gradient-text` (pink→cream→mint→blue). The text should read with the pastel gradient.

## Responsive
- **≤768px:** clamp handles it (down to ~72px). Keep two lines.

## Imports
`cn`. No "use client" needed.
