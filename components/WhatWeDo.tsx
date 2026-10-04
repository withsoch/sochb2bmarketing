import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/components/Icons";
import { PlatformMark } from "@/components/PlatformIcons";
import { SocialGrowthAnim } from "@/components/SocialGrowthAnim";
import { PLATFORMS } from "@/lib/channels";
import { SERVICE_CATEGORIES } from "@/lib/content";

/**
 * The homepage's one "what we do" section: the channels we run, next to the
 * dashboard mock that shows them planned in one place, then the service
 * categories as a single row of links into /services.
 *
 * Bright orange on purpose. Every word on it is ink, never white: white on
 * brand orange is ~3:1 and fails body-text contrast, ink is ~4.8:1.
 */
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative scroll-mt-20 overflow-hidden bg-brand py-20 text-ink sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora-b absolute -left-[10%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-sun/50 blur-[90px]" />
        <div className="animate-aurora-a absolute -right-[8%] top-[35%] h-[30rem] w-[30rem] rounded-full bg-brand-light blur-[80px]" />
        <div className="bg-dots absolute inset-0 opacity-60 [--dot:rgba(28,43,38,0.14)] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-[0.8rem] font-semibold text-white">
                <span className="h-2 w-2 rotate-45 rounded-[2px] bg-sun" />
                {PLATFORMS.length} channels, one plan
              </span>
              <h2 className="text-h2 mt-5 max-w-xl">What we do.</h2>
              <p className="lead mt-5 max-w-xl !text-ink">
                Instagram, Google, LinkedIn, Facebook, TikTok and YouTube, run
                as one calendar. Planned, written and published for you, and
                nothing goes live until you approve it.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {PLATFORMS.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <div className="group flex h-full items-center gap-3 rounded-2xl bg-white/30 px-3 py-3 ring-1 ring-white/50 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-lift)] sm:px-3.5">
                    <PlatformMark id={p.id} size="md" className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="min-w-0">
                      <p className="truncate text-[0.95rem] font-semibold leading-tight text-ink">{p.name}</p>
                      <p className="mt-0.5 text-[0.75rem] leading-snug text-ink/75">{p.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <SocialGrowthAnim toast={false} />
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end lg:mt-20">
          <Reveal>
            <h3 className="text-[1.35rem] font-semibold leading-tight sm:text-[1.5rem]">
              Take one, or hand us the lot.
            </h3>
          </Reveal>
          <Button href="/services" variant="dark" arrow className="shrink-0">
            Explore all services
          </Button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06} className="h-full">
              {/* Compact rows on phones, so four services don't become four screens */}
              <Link
                href={`/services#${c.slug}`}
                className="group flex h-full items-center gap-4 rounded-3xl bg-white p-2.5 shadow-[0_18px_40px_-28px_rgba(28,43,38,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:flex-col sm:items-stretch sm:gap-0"
              >
                <div className="aspect-square w-24 shrink-0 overflow-hidden rounded-[1.1rem] sm:aspect-[4/3] sm:w-auto">
                  <Photo
                    src={c.image}
                    alt={c.imageAlt ?? ""}
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 6rem"
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col py-1 pr-1.5 sm:px-2.5 sm:pb-2.5 sm:pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[1.05rem] font-semibold leading-tight sm:text-[1.1rem]">{c.name}</h3>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                      <Icon name="arrow" className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.875rem] leading-snug text-slate sm:mt-2 sm:text-[0.9rem]">{c.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
