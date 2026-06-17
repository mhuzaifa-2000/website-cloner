import type {
  NavItem,
  ExploreItem,
  Stat,
  PartnerQuote,
  PartnerLogo,
  Article,
  FooterLink,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Proprietary Trading", href: "#explore" },
  {
    label: "Liquidity Solutions",
    items: [
      { label: "OTC", href: "#" },
      { label: "Strategic Market Making", href: "#" },
      { label: "Ventures", href: "#" },
      { label: "DeFi", href: "#" },
      { label: "Engineering", href: "#" },
    ],
  },
  { label: "Insights", href: "#insights" },
  { label: "Careers", href: "#" },
  { label: "Our Team", href: "#" },
];

export const EXPLORE_ITEMS: ExploreItem[] = [
  {
    title: "Proprietary Trading",
    description:
      "Rooted in algorithmic precision and powered by advanced technology, Auros Trading has evolved from quantitative trading to become a global liquidity engine driving efficiency and depth across digital asset markets.",
    href: "#",
  },
  {
    title: "Liquidity Solutions",
    description:
      "Auros Liquidity Solutions provides projects with end-to-end expertise -from venture funding and engineering support to token launch, liquidity strategy, and institutional market expansion.",
    href: "#",
  },
  {
    title: "Careers",
    description:
      "Join a global team of traders, engineers, and innovators shaping the evolution of decentralised finance. At Auros, every role drives real impact and your ideas will help define the future of decentralised finance.",
    href: "#",
  },
];

export const STATS: Stat[] = [
  { label: "Total Trading Volume (YTD)", value: "$1.3T+", featured: true },
  { label: "Peak Daily Trading Volume", value: "$18.21B" },
  { label: "Team Size", value: "150+" },
  { label: "Connected Venues", value: "40+" },
];

export const TEXT_SPACERS: string[] = [
  "Auros is a global trading firm and liquidity provider.",
  "We’re shaping the next generation of decentralized finance.",
  "Helping institutions operate with confidence.",
  "Building systems that keep value moving.",
];

export const PARTNER_QUOTES: PartnerQuote[] = [
  {
    quote:
      "Auros has been a key partner since Pyth’s inception, providing top-tier trading data and expertise that were vital to our PYTH token launch and growth.",
    name: "Mike Cahill",
    role: "CEO of Pyth",
    logo: "/images/696699ba3b09b29f12c718bc_pyth-logo.svg",
  },
  {
    quote:
      "From early investment to deep collaboration like core build-out support, Auros has been instrumental in GTE’s journey from testnet to mainnet launch.",
    name: "Enzo Coglitore",
    role: "Co-Founder of GTE",
    logo: "/images/69669973bf5b58af4fe82c3f_gte-logo.svg",
  },
  {
    quote:
      "Auros is one of our most trusted liquidity partners, supporting ATH token launch success, treasury solutions, and other innovative strategies for ecosystem growth.",
    name: "Dan Wang",
    role: "Co-Founder of Aethir",
    logo: "/images/696699344b1a5198901f3c8a_aethir.svg",
  },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "Aethir", src: "/images/696699344b1a5198901f3c8a_aethir.svg" },
  { name: "Drift", src: "/images/69669abbda9afaabb9e298d7_drift-logo.svg" },
  { name: "Derive", src: "/images/69669aab7a30d4816ab70ffd_derive-logo.svg" },
  { name: "Pyth", src: "/images/696699ba3b09b29f12c718bc_pyth-logo.svg" },
  { name: "Jupiter", src: "/images/69669a978a184a66ed93c8cd_jupiter-logo.svg" },
  { name: "WLFI", src: "/images/69669a79fa4a9a729b151499_wlfi-logo.svg" },
];

export const ARTICLES: Article[] = [
  {
    title: "When Access Becomes Ubiquitous, Execution is Everything",
    excerpt:
      "Access to crypto markets alone is no longer a meaningful edge. It’s the table stakes to earn a seat at the table. As institutional trading desks embed themselves in the DeFi landscape, competition has shifted to execution. The desks that win will be those with the expertise to navigate that complexity and unlock access to the diversity of tokens, and at the right price, not just providing services.",
    date: "May 14, 2026",
    image: "/images/69e71e670d00bdb71652d118_Screenshot-2026-04-21-at-2.51.08-pm-p-800.png",
    href: "#",
  },
  {
    title: "The Block × Auros Liquidity Mastery Series",
    excerpt:
      "In digital assets, liquidity defines market integrity - yet selecting the right market maker remains opaque. The Block x Auros Liquidity Mastery Series offers three in-depth reports providing the frameworks and data institutions need for informed liquidity decisions.",
    date: "April 20, 2026",
    image:
      "/images/6a1fd4bd9652b68b677d26e2_Foundations-of-Digital-Assets-Market-Making_-An-In-Depth-Introduction-p-800.jpg",
    href: "#",
  },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Proprietary Trading", href: "#" },
  { label: "Liquidity Solutions", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Brand Assets", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export const GLOBE_IMAGE = "/images/6983a2b41146b2325817e8f3_Globe.avif";
