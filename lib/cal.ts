// ------------------------------------------------------------------
//  Cal.com popup for every "Get a quote" button.
//
//  BOOKING_URL stays the single source of truth. When it points at Cal.com,
//  booking buttons open Cal's own scheduling modal over the page instead of a
//  new tab. Any other scheduler (Calendly, TidyCal...) keeps opening in a new
//  tab, and so does a booking link clicked before JavaScript has run.
// ------------------------------------------------------------------

import { BOOKING_URL } from "@/lib/content";

const CAL_HOSTS = new Set(["cal.com", "www.cal.com", "app.cal.com"]);
const CAL_ORIGIN = "https://app.cal.com";
const EMBED_SRC = `${CAL_ORIGIN}/embed/embed.js`;
const NAMESPACE = "quote";

/** "team/event" from a Cal.com booking URL, or null for any other scheduler. */
function calLinkFrom(url: string): string | null {
  try {
    const u = new URL(url);
    if (!CAL_HOSTS.has(u.hostname)) return null;
    const path = u.pathname.replace(/^\/+|\/+$/g, "");
    return path ? `${path}${u.search}` : null;
  } catch {
    return null;
  }
}

const CAL_LINK = calLinkFrom(BOOKING_URL);

type CalApi = ((...args: unknown[]) => void) & {
  q?: unknown[][];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/** embed.js load state. Clicks only turn into a modal while it can still load. */
let script: "loading" | "ready" | "failed" = "loading";
/** A click arrived before embed.js did: if the script then fails, open the link instead. */
let fallbackPending = false;

function openLink() {
  window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
}

function loadEmbed() {
  const el = document.createElement("script");
  el.src = EMBED_SRC;
  el.async = true;
  el.onload = () => {
    script = "ready";
    fallbackPending = false;
  };
  // Blocked or offline: booking buttons go back to being plain links.
  el.onerror = () => {
    script = "failed";
    if (fallbackPending) openLink();
    fallbackPending = false;
  };
  document.head.appendChild(el);
}

/**
 * Cal.com's embed snippet, typed. Calls made before embed.js arrives are
 * queued and replayed once it loads, so a click never has to wait on the
 * script before it registers.
 */
function installCal(): CalApi {
  if (window.Cal) return window.Cal;
  const push = (api: CalApi, args: unknown[]) => {
    (api.q ??= []).push(args);
  };
  const cal: CalApi = (...args: unknown[]) => {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q ??= [];
      loadEmbed();
      cal.loaded = true;
    }
    if (args[0] === "init" && typeof args[1] === "string") {
      const namespace = args[1];
      const api: CalApi = (...a: unknown[]) => push(api, a);
      api.q = [];
      cal.ns![namespace] ??= api;
      push(cal.ns![namespace], args);
      push(cal, ["initNamespace", namespace]);
      return;
    }
    push(cal, args);
  };
  window.Cal = cal;
  return cal;
}

/** The namespaced Cal API, set up on first use. Null when booking isn't on Cal.com. */
function calApi(): CalApi | null {
  if (!CAL_LINK || typeof window === "undefined") return null;
  const cal = installCal();
  if (!cal.ns?.[NAMESPACE]) {
    cal("init", NAMESPACE, { origin: CAL_ORIGIN });
    cal.ns![NAMESPACE]("ui", {
      theme: "light",
      layout: "month_view",
      hideEventTypeDetails: false,
      // Ink, the same as the site's dark buttons. Brand orange would need
      // ink text to pass contrast, and Cal sets its own button text colour.
      cssVarsPerTheme: { light: { "cal-brand": "#1c2b26" } },
    });
  }
  return cal.ns![NAMESPACE];
}

/** Fetch embed.js ahead of the first click. Safe to call more than once. */
export function preloadBooking() {
  calApi();
}

/**
 * Open the booking modal. Returns false when it can't (booking isn't on
 * Cal.com, or embed.js was blocked), so the caller can fall back to the
 * plain link.
 */
export function openBooking(): boolean {
  if (script === "failed") return false;
  const api = calApi();
  if (!api) return false;
  if (script === "loading") fallbackPending = true;
  api("modal", { calLink: CAL_LINK, config: { layout: "month_view" } });
  return true;
}

/**
 * onClick for a booking <a>. Opens the modal in place of the link, except
 * for clicks that ask for a new tab (cmd/ctrl/shift/middle click).
 */
export function handleBookingClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (openBooking()) e.preventDefault();
}
