# Auros — Behavior Bible

## Global
- **Lenis smooth scroll** active (`.lenis` on `<html>`). Install `lenis`, wrap app in a client provider that runs `requestAnimationFrame` loop. This is essential — native scroll feels wrong.
- **Fonts:** Matter (Regular 400, Medium 500, + italics) self-hosted woff2 in `public/fonts/`. Headings = Matter Medium 500, very tight tracking (~-0.04em). Body = Matter Regular / Arial fallback.
- Webflow IX2 (`w-mod-ix`) drives scroll entrance animations.

## Design tokens
- bg `#001413` (near-black teal) · deep teal `#012624` · green `#003734` · `#005140` accents
- white `#ffffff` · muted `#bbc7c6` · mint `#edfffe`
- glass card bg `rgba(255,255,255,0.05)`, hairline border `rgba(255,255,255,0.1)`
- **Signature gradient** (buttons, big text fills): `linear-gradient(90deg, #fad1ff, #fffdfa, #edfffe, #c9e9ff)` — pastel pink → cream → mint → blue.
- Teal **radial glows**: `radial-gradient(circle, rgba(0,180,160,0.25), transparent 60%)` behind/within dark sections.

## Header (`.header`)
- `position: fixed`, transparent bg, height 81px, full width. z high.
- Left: AUROS inline-SVG logo (white, viewBox 0 0 131 24). Center: PROPRIETARY TRADING, LIQUIDITY SOLUTIONS▾ (dropdown: OTC, Strategic Market Making, Ventures, DeFi, Engineering), INSIGHTS, CAREERS, OUR TEAM — uppercase Matter ~13px, tracked, white. Right: "PARTNER WITH US" gradient button.
- Links uppercase, letter-spacing ~1px. Hover: opacity / subtle.
- Likely stays transparent over dark content (no strong scroll change observed).

## Hero (`.webgpu-container`)
- WebGPU canvas animated background (fluid/particle). **Approximate** with an animated radial-gradient glow OR a looping video; keep it subtle and dark.
- Centered: eyebrow "AUROS" (uppercase, tracked, white/muted), `<h1>` "Making Digital / Markets Liquid" (Matter 500, ~60px desktop, ls -2.44px, white, 2 lines), subtitle (muted), "UNLOCK LIQUIDITY" gradient button + arrow.

## TextScroll (`.section_text-scroll`)
- Huge "We Drive / Liquidity" (Matter 500, ~150px) with the signature pastel gradient as text fill (`background-clip: text`), on a teal radial-glow dark bg. Likely parallax/scroll scale.

## TextSpacer (`.section_text-spacer`) — reused 4×
- Big centered statement text (~64–80px Matter 500). Scroll-driven **word-by-word reveal**: words start dim (`#ffffff` low opacity / muted) and brighten to white/gradient as the section scrolls through viewport center. Implement with IntersectionObserver or scroll progress mapping per word.
- Copies: (1) "Auros is a global trading firm and liquidity provider." (2) "We're shaping the next generation of decentralized finance." (3) "Helping institutions operate with confidence." (4) "Building systems that keep value moving."

## Explore (`.section_explore`)
- Eyebrow "EXPLORE", h2 "Explore Auros". Left: vertical list of 3 items (Proprietary Trading, Liquidity Solutions, Careers), each = title (Matter ~32px) + description (muted) + arrow-up-right button in rounded square; separated by hairlines; first item has subtle highlight bg. Hover highlights an item.
- Right: animated **metaball dot-grid** (faint dot matrix + a few white merging blobs). Approximate with a CSS dot-grid bg + 3–5 absolutely-positioned white blurred circles (optionally slow-drifting).

## Stats (`.section_resources` #1)
- Eyebrow "STATS", h2 "Auros in numbers", subtitle.
- Grid: LEFT tall **featured card** with pastel gradient bg (light) + dark text: label "TOTAL TRADING VOLUME (YTD)" + value "$1.3T+". RIGHT: wide dark glass card "PEAK DAILY TRADING VOLUME" "$18.21B"; below it two dark glass cards "TEAM SIZE" "150+" and "CONNECTED VENUES" "40+".
- Cards: rounded ~16px, dot-grid texture, label uppercase Matter ~14px tracked, value Matter 500 ~80px.

## Globe (`.section_globe-presence`)
- Rounded teal-gradient panel. Left: eyebrow "NETWORK", h2 "Global presence", subtitle, "JOIN OUR TEAM" gradient/teal button + arrow. Right: dotted world-map globe image (`/images/...Globe.avif`) with a glowing sphere.

## Partners (`.section_partners`)
- Eyebrow "TRUST", h2 "What our partners say" (gradient text). 3 testimonial columns (vertical hairline dividers): quote (white ~22px), name+role (muted uppercase), partner logo (Pyth / gte / Aethir SVG).
- Below: horizontal **logo marquee** (Aethir, Drift, Derive.XYZ, Titan, Jupiter, WLFI) auto-scrolling.

## Insights (`.section_resources` #2)
- Eyebrow "INSIGHTS", h2 "Insights and Perspectives", subtitle.
- Article rows (hairline separated): thumbnail (left, rounded), title (Matter ~32px white), excerpt (muted), date (uppercase muted), arrow-up-right button (right). 2 articles + "VIEW ALL ARTICLES".

## Footer (`.footer`)
- Left: "Making digital / markets liquid" (Matter 500 ~56px white). Right: "Connect with our team" + "GET IN TOUCH" gradient button.
- Row of links: Proprietary Trading | Liquidity Solutions | Careers / Brand Assets | Privacy Policy (muted, separators).
- Bottom: "BUILT BY OTHERLIFE" (left) · social icons X + LinkedIn · "©2026 Auros" (right). Teal radial glow bottom-center.

## Responsive (verify 768 / 390)
- Header → hamburger (`.mobile_menu` present). Multi-column → stack. Stat grid → 1–2 col. Big text scales down.
