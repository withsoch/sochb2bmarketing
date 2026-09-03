export function PageHero({
  title,
  intro,
  children,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-display text-[clamp(2.5rem,1.5rem+3.2vw,3.9rem)]">
            {title}
          </h1>
          {intro && <p className="lead mt-6 max-w-2xl">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
