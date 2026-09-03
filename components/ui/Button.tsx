import Link from "next/link";
import { Icon } from "@/components/Icons";

type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

// Flat, square-ish buttons - HubSpot style. No gradients, no glow.
const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-ink ring-1 ring-ink/20 hover:ring-ink/45",
  dark: "bg-ink text-white hover:bg-ink-soft",
  light: "bg-transparent text-white ring-1 ring-white/45 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
}: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {inner}
    </button>
  );
}
