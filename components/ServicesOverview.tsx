import { Icon } from "@/components/Icons";
import { AuditButton } from "@/components/AuditButton";
import { SERVICE_CATEGORIES } from "@/lib/content";

/**
 * The /services hero visual: an editorial index of the categories rather
 * than a decorative diagram. It tells you what is on the page and takes you
 * straight to any of it, a table of contents in the brand's serif idiom.
 */
export function ServicesOverview() {
  return (
    <div className="mx-auto w-full max-w-[30rem] rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] lg:max-w-none">
      <div className="flex items-baseline justify-between gap-4 px-6 pb-4 pt-6 sm:px-7">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
          On this page
        </p>
        <p className="text-[0.7rem] font-medium text-muted">
          {SERVICE_CATEGORIES.length} categories
        </p>
      </div>

      <ul className="border-t border-line">
        {SERVICE_CATEGORIES.map((c, i) => (
          <li key={c.slug} className="border-b border-line last:border-b-0">
            <a
              href={`#${c.slug}`}
              className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-mist sm:px-7"
            >
              <span
                className="w-6 shrink-0 text-[0.75rem] font-medium text-muted transition-colors group-hover:text-brand"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1 text-[0.95rem] font-medium leading-snug text-ink-soft transition-colors group-hover:text-ink">
                {c.name}
              </span>
              <Icon
                name="arrow"
                className="h-4 w-4 shrink-0 text-line transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 rounded-b-2xl bg-cream px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="text-[0.85rem] leading-snug text-slate">
          Not sure which one you need?
        </p>
        <AuditButton variant="secondary" size="md" className="shrink-0 cursor-pointer">
          Get a free audit
        </AuditButton>
      </div>
    </div>
  );
}
