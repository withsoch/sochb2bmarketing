import { Icon } from "@/components/Icons";

/**
 * The /audit hero visual: a mock-up of the report we actually send back.
 * Deliberately shows the artefact rather than decorating around it, same
 * card idiom as ServiceVisual (white card, hairline ring, soft lift).
 * No stock faces: channel dots and typography carry it.
 */

const CHANNELS = [
  { name: "Google", color: "var(--color-channel-google)", score: 38, note: "Listing incomplete" },
  { name: "Instagram", color: "var(--color-channel-instagram)", score: 61, note: "Posting, but inconsistent" },
  { name: "LinkedIn", color: "var(--color-channel-linkedin)", score: 45, note: "Profile incomplete, no recent activity" },
];

const FIXES = [
  { label: "Claim and fully build the Google Business Profile", weight: "High impact" },
  { label: "Build out the LinkedIn company page properly", weight: "High impact" },
  { label: "Answer the backlog of unreplied Google reviews", weight: "Medium" },
];

export function AuditReportVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-[27.5rem]">
      <div className="relative z-10 rounded-2xl bg-white p-6 shadow-[var(--shadow-lift)] ring-1 ring-line sm:p-7">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Marketing audit &middot; sample
            </p>
            <p
              className="mt-1.5 text-[1.15rem] leading-tight text-ink"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Prepared for you
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-peach px-2.5 py-1 text-[0.65rem] font-semibold text-brand-dark">
            <Icon name="clock" className="h-3 w-3" strokeWidth={2} />
            24h
          </span>
        </div>

        <div className="rule-dashed my-5" />

        {/* per-channel read */}
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted">
          Channel read
        </p>
        <ul className="mt-3.5 space-y-5">
          {CHANNELS.map((c) => (
            <li key={c.name}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: c.color }}
                  />
                  <span className="text-[0.82rem] font-medium text-ink">{c.name}</span>
                </span>
                <span
                  className="text-[0.78rem] text-muted"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {c.score}
                  <span className="text-[0.65rem]">/100</span>
                </span>
              </div>
              <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${c.score}%` }}
                />
              </div>
              <p className="mt-1.5 text-[0.7rem] text-muted">{c.note}</p>
            </li>
          ))}
        </ul>

        <div className="rule-dashed my-5" />

        {/* prioritised fixes */}
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted">
          Fix first
        </p>
        <ol className="mt-3 space-y-2.5">
          {FIXES.map((f, i) => (
            <li key={f.label} className="flex items-start gap-2.5">
              <span
                className="mt-[3px] w-4 shrink-0 text-[0.7rem] font-semibold text-brand"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {i + 1}.
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.8rem] leading-snug text-ink-soft">
                  {f.label}
                </span>
                <span className="mt-0.5 block text-[0.65rem] font-medium text-muted">
                  {f.weight}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-[0.6rem] font-bold text-white">
              S
            </span>
            <p className="text-[0.7rem] leading-tight text-muted">
              Read and written by{" "}
              <span className="font-semibold text-ink">the Social Catalyst team</span>
              <br />
              Never a scoring tool
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[0.6rem] leading-tight text-muted">Growth potential</p>
            <p
              className="mt-0.5 text-[1.05rem] leading-none text-leaf"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              3.4&times;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
