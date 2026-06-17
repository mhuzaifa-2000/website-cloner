import { cn } from "@/lib/utils";
import { AurosButton } from "@/components/AurosButton";
import { GLOBE_IMAGE } from "@/lib/site-data";

/**
 * Global presence panel. A large rounded teal-gradient panel with a bright
 * teal radial glow center-right. Left: NETWORK eyebrow, "Global presence"
 * heading, subtitle, and a gradient "Join Our Team" CTA. Right: dotted-globe
 * image over a glowing sphere, overflowing the panel edge on desktop.
 */
export function GlobeSection() {
  return (
    <section className="bg-[#001413] px-8 py-[60px]">
      <div
        className={cn(
          "relative mx-auto min-h-[520px] max-w-[1360px] overflow-hidden rounded-3xl",
          "bg-[linear-gradient(120deg,#012624,#003734)]",
        )}
      >
        {/* Teal radial glow, center-right */}
        <div className="auros-glow pointer-events-none absolute inset-0 [background-position:75%_50%]" />

        <div className="relative z-10 grid items-center gap-10 p-8 md:p-16 lg:grid-cols-2">
          {/* Left */}
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#edfffe]">
              NETWORK
            </p>
            <h2 className="text-[36px] tracking-[-0.04em] text-white lg:text-[56px]">
              Global presence
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[18px] text-[#bbc7c6] lg:mx-0">
              Our decentralized workforce provides clients round-the-clock
              support 24 hours a day, 7 days a week, 365 days a year.
            </p>
            <div className="mt-8">
              <AurosButton variant="gradient" arrow>
                Join Our Team
              </AurosButton>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:block lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GLOBE_IMAGE}
              alt="Global presence"
              className={cn(
                "w-full max-w-[560px] object-contain",
                "lg:absolute lg:right-[-8%] lg:top-1/2 lg:max-w-none lg:-translate-y-1/2",
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
