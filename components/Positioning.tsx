import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/Icons";

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "pin",
    title: "Someone searches for what you do, and a competitor shows up first",
    body: "Meanwhile your Google listing is half-filled and hasn't been touched in months. We claim it, fill it out properly, and answer every review within 24 hours, so the next person searching actually finds you.",
  },
  {
    icon: "image",
    title: "You posted an update. Six people liked it.",
    body: "Out of 340 followers. A feed that goes quiet for a week reads as a business that's gone quiet too. We keep Instagram, LinkedIn and Facebook posting on a real schedule, in Estonian and English, so it doesn't.",
  },
  {
    icon: "chat",
    title: "Your last ten clients all came from referrals, and this month nobody referred you",
    body: "Your LinkedIn hasn't posted in two months and nobody's sending messages on your behalf. We build the presence and the outreach, so new conversations start even when referrals don't.",
  },
];

export function Positioning() {
  // Flat peach surface, the design system deliberately has no gradients.
  return (
    <section className="bg-peach py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <h2 className="text-h2">
            Your buyers already decided who to trust, and it&apos;s not always you!
          </h2>
          <p className="lead mt-5">
            They decided on Google, on Instagram, on LinkedIn, before they
            ever spoke to you. We run the profile, the content and the
            outreach on those channels, so your business looks active,
            credible and worth choosing.
          </p>
        </Reveal>

        {/* pillars as an editorial row, divided by hairlines, not boxes */}
        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-ink/15 pt-12 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={i > 0 ? "md:border-l md:border-dashed md:border-ink/15 md:pl-10" : ""}
            >
              <Icon name={p.icon} className="h-7 w-7 text-brand" strokeWidth={1.5} />
              <h3 className="text-h3 mt-4">{p.title}</h3>
              <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
