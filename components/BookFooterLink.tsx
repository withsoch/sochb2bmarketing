import { BOOKING_URL } from "@/lib/content";

export function BookFooterLink() {
  return (
    <li>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        Get a quote
      </a>
    </li>
  );
}
