"use client";

import { SCHEDULER_URL, SITE } from "@/lib/content";
import { Icon } from "@/components/Icons";

/**
 * Renders the booking scheduler.
 * - When NEXT_PUBLIC_SCHEDULER_URL (or SCHEDULER_URL in lib/content.ts) is set,
 *   it embeds that scheduler in an iframe (works with Calendly, TidyCal, etc).
 * - Otherwise it shows a polished fallback so the page never looks broken.
 */
export function SchedulerEmbed() {
  if (SCHEDULER_URL) {
    return (
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-soft)]">
        <iframe
          src={SCHEDULER_URL}
          title="Book a call with Soch"
          className="h-[680px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-8 sm:p-10">
      <div>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-peach text-brand-dark">
          <Icon name="clock" className="h-6 w-6" />
        </span>
        <h3 className="text-h3 mt-5 text-ink">Grab a time that suits you</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Our live booking calendar is being connected. In the meantime, reach out
          directly and we&apos;ll get you scheduled within one business day.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${SITE.email}?subject=Discovery%20Call%20Request`}
            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-dark"
          >
            Email us to book
            <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-ink ring-1 ring-ink/20 transition-colors duration-200 hover:ring-ink/45"
          >
            <Icon name="social" className="h-5 w-5" />
            Message us on LinkedIn
          </a>
        </div>

        <p className="mt-5 text-xs text-muted">
          {/* dev note for the client */}
          Tip: set <code className="rounded bg-mist px-1.5 py-0.5 text-ink">NEXT_PUBLIC_SCHEDULER_URL</code>{" "}
          to your Calendly link to embed live booking here.
        </p>
      </div>
    </div>
  );
}
