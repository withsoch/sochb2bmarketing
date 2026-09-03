import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { PlatformStrip } from "@/components/PlatformStrip";
import { Positioning } from "@/components/Positioning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PackagesPreview } from "@/components/PackagesPreview";
import { HowWeWork } from "@/components/HowWeWork";
import { Stats } from "@/components/Stats";
import { QuoteStrip } from "@/components/QuoteStrip";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Reveal><LogoMarquee /></Reveal> */}
      <Reveal><PlatformStrip /></Reveal>
      <Reveal><Positioning /></Reveal>
      <Reveal><ServicesGrid /></Reveal>
      <Reveal><PackagesPreview /></Reveal>
      <Reveal><HowWeWork /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><QuoteStrip /></Reveal>
      <section className="border-t border-line bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2">Common questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>
      <Reveal><CtaBand /></Reveal>
    </>
  );
}
