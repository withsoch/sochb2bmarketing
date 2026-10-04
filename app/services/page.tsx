import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CtaBand } from "@/components/CtaBand";
import { InnerHero } from "@/components/InnerHero";
import { ServicesHeroVisual } from "@/components/ServicesHeroVisual";
import { StatValue } from "@/components/StatCounter";
import { Emphasis } from "@/components/ui/Emphasis";
import { PLATFORMS } from "@/lib/channels";
import { CTAS, SERVICE_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services: LinkedIn, Social Media, Google & AI Content",
  description:
    "LinkedIn outreach, Instagram, Facebook, TikTok and YouTube content, Google Business Profile and review management, and AI-produced photos and video, for B2B and growing businesses.",
};

const FACT_TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft"];

// Counted from the data, so these can't drift from the list below.
const SERVICE_COUNT = SERVICE_CATEGORIES.reduce((n, c) => n + c.services.length, 0);

const FACTS = [
  { value: String(SERVICE_COUNT), label: `Services, across ${SERVICE_CATEGORIES.length} categories` },
  { value: String(SERVICE_CATEGORIES.length), label: "Categories, run as one system" },
  { value: String(PLATFORMS.length), label: "Platforms & channels under one plan" },
];

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Services"
        title={
          <>
            Everything your business needs online.{" "}
            <Emphasis>Take one piece, or hand us the lot.</Emphasis>
          </>
        }
        lead={
          <>
            Every service below does one of two things: makes you easier to
            find, or makes people reach out once they&apos;ve found you.
            Across LinkedIn, Instagram, Google, Facebook, TikTok and YouTube.
          </>
        }
        actions={
          <>
            <BookButton variant="primary" size="lg" arrow className="btn-shine shadow-[0_18px_34px_-14px_var(--color-brand)]">
              {CTAS.primary.label}
            </BookButton>
            <AuditButton variant="secondary" size="lg" className="cursor-pointer bg-white/80">
              {CTAS.secondary.label}
            </AuditButton>
          </>
        }
        footer={
          <dl className="grid grid-cols-3 gap-3">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`rounded-2xl p-4 ${FACT_TINTS[i % FACT_TINTS.length]}`}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <StatValue
                    value={f.value}
                    className="block text-[1.9rem] leading-none text-ink"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  />
                  <span className="mt-2 block text-[0.75rem] leading-snug text-ink-soft">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        }
        aside={<ServicesHeroVisual />}
      />

      <ServicesShowcase />

      <CtaBand
        title="Not sure which piece you need"
        subtitle="Get a quote. We'll look at your business, tell you which of these would help first, and say so plainly if the answer is none of them yet."
      />
    </>
  );
}
