export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  items?: NavSubItem[];
}

export interface ExploreItem {
  title: string;
  description: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  featured?: boolean;
}

export interface PartnerQuote {
  quote: string;
  name: string;
  role: string;
  logo: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
