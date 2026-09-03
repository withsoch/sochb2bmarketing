import type { Metadata } from "next";
import { AuditButton } from "@/components/AuditButton";
import { AuditReportVisual } from "@/components/AuditReportVisual";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import {
  AUDIT_DELIVERABLES,
  AUDIT_EXCLUSIONS,
  AUDIT_FAQS,
  AUDIT_STEPS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Free Marketing Audit",
  description:
    "Request a free marketing audit. We review your Instagram, Google Business Profile and LinkedIn by hand, then send back a plan of the moves worth making first.",
};

const HERO_FACTS = [
  { icon: "clock" as const, label: "Back within 24 hours" },
  { icon: "pen" as const, label: "Read by hand, not by tool" },
  { icon: "shield" as const, label: "Free, and yours to keep" },
];

export default function AuditPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* copy */}
            <div className="max-w-xl">
              <Reveal delay={0}>
                <span className="eyebrow">Free marketing audit</span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-display mt-5 text-[clamp(2.2rem,1.3rem+3.2vw,3.6rem)]">
                  See exactly what&apos;s keeping leads from finding you online.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="lead mt-5">
                  Send us your links. A person reads your Instagram, your
                  Google listing and your LinkedIn by hand, then sends
                  back a written plan of what to fix first.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <AuditButton variant="primary" size="lg">
                    Get Your Free Audit
                  </AuditButton>
                  <p className="text-sm text-muted">
                    Takes under a minute. No call required.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-9 flex flex-col gap-3 border-t border-dashed border-line pt-6 sm:flex-row sm:flex-wrap sm:gap-x-7">
                  {HERO_FACTS.map((f) => (
                    <li key={f.label} className="flex items-center gap-2.5">
                      <Icon
                        name={f.icon}
                        className="h-4 w-4 shrink-0 text-brand"
                        strokeWidth={1.8}
                      />
                      <span className="text-[0.85rem] font-medium text-ink-soft">
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* the deliverable itself */}
            <Reveal delay={0.15} className="lg:pl-4">
              <AuditReportVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ─────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">What lands in your inbox.</h2>
            <p className="lead mt-5">
              Four sections, written for your channels specifically. No score
              badge, no generic checklist, nothing you could have generated
              yourself in thirty seconds on a scoring tool.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {AUDIT_DELIVERABLES.map((d, i) => (
              <Reveal
                key={d.title}
                delay={(i % 2) * 0.1}
                className={`${
                  i % 2 === 1 ? "sm:border-l sm:border-dashed sm:border-line sm:pl-14" : ""
                } ${i >= 2 ? "border-t border-dashed border-line pt-12 sm:border-t-0 sm:pt-0" : ""}`}
              >
                <span
                  className="block text-[0.8rem] font-semibold text-brand"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 mt-2.5">{d.title}</h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">
                  {d.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="border-y border-line bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Three steps. One takes you a minute.</h2>
          </Reveal>

          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {AUDIT_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} as="li" className="relative">
                {/* connector rule between steps on desktop */}
                {i < AUDIT_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-14 right-0 top-5 hidden border-t border-dashed border-line md:block"
                  />
                )}
                <span
                  className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[0.9rem] text-ink ring-1 ring-line"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="text-h3 mt-5">{s.title}</h3>
                <p className="mt-2.5 max-w-sm text-[0.975rem] leading-relaxed text-slate">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHAT IT ISN'T ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <p
              className="text-[1.45rem] leading-snug text-ink"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Built for B2B and growing businesses that want a straight
              answer, not a sales pitch.
            </p>
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {AUDIT_EXCLUSIONS.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-muted">
                    <Icon name="close" className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  <span className="text-[0.925rem] text-ink-soft">{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-mist py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-h2">Before you send your links.</h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-slate">
                Anything still unclear, email{" "}
                <a
                  href="mailto:riz@soovita.com"
                  className="font-semibold text-brand-dark underline underline-offset-4"
                >
                  riz@soovita.com
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={AUDIT_FAQS} />
              <div className="mt-8">
                <AuditButton variant="primary" size="lg">
                  Get Your Free Audit
                </AuditButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk it through first"
        subtitle="Get a quote instead. Same honesty, on a 30-minute call, and we look at your business together while we're on it."
      />
    </>
  );
}
