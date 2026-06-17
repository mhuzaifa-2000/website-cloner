import { ARTICLES } from "@/lib/site-data";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function InsightsSection() {
  return (
    <section id="insights" className="bg-[#001413] py-[120px]">
      <div className="mx-auto max-w-[1360px] px-8">
        {/* Top */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#bbc7c6]">
            Insights
          </p>
          <h2 className="auros-gradient-text text-[40px] leading-tight md:text-[56px]">
            Insights and Perspectives
          </h2>
          <p className="mt-4 max-w-[560px] text-lg text-[#bbc7c6]">
            Explore thought pieces, market perspectives, and the latest from
            Auros.
          </p>
        </div>

        {/* Article rows */}
        <div className="mt-16">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className={cn(
                "group grid grid-cols-1 gap-6 border-t border-white/[0.12] py-10",
                "md:grid-cols-[260px_1fr_auto] md:items-start md:gap-10",
              )}
            >
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image}
                alt={article.title}
                className="h-[170px] w-full rounded-xl object-cover md:w-[260px]"
              />

              {/* Middle */}
              <div>
                <h3 className="max-w-[640px] text-2xl text-white md:text-[32px]">
                  {article.title}
                </h3>
                <p className="mt-4 max-w-[640px] text-base leading-[1.5] text-[#bbc7c6]">
                  {article.excerpt}
                </p>
                <p className="mt-6 text-sm uppercase tracking-wide text-[#bbc7c6]">
                  {article.date}
                </p>
              </div>

              {/* Right */}
              <a
                href={article.href}
                aria-label={`Read ${article.title}`}
                className={cn(
                  "flex size-11 items-center justify-center rounded-md border border-white/[0.15]",
                  "text-white transition-colors hover:bg-white/10",
                )}
              >
                <ArrowUpRightIcon className="size-4" />
              </a>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 border-t border-white/[0.12] pt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
          >
            View All Articles
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
