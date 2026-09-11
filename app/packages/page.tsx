import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { PackageCard } from "@/components/PackageCard";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { PACKAGES, PACKAGE_TERMS, PRICING_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing for B2B and Growing Businesses",
  description:
    "Five packages for B2B and growing businesses. Social media, Google, reviews, LinkedIn outreach and ads. Get a quote.",
};

const CORE = PACKAGES.filter((p) => p.track === "core");
const SPECIALIST = PACKAGES.filter((p) => p.track === "specialist");

export default function PackagesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col justify-center">
              <Reveal delay={0}>
                <span className="eyebrow">Packages</span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-display mt-5 text-[clamp(2.3rem,1.4rem+3vw,3.6rem)]">
                  Five packages.{" "}
                  <span className="italic text-brand">One goal: more customers.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Pick the package that matches where your business is today.
                  Get a quote and we&apos;ll confirm the exact fit and price
                  for your business.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8">
                  <BookButton variant="primary" size="lg" arrow>
                    Get a quote
                  </BookButton>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-dashed border-line pt-7">
                  {PACKAGE_TERMS.map((t) => (
                    <div key={t.label}>
                      <dt className="sr-only">{t.label}</dt>
                      <dd>
                        <span
                          className="block text-[1.5rem] leading-none text-ink"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                        >
                          {t.value}
                        </span>
                        <span className="mt-2 block text-[0.78rem] leading-snug text-muted">
                          {t.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* hero image */}
            <Reveal delay={0.15} className="h-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <Image
                  src="/Service Images/packages-hero-cafe.webp"
                  alt="Cozy interior with warm lighting and people meeting"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CORE LADDER ───────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Start here.</h2>
            <p className="lead mt-5">
              Essentials, Starter and Growth build on each other. Pick the
              one that matches how much of your business is online today.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CORE.map((p, i) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-32">
                <Reveal delay={i * 0.08}>
                  <PackageCard pkg={p} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST TRACKS ─────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Two of these aren&apos;t a step up.</h2>
            <p className="lead mt-5">
              Outbound-Led and Full are different routes, not higher rungs on
              the same ladder. Built for a specific shape of business, not
              just a bigger version of the same one.
            </p>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {SPECIALIST.map((p, i) => (
              <div key={p.slug} id={p.slug} className="h-full scroll-mt-32">
                <Reveal delay={i * 0.08} className="h-full">
                  <PackageCard pkg={p} dark={p.slug === "full"} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-h2">Questions before you ask for a quote.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={PRICING_FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about your business and we'll quote it"
        subtitle="Get a quote. We'll ask a few questions and recommend a package honestly, even when the honest answer is the cheapest one."
      />
    </>
  );
}
