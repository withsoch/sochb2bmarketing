// Custom line-icon set (1.6 stroke, rounded), no emoji, no clip-art.
import type { SVGProps } from "react";

export type IconName =
  | "profile"
  | "pen"
  | "target"
  | "spark"
  | "compass"
  | "audit"
  | "trend"
  | "arrow"
  | "check"
  | "social"
  | "calendar"
  | "menu"
  | "close"
  | "shield"
  | "clock"
  | "chat"
  | "pin"
  | "star"
  | "image"
  | "bag"
  | "globe";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} className={className} aria-hidden="true" {...props}>
      {PATHS[name]}
    </svg>
  );
}

const PATHS: Record<IconName, React.ReactNode> = {
  profile: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </>
  ),
  pen: (
    <>
      <path d="M14.5 5.5l4 4" />
      <path d="M4 20l1-4L16 5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  audit: (
    <>
      <path d="M6 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M13 3.5V8.5h5" />
      <path d="M9 13.5l1.8 1.8L14.5 12" />
    </>
  ),
  trend: (
    <>
      <path d="M4 16l5-5 3 3 7-7" />
      <path d="M15 7h5v5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  social: (
    <>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <circle cx="12" cy="17" r="3" />
      <path d="M9.3 9.6l1.6 5.6M14.7 9.6l-1.6 5.6M9.6 7.4h4.8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  shield: (
    <>
      <path d="M12 3l7 2.5V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5L12 3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M4.5 6.5A1.5 1.5 0 0 1 6 5h12a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 18 16H9l-4 3v-3H6a1.5 1.5 0 0 1-1.5-1.5Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5S5 15.4 5 10a7 7 0 0 1 14 0c0 5.4-7 11.5-7 11.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: (
    <path
      d="M12 3.5l2.6 5.6 6 .7-4.4 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.4-4.2 6-.7L12 3.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  image: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="9" cy="10" r="1.7" />
      <path d="M4.5 16.5l4.7-4.7a1.5 1.5 0 0 1 2.1 0l2.4 2.4M14 14.1l1.1-1.1a1.5 1.5 0 0 1 2.1 0l2.3 2.3" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12.5H7L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" />
    </>
  ),
};
