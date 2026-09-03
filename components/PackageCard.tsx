import { BookButton } from "@/components/BookButton";
import { Icon } from "@/components/Icons";
import type { Package } from "@/lib/content";

/**
 * A single package card, the only place a price appears on the public
 * site. Growth (popular:true) gets a brand ring and a pill; specialist
 * packages (Delivery-Led, Full) are rendered wider by the caller, not here.
 */
export function PackageCard({ pkg, dark = false }: { pkg: Package; dark?: boolean }) {
  const tone = dark
    ? {
        wrap: "bg-forest text-white",
        name: "text-white",
        audience: "text-white/65",
        rule: "border-white/15",
        price: "text-white",
        priceSub: "text-white/60",
        outcome: "text-white/85",
        feature: "text-white/80",
        check: "text-brand-light",
      }
    : {
        wrap: "bg-white text-ink",
        name: "text-ink",
        audience: "text-muted",
        rule: "border-line border-dashed",
        price: "text-ink",
        priceSub: "text-muted",
        outcome: "text-ink-soft",
        feature: "text-slate",
        check: "text-brand",
      };

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${tone.wrap} ${
        pkg.popular ? "border-brand shadow-[var(--shadow-lift)]" : "border-line"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-white">
          Most popular
        </span>
      )}

      <h3 className={`text-h3 ${tone.name}`}>{pkg.name}</h3>
      <p className={`mt-2 text-[0.9rem] leading-relaxed ${tone.audience}`}>{pkg.audience}</p>

      <div className={`my-5 border-t ${tone.rule}`} />

      <div>
        <p className={tone.price}>
          <span
            className="text-[2rem] leading-none"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}
          >
            {pkg.monthly}
          </span>
          <span className="ml-1.5 text-[0.9rem] font-medium">/month</span>
        </p>
        <p className={`mt-1.5 text-[0.8rem] ${tone.priceSub}`}>
          + {pkg.setup} one-off setup{pkg.setupNote ? ` (${pkg.setupNote})` : ""}
        </p>
        <p className={`mt-0.5 text-[0.75rem] font-medium ${tone.priceSub}`}>Starting from, excl. VAT</p>
      </div>

      <div className={`my-5 border-t ${tone.rule}`} />

      <p className={`text-[0.95rem] font-medium leading-snug ${tone.outcome}`}>{pkg.outcome}</p>

      <ul className="mt-4 flex-1 space-y-2.5">
        {pkg.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-[0.875rem] leading-snug ${tone.feature}`}>
            <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${tone.check}`} strokeWidth={2.4} />
            {f}
          </li>
        ))}
      </ul>

      <div className={`mt-6 border-t pt-5 ${tone.rule}`}>
        <BookButton variant={dark ? "light" : "primary"} size="md" className="w-full justify-center">
          Get a quote
        </BookButton>
      </div>
    </div>
  );
}
