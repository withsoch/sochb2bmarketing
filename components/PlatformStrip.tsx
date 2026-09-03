import { Reveal } from "@/components/ui/Reveal";
import { PlatformMark } from "@/components/PlatformIcons";
import { PLATFORMS } from "@/lib/channels";

/**
 * Names the channels we actually run. The homepage otherwise talks about
 * "every channel that matters" without ever saying which, which reads as a
 * LinkedIn-only shop. Heading-light on purpose: the Positioning h2 follows
 * immediately below and should stay the first real headline after the hero.
 */
export function PlatformStrip() {
  return (
    <section className="border-b border-line bg-white py-14 sm:py-16">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Channels we run</span>
          <p className="lead mt-4">
            One plan, run properly across every app your customers already
            use to find you and order from you.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-line pt-9 sm:grid-cols-3 lg:grid-cols-6">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <div className="group flex h-full items-center gap-3 rounded-xl border border-line bg-cream px-3 py-3 transition-colors hover:border-ink/15 hover:bg-white">
                <PlatformMark id={p.id} size="md" />
                <div className="min-w-0">
                  <p className="truncate text-[0.925rem] font-semibold leading-tight text-ink">
                    {p.name}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] leading-snug text-balance text-muted">
                    {p.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
