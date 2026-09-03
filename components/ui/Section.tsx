type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** vertical rhythm */
  pad?: "default" | "tight";
};

export function Section({
  id,
  children,
  className = "",
  pad = "default",
}: SectionProps) {
  const padding = pad === "tight" ? "py-16 sm:py-20" : "py-20 sm:py-24 lg:py-32";
  return (
    <section id={id} className={`${padding} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  align = "center",
  className = "",
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <h2 className="text-h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}
