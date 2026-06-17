import { AurosButton } from "@/components/AurosButton";
import { cn } from "@/lib/utils";

/**
 * Hero section for the Auros landing page. Centered "AUROS" eyebrow, two-line
 * h1 ("Making Digital / Markets Liquid"), subtitle, and gradient CTA over a dark
 * teal background with subtle drifting radial glows (approximating the original's
 * WebGPU canvas). Pure CSS animations — no client JS required.
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#001413] px-6 pb-24 pt-32 text-center">
      {/* Animated background glows (behind content) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className={cn(
            "auros-glow absolute left-1/2 top-1/3 h-[70vw] w-[70vw] max-h-[640px] max-w-[640px]",
            "-translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70",
            "[animation:auros-drift_14s_ease-in-out_infinite]",
          )}
        />
        <div
          className={cn(
            "auros-glow absolute left-[18%] top-[60%] h-[55vw] w-[55vw] max-h-[480px] max-w-[480px]",
            "-translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-50",
            "[animation:auros-drift_18s_ease-in-out_infinite_2s]",
          )}
        />
        <div
          className={cn(
            "auros-glow absolute left-[82%] top-[38%] h-[45vw] w-[45vw] max-h-[420px] max-w-[420px]",
            "-translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40",
            "[animation:auros-drift_22s_ease-in-out_infinite_4s]",
          )}
        />
        {/* Faint dot-grid texture overlay */}
        <div className="auros-dotgrid absolute inset-0 opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-6 text-sm uppercase tracking-[0.3em] text-white">
          AUROS
        </span>
        <h1 className="text-[34px] leading-[1.0] text-white sm:text-[40px] md:text-[60px]">
          Making Digital
          <br />
          Markets Liquid
        </h1>
        <p className="mt-6 max-w-xl text-base text-[#bbc7c6] md:text-lg">
          Building next-gen liquidity infrastructure for the crypto economy.
        </p>
        <AurosButton variant="gradient" arrow className="mt-8">
          Unlock Liquidity
        </AurosButton>
      </div>
    </section>
  );
}
