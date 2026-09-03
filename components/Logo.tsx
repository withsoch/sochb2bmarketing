import Image from "next/image";
import Link from "next/link";

// Wordmark images live in public/logos/. The site brand is "Soch"; the
// underlying image files/paths still carry an older "Sovita" filename,
// which is a pre-existing asset naming mismatch, not a rename target here.
// NOTE: despite the filenames, soch-logo-dark.png renders as a light/white
// mark (built for dark backgrounds) and soch-logo-light.png renders
// full-color (built for light backgrounds) - the opposite of what the names
// imply. Mapped here exactly as specified; swap the two src paths below if
// the navbar/footer render with the wrong contrast.
const LOGO_SRC = {
  dark: "/logos/Sovita-logo-removebg-preview.png",
  light: "/logos/Sovita-logo-white.png",
};

export function Logo({
  className = "",
  imgClassName = "h-12 w-auto",
  variant = "dark",
}: {
  className?: string;
  imgClassName?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = navbar; "light" variant = footer
  return (
    <Link
      href="/"
      aria-label="Soch home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={LOGO_SRC[variant]}
        alt="Soch Catalyst"
        width={1000}
        height={250}
        priority
        className={imgClassName}
      />
    </Link>
  );
}
