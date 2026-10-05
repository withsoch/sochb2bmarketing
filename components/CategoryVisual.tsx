// Custom, presentational mini-mockups - one per service category.
// Same card idiom as the homepage Hero: white rounded-2xl cards, ring-1 ring-line,
// soft lift shadow, and brand/channel/leaf accents. No stock photography,
// every "photo" is a flat, CSS-drawn block, honest about being a mockup.
import Image from "next/image";
import { Icon } from "@/components/Icons";

const SOCIAL_MEDIA_IMAGE = {
  src: "/Service Images/social-media-phone.webp",
  alt: "Checking a business's social feed on a phone",
  caption: "Engaging content on social media",
};

// `alt` describes the photograph for a screen reader; `caption` is the line
// printed underneath it. They are separate because the two jobs differ — the
// caption names the client, the alt names what is in the picture.
const LINKEDIN_GALLERY: { src: string; alt: string; caption: string }[] = [
  {
    src: "/Service Images/linkedin-office.webp",
    alt: "Bright open-plan office with plants",
    caption: "Consulting client",
  },
  {
    src: "/Service Images/linkedin-laptop.webp",
    alt: "Consultant typing on a laptop",
    caption: "Advisory client",
  },
  {
    src: "/Service Images/linkedin-desk.webp",
    alt: "Laptop and notes on an office desk",
    caption: "Founder-led business",
  },
];

