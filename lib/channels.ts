// ------------------------------------------------------------------
//  Social Catalyst - the channels we actually run for B2B and growing businesses.
//  One list, shared by the homepage platform strip, the footer column
//  and the hero animation, so the platforms we name never drift apart.
// ------------------------------------------------------------------

export type Channel =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "google"
  | "linkedin";

/** Brand colours, defined as tokens in globals.css. Badges and glyphs only. */
export const CHANNEL_VAR: Record<Channel, string> = {
  instagram: "var(--color-channel-instagram)",
  facebook: "var(--color-channel-facebook)",
  tiktok: "var(--color-channel-tiktok)",
  google: "var(--color-channel-google)",
  linkedin: "var(--color-channel-linkedin)",
};

/**
 * Ordered for display. LinkedIn, Google and Instagram are where nearly
 * every B2B business needs to show up; Facebook and TikTok are marked
 * non-primary because not every business needs them - but they still get
 * a full-strength mark, since a faded logo reads as "broken", not "optional".
 *
 * `mark` picks how the logo is drawn (see components/PlatformIcons.tsx):
 * a real brand glyph, traced or extracted from each platform's own
 * artwork.
 */
export const PLATFORMS: {
  id: Channel;
  name: string;
  role: string;
  primary: boolean;
  mark: "glyph" | "monogram";
}[] = [
  {
    id: "instagram",
    name: "Instagram",
    role: "Reels & Stories",
    primary: true,
    mark: "glyph",
  },
  {
    id: "google",
    name: "Google",
    role: "Search & reviews",
    primary: true,
    mark: "glyph",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    role: "Company page & outreach",
    primary: true,
    mark: "glyph",
  },
  {
    id: "facebook",
    name: "Facebook",
    role: "Events & local reach",
    primary: false,
    mark: "glyph",
  },
  {
    id: "tiktok",
    name: "TikTok",
    role: "Short‑form video",
    primary: false,
    mark: "glyph",
  },
];
