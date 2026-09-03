"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

/**
 * Accordion used on /audit and /confirmation. One panel open at a time.
 * The open/close transition animates `grid-template-rows` from 0fr to 1fr so
 * the panel can size to its own content without a hardcoded max-height.
 */
export function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  // useId() emits characters that aren't valid in a CSS identifier, which
  // breaks querySelector/CSS targeting of the panels. Strip them.
  const id = `faq${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`${id}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`text-[1.02rem] font-medium transition-colors ${
                    isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen
                      ? "border-brand bg-brand text-white"
                      : "border-line text-ink-soft group-hover:border-ink/30"
                  }`}
                >
                  {/* horizontal bar stays, vertical bar collapses into a minus */}
                  <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
                  <span
                    className={`absolute h-3 w-[1.5px] rounded-full bg-current transition-transform duration-300 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                    style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
                  />
                </span>
              </button>
            </h3>

            <div
              id={`${id}-panel-${i}`}
              role="region"
              aria-labelledby={`${id}-btn-${i}`}
              className="grid transition-[grid-template-rows] duration-300"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transitionTimingFunction: "var(--ease-out-soft)",
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-10 text-[0.95rem] leading-relaxed text-slate">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
