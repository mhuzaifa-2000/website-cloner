# Header Specification

- **Target file:** `src/components/Header.tsx` (client — dropdown + mobile menu state)
- **Interaction model:** static fixed bar; Liquidity Solutions dropdown on hover; hamburger on mobile.

## Layout
- `position: fixed; top:0; left:0; right:0;` z-50. Height 81px. Background **transparent** (content is dark). Optional very subtle blur on scroll (skip unless trivial).
- Inner: max-width ~1360px, mx-auto, px-8, flex row, items-center, justify-between, full height.
- **Left:** `<AurosLogo className="h-5 w-auto text-white" />` (wordmark, ~131×24 ratio).
- **Center:** nav links from `NAV_ITEMS` (@/lib/site-data). Uppercase, Matter, ~13px, letter-spacing 0.06em, color white, gap ~36px. Item with `.items` (Liquidity Solutions) shows `ChevronDownIcon` (h-2 w-3) and opens a dropdown.
- **Right:** `<AurosButton variant="gradient">Partner With Us</AurosButton>` (slightly smaller: override py to py-3, text-xs).

## Dropdown (Liquidity Solutions)
- Opens on mouseenter of the item, closes on mouseleave. Panel: absolute below the link, bg `#012624` (or rgba(1,38,36,0.95) + backdrop-blur), border `1px solid rgba(255,255,255,0.1)`, rounded-xl, p-3, min-width 220px, shadow.
- Items from `NAV_ITEMS[1].items`: OTC, Strategic Market Making, Ventures, DeFi, Engineering. Each = row, uppercase ~13px white/80, px-3 py-2, rounded-md, hover bg white/5 + white text. Transition opacity+translateY(6px→0) 150ms.

## Hover
- Links: color white/70 → white, transition 150ms.

## Responsive
- **≤900px:** hide center links + Partner button; show hamburger button (right): 3 white bars, ~40px, no border or subtle. Click toggles a full-screen/overlay mobile menu: bg `#001413`, stacked uppercase links (Proprietary Trading, Liquidity Solutions [+ sub-items], Insights, Careers, Our Team) + a Partner With Us gradient button. Close on link click.

## Imports
`AurosLogo, ChevronDownIcon` from `@/components/icons`; `AurosButton`; `NAV_ITEMS` from `@/lib/site-data`; `cn`; `useState`.
