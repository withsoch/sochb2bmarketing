import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-line bg-white py-8 sm:py-10">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`px-5 text-center ${
                i !== 0 ? "lg:border-l lg:border-dashed lg:border-line" : ""
              }`}
            >
              <p
                className="text-[2.75rem] leading-none text-ink sm:text-[3.25rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {s.value}
              </p>
              <p className="mx-auto mt-3 max-w-[12rem] text-sm text-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
