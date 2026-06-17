"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AurosLogo, ChevronDownIcon } from "@/components/icons";
import { AurosButton } from "@/components/AurosButton";
import { NAV_ITEMS } from "@/lib/site-data";

const NAV_LINK_CLASS =
  "inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.06em] text-white/70 transition-colors duration-150 hover:text-white";

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[81px]">
      <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-8">
        {/* Left: logo */}
        <Link href="/" aria-label="Auros home" className="shrink-0">
          <AurosLogo className="h-5 w-auto text-white" />
        </Link>

        {/* Center: nav (desktop) */}
        <nav className="hidden items-center gap-9 min-[901px]:flex">
          {NAV_ITEMS.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button type="button" className={NAV_LINK_CLASS}>
                  <span>{item.label}</span>
                  <ChevronDownIcon
                    className={cn(
                      "h-2 w-3 transition-transform duration-150",
                      dropdownOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-3 transition-all duration-150",
                    dropdownOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-1.5 opacity-0",
                  )}
                >
                  <div className="min-w-[220px] rounded-xl border border-white/10 bg-[#012624]/95 p-3 shadow-xl backdrop-blur-md">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-md px-3 py-2 text-[13px] uppercase tracking-[0.06em] text-white/80 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className={NAV_LINK_CLASS}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Right: CTA (desktop) */}
        <div className="hidden shrink-0 min-[901px]:block">
          <AurosButton variant="gradient" className="py-3 text-xs">
            Partner With Us
          </AurosButton>
        </div>

        {/* Right: hamburger (mobile) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[901px]:hidden"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#001413] min-[901px]:hidden">
          <div className="flex h-[81px] shrink-0 items-center justify-between px-8">
            <AurosLogo className="h-5 w-auto text-white" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="relative flex h-10 w-10 items-center justify-center"
            >
              <span className="absolute h-0.5 w-6 rotate-45 bg-white" />
              <span className="absolute h-0.5 w-6 -rotate-45 bg-white" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-8 py-10">
            {NAV_ITEMS.map((item) =>
              item.items ? (
                <div key={item.label} className="flex flex-col gap-4">
                  <span className="text-base uppercase tracking-[0.06em] text-white">
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-3 pl-4">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm uppercase tracking-[0.06em] text-white/70 transition-colors duration-150 hover:text-white"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base uppercase tracking-[0.06em] text-white transition-colors duration-150 hover:text-white/70"
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="pt-4">
              <AurosButton variant="gradient" className="py-3 text-xs">
                Partner With Us
              </AurosButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
