import type { Metadata } from "next";
import Image from "next/image";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { BookButton } from "@/components/BookButton";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services: Social, Google, Reviews & LinkedIn",
  description:
    "Instagram, TikTok and Facebook content, Google Business Profile management, review replies, AI-produced photos and video, one-page websites, LinkedIn outreach, and ad management, for B2B and growing businesses.",
};

const FACTS = [
  { value: "24", label: "Services, across 7 categories" },
  { value: "7", label: "Categories, run as one system" },
  { value: "5", label: "Platforms & channels under one plan" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col justify-center">
              <Reveal delay={0}>
                <span className="eyebrow">Services</span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-display mt-5 text-[clamp(2.3rem,1.4rem+3vw,3.6rem)]">
                  Everything your business needs online.{" "}
                  <span className="italic text-brand">
                    Take one piece, or hand us the lot.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Every service below does one of two things: makes you
                  easier to find, or makes people reach out once they&apos;ve
                  found you. Across Instagram, Google, LinkedIn, TikTok and
                  Facebook.
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
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-dashed border-line pt-7">
                  {FACTS.map((f) => (
                    <div key={f.label}>
                      <dt className="sr-only">{f.label}</dt>
                      <dd>
                        <span
                          className="block text-[1.75rem] leading-none text-ink"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                        >
                          {f.value}
                        </span>
                        <span className="mt-2 block text-[0.78rem] leading-snug text-muted">
                          {f.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="h-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <Image
                  src="/Service Images/foundations-hero-collage.webp"
                  alt="A counter terminal, a phone finding places to eat, a plated dish and a card reader"
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

      <ServicesShowcase />

      <CtaBand
        title="Not sure which piece you need"
        subtitle="Get a quote. We'll look at your business, tell you which of these would help first, and say so plainly if the answer is none of them yet."
      />
    </>
  );
}
