import Image from "next/image";

type PhotoProps = {
  /** Path rooted at `public/`, e.g. "/images/food/wrap.jpg". Omit for no photo. */
  src?: string;
  /** Empty string marks the image decorative - correct for mockup fills. */
  alt: string;
  /**
   * CSS aspect-ratio, e.g. "4/3", "1/1", "3/4". Omit when the caller already
   * sizes the box itself (an `absolute inset-0` fill, or a fixed h-/w-).
   */
  ratio?: string;
  className?: string;
  /** Extra classes on the <Image> itself, e.g. "object-top". */
  imgClassName?: string;
  /** Required whenever the box is not full-viewport-width, or Next serves a
      needlessly large source. See the call sites for per-slot values. */
  sizes?: string;
  priority?: boolean;
  /** Rendered instead of the image when `src` is absent. */
  fallback?: React.ReactNode;
};

/**
 * A fixed-aspect photo that fills its box, with a graceful fallback when no
 * file exists yet. Callers never have to branch on whether a photo is present.
 *
 * `fill` needs a positioned parent, so the wrapper is always `relative`.
 */
export function Photo({
  src,
  alt,
  ratio,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  fallback = null,
}: PhotoProps) {
  if (!src) return <>{fallback}</>;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
