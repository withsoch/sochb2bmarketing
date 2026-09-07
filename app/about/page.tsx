import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { BookButton } from "@/components/BookButton";
import { Icon, type IconName } from "@/components/Icons";
import { Avatar } from "@/components/ui/Avatar";
import { Photo } from "@/components/ui/Photo";
import { TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Social Catalyst runs Instagram, LinkedIn, Google and reviews for B2B and growing businesses.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over shortcuts",
    body: "Fake followers, review-bombing your own page, boosted engagement pods. We don't take any of those shortcuts. Every account we run is real posts, real replies and a real Google listing, done properly, every week.",
  },
  {
    icon: "chat",
    title: "Your voice, in two languages",
    body: "We learn how your business talks and write captions in Estonian and English, so local and international contacts both feel spoken to. We never publish a template with your name swapped in.",
  },
  {
    icon: "target",
    title: "Leads, not vanity",
    body: "Follower counts show up in every report because they're useful context. They are not the goal. The goal is a booked call, a qualified lead, or someone reaching out because your listing came up first.",
  },
  {
    icon: "spark",
    title: "A small number of businesses, done properly",
    body: "We take a limited number of businesses at a time, on purpose. If something isn't working, a package, a platform, a listing, we say so and change it, rather than let it quietly underperform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-mist">
        <div className="container-x py-16 sm:py-20 lg:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex max-w-xl flex-col justify-center">
              <Reveal delay={0.05}>
                <h1 className="text-display text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
                  Built for B2B and growing businesses like yours
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lead mt-6 max-w-2xl">
                  Most marketing agencies serve everyone with the same
                  generic playbook: a content calendar, a posting schedule,
                  and not much else. We built Social Catalyst to treat Google, reviews
                  and LinkedIn outreach as seriously as the Instagram feed,
                  because that&apos;s where B2B business actually gets decided.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <BookButton variant="primary" size="lg" arrow>
                    Get a quote
                  </BookButton>
                </div>
              </Reveal>
            </div>

            {/* hero image */}
            <Reveal delay={0.15} className="h-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[480px]">
                <Image
                  src="/Service Images/about-hero-restaurant-cafe.png"
                  alt="Cozy interior with warm sunlight and a table"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-h2">The problem we kept seeing</h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most social media services sell posts. They write content,
                schedule it, and call it done, one channel at a time. For a
                growing business, that&apos;s rarely the real bottleneck. The
                bottleneck is a Google listing nobody claimed, reviews nobody
                answered, and a LinkedIn page that hasn&apos;t been touched
                since it was set up.
              </p>
              <p>
                The businesses that grow are not the ones posting the most.
                They&apos;re the ones that are easy to find, that answer
                their reviews the same day, and whose LinkedIn outreach
                actually starts conversations. That doesn&apos;t come from a
                content calendar alone. It comes from treating Google,
                reviews and outreach as seriously as the Instagram feed.
              </p>
              <p className="font-medium text-ink">
                Social Catalyst was built to do that work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="rounded-2xl border border-line bg-cream p-8 sm:p-10">
              <p
                className="text-[1.6rem] leading-snug text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t just make your feed look busy. We make you{" "}
                <span className="text-brand">easy to find</span>{" "}
                and easy to do business with.&rdquo;
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-dashed border-line pt-6">
                {/* the name is right beside this, so the photo is decorative
                    here and the fallback disc stays out of the a11y tree */}
                <Avatar
                  src="https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/694e751734d7a4afc68e2e60_Rizwan%20founder.webp"
                  name={TEAM[0]?.name ?? "The Social Catalyst team"}
                  initials="S"
                  size={64}
                  captioned
                  objectPosition="50% 20%"
                />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    The Social Catalyst team
                  </span>
                  <span className="block text-xs text-muted">
                    Your B2B marketing partners
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* team - renders nothing at all while TEAM is empty, so the page is
          never left with a heading over whitespace */}
      {TEAM.length > 0 && (
        <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">The team</span>
              <h2 className="text-h2 mt-5">
                The people who will actually be running your account.
              </h2>
              <p className="lead mt-5">
                Not an account manager who forwards your emails to someone else.
                You will know who is posting, who is answering your reviews, and
                who to call when something needs changing.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={(i % 3) * 0.08}>
                  <Photo
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Social Catalyst`}
                    ratio="1/1"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    className="w-full rounded-2xl bg-cream ring-1 ring-line"
                    fallback={
                      <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-cream ring-1 ring-line">
                        <Avatar
                          name={m.name}
                          initials={m.initials}
                          accent={m.accent}
                          size={72}
                          captioned
                        />
                      </div>
                    }
                  />
                  <h3 className="text-h3 mt-5">{m.name}</h3>
                  <p className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-brand">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-slate">
                    {m.bio}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Stats />

      {/* values - editorial 2-col, dashed dividers, no glossy tiles */}
      <section className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-h2">Principles that shape every business we run.</h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={(i % 2) * 0.1}
                className={`${i % 2 === 1 ? "sm:border-l sm:border-dashed sm:border-line sm:pl-12" : ""} ${i >= 2 ? "border-t border-dashed border-line pt-10 sm:border-t-0 sm:pt-0" : ""}`}
              >
                <Icon name={v.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
                <h3 className="text-h3 mt-4">{v.title}</h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to stop looking inactive"
        subtitle="Get a quote. Thirty minutes, free, and we'll tell you honestly which package fits your business, even if it's the cheapest one."
      />
    </>
  );
}
