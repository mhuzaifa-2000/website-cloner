import { cn } from "@/lib/utils";

interface TextScrollSectionProps {
  className?: string;
}

export function TextScrollSection({ className }: TextScrollSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-[120px] text-center",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="auros-glow pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2"
      />
      <h2
        className="auros-gradient-text relative leading-[0.95]"
        style={{
          fontSize: "clamp(72px, 14vw, 180px)",
          letterSpacing: "-0.04em",
        }}
      >
        We Drive
        <br />
        Liquidity
      </h2>
    </section>
  );
}
