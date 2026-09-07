import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { CASE_STUDIES } from "@/lib/content";

const QUOTES = CASE_STUDIES.slice(0, 3);

/**
 * Short quote cards pulled from the same real client engagements as the
 * case-study carousel (components/Testimonials.tsx) - a lighter, single-quote
 * take on the same proof rather than separate placeholder testimonials.
 */
export function QuoteStrip() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">Founders who stopped being hard to find.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {QUOTES.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-line pt-4">
                  <Avatar
                    src={cs.image}
                    name={cs.author}
                    initials={cs.initials}
                    accent={cs.accent}
                    size={36}
                    captioned
                  />
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-ink">{cs.author}</span>
                    <span className="block text-xs text-muted">{cs.authorRole}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
