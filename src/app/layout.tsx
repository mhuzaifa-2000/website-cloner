import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const matter = localFont({
  variable: "--font-matter",
  display: "swap",
  src: [
    { path: "../../public/fonts/matter-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/matter-regular-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/matter-medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/matter-medium-italic.woff2", weight: "500", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auros.global"),
  title: "Auros | Making Digital Markets Liquid",
  description:
    "Auros Global is a proprietary crypto trading firm delivering institutional liquidity, advanced market making, and execution across digital asset markets.",
  icons: { icon: "/seo/favicon.png" },
  openGraph: {
    title: "Auros | Making Digital Markets Liquid",
    description: "Building next-gen liquidity infrastructure for the crypto economy.",
    images: ["/seo/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${matter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
