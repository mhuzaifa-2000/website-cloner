"use client";

import { useState } from "react";
import { EXPLORE_ITEMS } from "@/lib/site-data";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/** Decorative white metaball circle. */
interface MetaballProps {
  className: string;
  delay?: string;
}

const METABALLS: MetaballProps[] = [
  { className: "left-[18%] top-[20%] h-28 w-28 blur-[2px]", delay: "0s" },
  { className: "left-[40%] top-[34%] h-40 w-40", delay: "-4s" },
  { className: "left-[58%] top-[18%] h-20 w-20 blur-[1px]", delay: "-8s" },
  { className: "left-[30%] top-[58%] h-24 w-24 blur-[3px]", delay: "-2s" },
  { className: "left-[60%] top-[56%] h-32 w-32", delay: "-6s" },
  { className: "left-[12%] top-[62%] h-12 w-12 blur-[1px]", delay: "-10s" },
  { className: "left-[74%] top-[40%] h-16 w-16 blur-[2px]", delay: "-12s" },
];

/** Thick rounded "necks" merging adjacent circles into metaballs. */
const NECKS: { className: string }[] = [
  { className: "left-[26%] top-[42%] h-16 w-32 rotate-[18deg] blur-[4px]" },
  { className: "left-[48%] top-[46%] h-16 w-28 rotate-[64deg] blur-[4px]" },
];

export function ExploreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="explore" className="bg-[#001413] py-24 md:py-[120px]">
      <div className="mx-auto max-w-[1360px] px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#bbc7c6]">
          Explore
        </p>
        <h2 className="text-[36px] leading-[1.05] text-white md:text-[56px]">
          Explore Auros
        </h2>

        <div className="mt-10 grid gap-16 md:mt-14 lg:grid-cols-2">
          {/* Left: item list */}
          <ul className="flex flex-col">
            {EXPLORE_ITEMS.map((item, index) => {
              const active = activeIndex === index;
              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={cn(
                      "flex items-start justify-between gap-6 rounded-lg border-t border-white/[0.12] px-3 py-7 transition-colors duration-200",
                      active && "bg-white/[0.04]",
                    )}
                  >
                    <div>
                      <h3 className="text-[24px] text-white md:text-[32px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-base leading-relaxed text-[#bbc7c6]">
                        {item.description}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-white/15 text-white transition-colors duration-200",
                        active && "bg-white/10",
                      )}
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: metaball dot-grid visual */}
          <div
            aria-hidden
            className="auros-dotgrid pointer-events-none relative hidden aspect-square w-full overflow-hidden rounded-2xl lg:block"
          >
            {NECKS.map((neck, i) => (
              <span
                key={`neck-${i}`}
                className={cn(
                  "absolute rounded-full bg-[#edfffe]/90",
                  neck.className,
                )}
              />
            ))}
            {METABALLS.map((ball, i) => (
              <span
                key={`ball-${i}`}
                style={{ animationDelay: ball.delay }}
                className={cn(
                  "auros-drift absolute rounded-full bg-[#edfffe]",
                  ball.className,
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
