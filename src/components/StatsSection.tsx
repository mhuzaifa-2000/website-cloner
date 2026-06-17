import { STATS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function StatsSection() {
  const featured = STATS.find((stat) => stat.featured);
  const rest = STATS.filter((stat) => !stat.featured);

  return (
    <section className="bg-[#001413] py-[120px]">
      <div className="mx-auto max-w-[1360px] px-8">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#bbc7c6]">
            Stats
          </p>
          <h2 className="text-[clamp(36px,6vw,56px)] font-medium tracking-[-0.04em] text-white">
            Auros in numbers
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[18px] text-[#bbc7c6]">
            Three interconnected divisions driving liquidity, innovation, and
            market efficiency across the digital economy.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {featured ? (
            <div className="auros-gradient flex min-h-[360px] flex-col justify-between rounded-2xl p-8 text-[#012624] lg:col-span-1 lg:row-span-2 lg:min-h-[620px]">
              <span className="text-sm uppercase tracking-[0.05em]">
                {featured.label}
              </span>
              <span className="text-[clamp(56px,7vw,90px)] font-medium leading-none tracking-[-0.04em]">
                {featured.value}
              </span>
            </div>
          ) : null}

          {rest.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8",
                index === 0 && "lg:col-span-2",
              )}
            >
              <div className="auros-dotgrid pointer-events-none absolute inset-0 opacity-40" />
              <span className="relative text-sm uppercase tracking-[0.05em] text-[#bbc7c6]">
                {stat.label}
              </span>
              <span className="relative text-[clamp(48px,6vw,80px)] font-medium leading-none tracking-[-0.04em] text-white">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
