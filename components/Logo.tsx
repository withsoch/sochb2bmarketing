import Image from "next/image";
import Link from "next/link";

// Wordmark lives in public/logos/social-catalyst-logo.png. It's a single
// flat asset (opaque white background, no dark variant supplied yet), so
// both the navbar and footer render the same file - callers that place it
// on a dark surface (see Footer.tsx) wrap it in a light card for contrast.
const LOGO_SRC = "/logos/social-catalyst-logo.png";

export function Logo({
  className = "",
  imgClassName = "h-12 w-auto",
}: {
  className?: string;
  imgClassName?: string;
  /** @deprecated no longer used - the logo has a single flat variant. */
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label="Social Catalyst home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={LOGO_SRC}
        alt="Social Catalyst"
        width={500}
        height={235}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
