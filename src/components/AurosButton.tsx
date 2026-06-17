import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/icons";

interface AurosButtonProps {
  children: ReactNode;
  href?: string;
  /** show the up-right arrow on the right */
  arrow?: boolean;
  /** "gradient" = pastel fill + dark text; "ghost" = subtle glass over dark */
  variant?: "gradient" | "ghost";
  className?: string;
}

/**
 * Auros CTA. Gradient variant = pastel pink→cream→mint→blue fill, dark teal text,
 * 6px radius, uppercase, ~16px Matter. Used for Unlock Liquidity / Partner With Us /
 * Get In Touch / Join Our Team.
 */
export function AurosButton({
  children,
  href = "#",
  arrow = false,
  variant = "gradient",
  className,
}: AurosButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-md px-[18px] py-4 text-sm uppercase tracking-[0.06em] transition-transform duration-200 hover:-translate-y-0.5",
        variant === "gradient"
          ? "auros-gradient text-[#012624]"
          : "border border-white/20 text-white hover:bg-white/5",
        className,
      )}
    >
      <span>{children}</span>
      {arrow && (
        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
