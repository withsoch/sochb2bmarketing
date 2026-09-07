import Image from "next/image";
import Link from "next/link";

// Wordmark lives in public/logos/. Transparent background; the mark itself
// is near-black, so on a dark surface (see Footer.tsx) that swaps in the
// "-light" variant with the mark recolored to white instead of wrapping it
// in a contrast card.
const LOGO_SRC = "/logos/social-catalyst-logo.png";
const LOGO_SRC_LIGHT = "/logos/social-catalyst-logo-light.png";

export function Logo({
  className = "",
  imgClassName = "h-12 w-auto",
  light = false,
}: {
  className?: string;
  imgClassName?: string;
  /** Use the white-mark variant for dark surfaces (e.g. the footer). */
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Social Catalyst home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={light ? LOGO_SRC_LIGHT : LOGO_SRC}
        alt="Social Catalyst"
        width={500}
        height={235}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
