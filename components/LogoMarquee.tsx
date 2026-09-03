import { CLIENT_LOGOS } from "@/lib/content";

/**
 * Trust strip - placeholder client wordmarks, gently scrolling.
 * NOTE: rendered as styled text, not fabricated logo art, until a real
 * client roster exists.
 */
export function LogoMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="container-x">
        <p className="text-center text-[18px] font-medium text-muted">
          Businesses we work with
        </p>
        <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 pr-16">
            {row.map((logo, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-xl font-semibold text-muted/70"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
