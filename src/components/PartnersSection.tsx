import { PARTNER_QUOTES, PARTNER_LOGOS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PartnersSection() {
  return (
    <section className="bg-[#001413] py-[120px]">
      <div className="mx-auto max-w-[1360px] px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#bbc7c6]">
            Trust
          </p>
          <h2 className="auros-gradient-text text-[36px] font-medium md:text-[56px]">
            What our partners say
          </h2>
        </div>

        {/* Quotes */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {PARTNER_QUOTES.map((q) => (
            <div
              key={q.name}
              className={cn(
                "flex min-h-[360px] flex-col justify-between gap-10",
                "py-8 md:px-8 md:py-0",
              )}
            >
              <p className="text-[22px] leading-[1.4] text-white">
                {`“${q.quote}”`}
              </p>
              <div>
                <div className="flex flex-col gap-1">
                  <span className="text-[15px] uppercase text-white">
                    {q.name}
                  </span>
                  <span className="text-[15px] uppercase text-[#bbc7c6]">
                    {q.role}
                  </span>
                </div>
                <div className="mt-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={q.logo} alt={`${q.name} logo`} className="h-7 w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="mt-20 w-full overflow-hidden">
        <div className="auros-marquee flex w-max items-center">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="mx-10 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 w-auto opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
