import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PACKAGES } from "@/lib/content";

const CORE = PACKAGES.filter((p) => p.track === "core");

export function PackagesPreview() {
  return (
    <section className="bg-mist py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-h2">Packages, starting from €290/month.</h2>
            <p className="lead mt-5">
              Five packages, one goal: look open, get found, get more orders.
              See the full detail and the two specialist tracks on the
              packages page.
            </p>
          </div>
          <Button href="/packages" variant="dark" arrow className="shrink-0">
            See all packages
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CORE.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-xl border bg-white p-6 ${
                  p.popular ? "border-brand" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[1.05rem] font-semibold text-ink">{p.name}</h3>
                  {p.popular && (
                    <span className="rounded-full bg-peach px-2.5 py-1 text-[0.65rem] font-semibold text-brand-dark">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-slate">{p.audience}</p>
                <div className="rule-dashed my-4" />
                <p>
                  <span
                    className="text-[1.5rem] leading-none text-ink"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}
                  >
                    {p.monthly}
                  </span>
                  <span className="ml-1 text-[0.85rem] font-medium text-muted">/month</span>
                </p>
                <p className="mt-1 text-[0.75rem] text-muted">Starting from</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
