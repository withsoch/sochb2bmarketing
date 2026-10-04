"use client";

import { useEffect } from "react";
import { useAuditModal } from "@/context/AuditModalContext";
import { BOOKING_URL } from "@/lib/content";
import { openBooking, preloadBooking } from "@/lib/cal";

export function BookAutoOpen() {
  const { openModal: openAuditModal } = useAuditModal();

  // Fetch Cal.com's embed script once the page is idle, so the first
  // "Get a quote" click opens the scheduler without a wait.
  useEffect(() => {
    // Safari has no requestIdleCallback.
    if (typeof window.requestIdleCallback !== "function") {
      const id = setTimeout(preloadBooking, 2000);
      return () => clearTimeout(id);
    }
    const id = window.requestIdleCallback(preloadBooking, { timeout: 4000 });
    return () => window.cancelIdleCallback(id);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("book") === "true") {
      if (!openBooking()) window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
      const url = new URL(window.location.href);
      url.searchParams.delete("book");
      window.history.replaceState({}, "", url.pathname);
    }

    if (params.get("audit") === "true") {
      openAuditModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("audit");
      window.history.replaceState({}, "", url.pathname);
    }
  }, [openAuditModal]);

  return null;
}