function LinkedInGallery() {
  return (
    <div className="mt-4">
      {/* Without this line the three photos read as stray office shots on a LinkedIn
          card. It says whose businesses they are, which is what makes the
          outreach figures above them mean something. */}
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted">
        Who we run it for
      </p>
      <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {LINKEDIN_GALLERY.map((img) => (
          <figure key={img.src}>
            <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const AI_CONTENT_GALLERY: { src: string; alt: string }[] = [
  { src: "/Service Images/ai-content-notebook-flatlay.webp", alt: "Product flat lay, styled for social content" },
  { src: "/Service Images/ai-content-team-meeting.webp", alt: "Your team at work in the office" },
  { src: "/Service Images/ai-content-desk-flatlay.webp", alt: "Workspace shot from above" },
  { src: "/Service Images/ai-content-moodboard-desk.webp", alt: "Workspace detail for the feed" },
  { src: "/Service Images/ai-content-filming-restaurant.webp", alt: "Short video filmed in a restaurant" },
];

function AiContentGallery() {
  return (
    <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {AI_CONTENT_GALLERY.map((img) => (
        <figure key={img.src}>
          <div className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line">
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-1.5 text-center text-[0.65rem] leading-snug text-muted">
            {img.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- shared primitives ---------- */

const card =
  "relative z-10 rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line";
const chip =
  "absolute z-20 rounded-xl bg-white p-2.5 shadow-[var(--shadow-lift)] ring-1 ring-line";

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto w-full max-w-sm px-2 py-4 lg:px-3">{children}</div>;
}

function ChannelDot({ color }: { color: string }) {
  return <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />;
}

/* ---------- Google Business Profile gallery ---------- */

const GOOGLE_GALLERY: { src: string; alt: string }[] = [
  {
    src: "/Service Images/google-maps-phone.webp",
    alt: "Google Maps open on a phone",
  },
  {
    src: "/Service Images/google-search-phone.webp",
    alt: "Google search open on a phone",
  },
  {
    src: "/Service Images/google-review-card.webp",
    alt: "A Google \"Leave a review\" card with five stars",
  },
];

function GoogleGallery() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {GOOGLE_GALLERY.map((img) => (
        <div
          key={img.src}
          className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-line"
        >
          <Image
            src={img.src}
            alt=""
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- per-category visuals ---------- */

function SocialMediaVisual() {
  const rows: { channel: string; label: string; day: string }[] = [
    { channel: "var(--color-channel-instagram)", label: "Reel · behind the scenes", day: "Mon" },
    { channel: "var(--color-channel-linkedin)", label: "LinkedIn · client win", day: "Tue" },
    { channel: "var(--color-channel-facebook)", label: "Client testimonial post", day: "Wed" },
    { channel: "var(--color-channel-tiktok)", label: "TikTok · quick tip video", day: "Thu" },
    { channel: "var(--color-channel-youtube)", label: "YouTube Short · how we work", day: "Fri" },
  ];
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={SOCIAL_MEDIA_IMAGE.src}
            alt={SOCIAL_MEDIA_IMAGE.alt}
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">This week&apos;s posts</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[0.65rem] font-medium text-slate">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Scheduled
            </span>
          </div>
          <div className="mt-3.5 space-y-2">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center gap-3 rounded-lg border border-line/70 bg-cream px-3 py-2.5"
              >
                <ChannelDot color={r.channel} />
                <p className="min-w-0 flex-1 truncate text-[0.78rem] font-medium text-ink-soft">
                  {r.label}
                </p>
                <span className="shrink-0 text-[0.68rem] text-muted">{r.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${chip} -right-2 -top-3 flex w-auto items-center gap-2 animate-float-b`}>
        <Icon name="chat" className="h-4 w-4 text-brand" strokeWidth={1.8} />
        <p className="text-[0.68rem] font-semibold text-ink">Captions in your voice</p>
      </div>
    </Stage>
  );
}

function GoogleVisual() {
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-brand">
            <Icon name="pin" className="h-5 w-5" strokeWidth={1.7} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink">Your Business Name</p>
            <p className="mt-0.5 text-[0.72rem] text-muted">Professional Services</p>
            <div className="mt-1.5 flex items-center gap-1.5">
              <Icon name="star" className="h-3.5 w-3.5 text-brand" strokeWidth={0} />
              <span className="text-[0.72rem] font-semibold text-ink">4.8</span>
              <span className="text-[0.68rem] text-muted">(212 reviews)</span>
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-leaf/12 px-2 py-1 text-[0.62rem] font-semibold text-leaf">
            Open now
          </span>
        </div>

        <GoogleGallery />

        <div className="mt-4 border-t border-dashed border-line pt-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[0.75rem] font-semibold text-ink">New review</p>
            <span className="flex items-center gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-3 w-3" strokeWidth={0} />
              ))}
            </span>
          </div>
          <p className="mt-1.5 text-[0.75rem] leading-relaxed text-ink-soft">
            &ldquo;Responsive team, and they remembered exactly what we needed
            from our last call.&rdquo;
          </p>
          <div className="mt-2.5 rounded-lg border border-line bg-cream px-3 py-2">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
              Your reply · 3h later
            </p>
            <p className="mt-1 text-[0.72rem] leading-relaxed text-slate">
              Thank you, that means a lot. See you on the next one.
            </p>
          </div>
        </div>
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-c`}>
        <Icon name="clock" className="h-4 w-4 text-brand" strokeWidth={1.8} />
        <p className="text-[0.68rem] font-semibold text-ink">Reviews answered in 24h</p>
      </div>
    </Stage>
  );
}

function AiContentVisual() {
  return (
    <Stage>
      <div className={`${card} overflow-hidden animate-float-a`}>
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/Service Images/ai-content-feature-team.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">This month&apos;s images</p>
            <span className="text-[0.7rem] font-semibold text-brand">10 / 10</span>
          </div>

          <AiContentGallery />
        </div>
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-b`}>
        <Icon name="spark" className="h-4 w-4 text-brand" strokeWidth={1.6} />
        <p className="text-[0.68rem] font-semibold text-ink">No photographer needed</p>
      </div>
    </Stage>
  );
}

function LinkedInVisual() {
  const items = [
    {
      name: "Connection requests sent",
      value: "42",
      tag: "This week",
      image: "/Service Images/linkedin-outreach-requests.webp",
    },
    {
      name: "Replies received",
      value: "11",
      image: "/Service Images/linkedin-outreach-messages.webp",
    },
    {
      name: "Calls booked",
      value: "3",
      image: "/Service Images/linkedin-outreach-calls.webp",
    },
  ];
  return (
    <Stage>
      <div className={`${card} p-5 animate-float-a`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Outreach this week</p>
          <Icon name="target" className="h-4 w-4 text-brand" strokeWidth={1.7} />
        </div>
        <div className="mt-3.5 space-y-2.5">
          {items.map((it) => (
            <div key={it.name} className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-line">
                <Image src={it.image} alt="" fill sizes="40px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.78rem] font-medium text-ink-soft">{it.name}</p>
                {it.tag && (
                  <span className="mt-0.5 inline-block rounded bg-peach px-1.5 py-0.5 text-[0.6rem] font-semibold text-brand-dark">
                    {it.tag}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-[0.78rem] font-semibold text-ink">{it.value}</span>
            </div>
          ))}
        </div>

        <LinkedInGallery />
      </div>
      <div className={`${chip} -bottom-2 -left-2 flex w-auto items-center gap-2 animate-float-b`}>
        <span
          className="rounded px-1.5 py-0.5 text-[0.6rem] font-bold text-white"
          style={{ background: "var(--color-channel-linkedin)" }}
        >
          LinkedIn
        </span>
      </div>
    </Stage>
  );
}

const VISUALS: Record<string, () => React.JSX.Element> = {
  "linkedin-leadgen": LinkedInVisual,
  "social-media": SocialMediaVisual,
  google: GoogleVisual,
  "ai-content": AiContentVisual,
};

export function CategoryVisual({ slug }: { slug: string }) {
  const Visual = VISUALS[slug];
  if (!Visual) {
    return (
      <Stage>
        <div className={`${card} flex items-center justify-center p-10`}>
          <Icon name="spark" className="h-10 w-10 text-brand" />
        </div>
      </Stage>
    );
  }
  return <Visual />;
}
