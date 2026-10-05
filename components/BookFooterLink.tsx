"use client";

import { BOOKING_URL } from "@/lib/content";
import { handleBookingClick } from "@/lib/cal";

export function BookFooterLink() {
  return (
    <li>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBookingClick}
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        Get a quote
      </a>
    </li>
  );
}
