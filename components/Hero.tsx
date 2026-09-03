import Link from "next/link";
import { AuditButton } from "@/components/AuditButton";
import { CTAS, HERO } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { SocialGrowthAnim } from "@/components/SocialGrowthAnim";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      {/* one soft, flat peach wash behind the visual, no glow blobs */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(60%_60%_at_70%_35%,var(--color-peach),transparent_70%)] opacity-70 lg:block" />

      <div className="container-x relative grid items-start gap-10 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
        {/* ---- copy ---- */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up [animation-delay:0ms]">{HERO.eyebrow}</span>

          <h1 className="text-display text-[clamp(2rem,1.2rem+3vw,3.35rem)] mt-5 animate-fade-up [animation-delay:80ms]">
            {HERO.headline}{" "}
            <span className="italic text-brand">{HERO.headlineEmphasis}</span>
          </h1>

          <p className="lead text-[clamp(0.95rem,0.88rem+0.28vw,1.1rem)] mt-5 animate-fade-up [animation-delay:160ms]">
            We manage your digital presence, so the people looking for what
            you do find you first. You set the vision. We handle the rest.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <AuditButton
              variant="secondary"
              size="lg"
              className="cursor-pointer hover:bg-[#1a1a1a] hover:text-white hover:!ring-[#1a1a1a]"
            >
              {CTAS.secondary.label}
            </AuditButton>
          </div>

          <div className="mt-8 flex items-center gap-3 animate-fade-up [animation-delay:340ms]">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              See what&apos;s in a package
              <Icon
                name="arrow"
                className="h-4 w-4 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ---- product visual ---- */}
        <div className="animate-pop lg:mx-0 lg:ml-auto lg:origin-top lg:scale-[0.93]">
          <SocialGrowthAnim />
        </div>
      </div>
    </section>
  );
}
