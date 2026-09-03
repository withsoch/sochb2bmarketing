import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a quote for your business. A free 30-minute call, no pitch, just a plan for where your business is losing customers and how to fix it.",
};

const EXPECT = [
  "A clear read on where your business is losing customers today",
  "Which package fits, and why, even if it's the cheapest one on the list",
  "Which platforms would move the needle fastest for your business specifically",
  "A straight recommendation, no pressure. Work with us, or take the plan and run",
];

const META = [
  { icon: "clock" as const, label: "30 minutes" },
  { icon: "chat" as const, label: "No pitch, just a plan" },
  { icon: "shield" as const, label: "Free, no card needed" },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title={
          <>
            From overlooked online to{" "}
            <span className="text-gradient">actually generating leads.</span>
          </>
        }
        intro="A free 30-minute call. We look at where your business stands today on Instagram, Google and LinkedIn, and hand you a clear plan. Take it and run, or take it with us."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal delay={0}>
            <div className="flex flex-wrap gap-2.5">
              {META.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
                >
                  <Icon name={m.icon} className="h-4 w-4 text-brand-dark" />
                  {m.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0}>
            <h2 className="text-h2 mt-8">What you walk away with</h2>
          </Reveal>

          <ul className="mt-6 space-y-4">
            {EXPECT.map((e, i) => (
              <Reveal key={e} delay={i * 0.1} as="li" className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/12 text-brand-dark">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-[0.975rem] leading-relaxed text-slate">{e}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-line bg-cream p-6">
              <p className="text-sm font-semibold text-ink">Who it&apos;s for</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                B2B and growing business owners who want to look active,
                get found on Google, and turn that into more leads,
                without becoming a full-time content creator themselves.
              </p>
            </div>
          </Reveal>

          {/* who you'll actually be on the call with - drops out entirely until
              there is a real person with a real photo in TEAM */}
          {TEAM[0]?.photo && (
            <Reveal delay={0.15}>
              <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center">
                <Photo
                  src={TEAM[0].photo}
                  alt={`${TEAM[0].name}, ${TEAM[0].role} at Soch`}
                  ratio="1/1"
                  sizes="112px"
                  className="w-28 shrink-0 rounded-xl"
                />
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Who you&apos;ll be talking to
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {TEAM[0].name}, {TEAM[0].role}. You get the person who would
                    actually run your account, not a sales team passing you along
                    afterwards.
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookButton variant="primary" size="lg">
                Get a quote
              </BookButton>
              <AuditButton variant="secondary" size="lg" className="!ring-brand !text-brand hover:!ring-brand-dark hover:!text-brand-dark">
                Get a Free Marketing Audit
              </AuditButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
