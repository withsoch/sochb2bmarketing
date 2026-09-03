// Brand marks for the channels we run.
//
// Deliberately kept out of components/Icons.tsx: that set is a stroke-based
// line-icon system (fill: none, 1.6 stroke) and these are solid brand marks.
//
// Two kinds of mark live here:
//   - `glyph`    a real brand glyph, drawn to the platform's own artwork.
//                Instagram / Facebook / TikTok / LinkedIn are single-colour
//                and take their colour from the caller; Google is the
//                official four-colour G, so it carries its own fills.
//   - `monogram` a plain initial on the channel's brand colour. Unused for
//                now, kept for a future wordmark-only brand with no source
//                artwork at all.
import type { SVGProps } from "react";
import { CHANNEL_VAR, PLATFORMS, type Channel } from "@/lib/channels";

export type GlyphChannel = "instagram" | "facebook" | "tiktok" | "google" | "linkedin";

const PATHS: Record<Exclude<GlyphChannel, "google">, string> = {
  instagram:
    "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  tiktok:
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  facebook:
    "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

/**
 * Official four-colour Google G. Drawn as four separate fills, which is the
 * whole point: the previous single-path version merged all four segments into
 * one flat blue blob that read as a smudge rather than a logo.
 */
const GOOGLE_G: { d: string; fill: string }[] = [
  {
    fill: "#4285F4",
    d: "M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3.09h3.86c2.26-2.09 3.56-5.17 3.56-8.91z",
  },
  {
    fill: "#34A853",
    d: "M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.09c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z",
  },
  {
    fill: "#FBBC05",
    d: "M5.27 14.2a7.2 7.2 0 0 1 0-4.6V6.51H1.29a12 12 0 0 0 0 10.78l3.98-3.09z",
  },
  {
    fill: "#EA4335",
    d: "M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.61l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z",
  },
];

export function PlatformIcon({
  id,
  className,
  ...props
}: { id: GlyphChannel; className?: string } & SVGProps<SVGSVGElement>) {
  if (id === "google") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
        {GOOGLE_G.map((p) => (
          <path key={p.fill} d={p.d} fill={p.fill} />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d={PATHS[id]} />
    </svg>
  );
}

const BY_ID = Object.fromEntries(PLATFORMS.map((p) => [p.id, p])) as Record<
  Channel,
  (typeof PLATFORMS)[number]
>;

const TILE_SIZE = {
  sm: "h-7 w-7 rounded-[7px]",
  md: "h-9 w-9 rounded-[10px]",
  lg: "h-11 w-11 rounded-xl",
} as const;

const GLYPH_SIZE = {
  sm: "h-[15px] w-[15px]",
  md: "h-[19px] w-[19px]",
  lg: "h-[23px] w-[23px]",
} as const;

const MONOGRAM_SIZE = {
  sm: "text-[0.72rem]",
  md: "text-[0.9rem]",
  lg: "text-[1.05rem]",
} as const;

/**
 * One consistent tile per channel, so a row of five marks reads as a single
 * set instead of four icons plus two text pills. Glyph channels sit on a
 * light tint of their own brand colour; monogram channels use the brand
 * colour solid with a white initial.
 */
export function PlatformMark({
  id,
  size = "md",
  className = "",
}: {
  id: Channel;
  size?: keyof typeof TILE_SIZE;
  className?: string;
}) {
  const platform = BY_ID[id];
  const color = CHANNEL_VAR[id];
  const base = `inline-flex shrink-0 items-center justify-center ${TILE_SIZE[size]} ${className}`;

  if (platform.mark === "monogram") {
    return (
      <span
        className={`${base} font-semibold text-white`}
        style={{ background: color, fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        <span className={MONOGRAM_SIZE[size]}>{platform.name.charAt(0)}</span>
      </span>
    );
  }

  return (
    <span
      className={base}
      style={{
        background: `color-mix(in srgb, ${color} 12%, white)`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${color} 18%, transparent)`,
      }}
      aria-hidden="true"
    >
      <PlatformIcon
        id={id as GlyphChannel}
        className={GLYPH_SIZE[size]}
        style={id === "google" ? undefined : { color }}
      />
    </span>
  );
}
