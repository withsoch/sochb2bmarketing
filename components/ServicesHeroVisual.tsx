import { Photo } from "@/components/ui/Photo";
import { FloatChip } from "@/components/HeroPhoto";
import { PlatformMark } from "@/components/PlatformIcons";
import { PLATFORMS } from "@/lib/channels";

/**
 * /services hero aside: three photos in soft, overlapping shapes (an arch, a
 * pebble and a circle) on a rounded colour blob. Deliberately not a grid, so
 * there are no straight seams between the pictures.
 */
export function ServicesHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem] lg:mr-0">
      <div className="relative aspect-[20/21]">
        {/* colour blob and accent dot behind the photos */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[6%] bottom-[7%] top-[9%] rotate-[-7deg] rounded-[44%_56%_52%_48%/50%_42%_58%_50%] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)]"
        />
        <span aria-hidden="true" className="absolute bottom-[3%] left-[6%] h-16 w-16 rounded-full bg-lilac/70 blur-[2px]" />

        {/* social apps: tall arch, the main picture */}
        <div className="absolute left-[7%] top-[3%] w-[54%]">
          <Photo
            src="/images/services/hero-social-apps.webp"
            alt="Instagram, YouTube and Facebook apps on a phone screen"
            ratio="3/4"
            priority
            sizes="(min-width: 640px) 16rem, 54vw"
            // A true semicircle top for a 3:4 box (37.5% of the height = half
            // the width). rounded-t-full would overflow the box, and CSS then
            // scales every corner down, squaring off the bottom ones.
            className="rounded-[50%_50%_2.5rem_2.5rem/37.5%_37.5%_2.5rem_2.5rem] shadow-[var(--shadow-lift)] ring-4 ring-white"
          />
        </div>

        {/* LinkedIn profile: rounded pebble, top right */}
        <div className="absolute right-[3%] top-[17%] w-[40%] rotate-[5deg]">
          <Photo
            src="/images/services/hero-linkedin.webp"
            alt="A LinkedIn profile open on a laptop"
            ratio="5/6"
            sizes="(min-width: 640px) 12rem, 40vw"
            className="rounded-[2.75rem] shadow-[var(--shadow-lift)] ring-4 ring-white"
            imgClassName="object-[30%_40%]"
          />
        </div>

        {/* Google Maps: circle, bottom */}
        <div className="absolute bottom-[5%] right-[13%] w-[43%]">
          <Photo
            src="/images/services/hero-maps.webp"
            alt="Google Maps open on a laptop"
            ratio="1/1"
            sizes="(min-width: 640px) 13rem, 43vw"
            className="rounded-full shadow-[var(--shadow-lift)] ring-4 ring-white"
            imgClassName="object-[40%_55%]"
          />
        </div>

        <FloatChip className="-left-2 bottom-[2%] hidden sm:block" float="animate-float-a">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">One plan, run across</p>
          <div className="mt-2 flex gap-1.5">
            {PLATFORMS.map((p) => (
              <PlatformMark key={p.id} id={p.id} size="sm" />
            ))}
          </div>
        </FloatChip>
        <FloatChip className="-left-1 top-[46%] sm:-left-6" float="animate-float-c">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-leaf/15 text-leaf">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-[0.75rem] font-semibold leading-tight text-ink">You approve every post</p>
              <p className="text-[0.68rem] leading-tight text-muted">Nothing goes live without you</p>
            </div>
          </div>
        </FloatChip>
      </div>
    </div>
  );
}
