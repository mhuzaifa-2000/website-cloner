import { FOOTER_LINKS } from "@/lib/site-data";
import { XIcon, LinkedInIcon } from "@/components/icons";
import { AurosButton } from "@/components/AurosButton";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001413] px-8 pt-[100px] pb-8">
      {/* Teal radial glow at the bottom-center */}
      <div
        aria-hidden
        className="auros-glow pointer-events-none absolute -bottom-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-50"
      />

      {/* Top row */}
      <div className="relative z-10 grid items-start gap-12 lg:grid-cols-2">
        <h2 className="text-[36px] leading-[1.05] tracking-[-0.04em] text-white md:text-[56px]">
          Making digital
          <br />
          markets liquid
        </h2>
        <div className="lg:text-right">
          <p className="text-[28px] leading-tight tracking-[-0.02em] text-white md:text-[34px]">
            Connect with our team
          </p>
          <div className="mt-6 inline-flex">
            <AurosButton variant="gradient" arrow>
              Get In Touch
            </AurosButton>
          </div>
        </div>
      </div>

      {/* Links row */}
      <ul className="relative z-10 mt-20 flex flex-wrap items-center gap-y-3 text-sm uppercase tracking-[0.04em] text-[#bbc7c6]">
        {FOOTER_LINKS.map((link, index) => (
          <li key={link.label} className="flex items-center">
            {index > 0 && (
              <span aria-hidden className="mx-4 text-white/20">
                |
              </span>
            )}
            <a
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom bar */}
      <div className="relative z-10 mt-16 flex flex-col items-start gap-4 text-[13px] uppercase tracking-[0.04em] text-[#bbc7c6] md:flex-row md:items-center md:justify-between">
        <span>Built by Otherlife</span>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="X (Twitter)"
            className="transition-colors duration-200 hover:text-white"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:text-white"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
        <span>&copy;2026 Auros</span>
      </div>
    </footer>
  );
}
