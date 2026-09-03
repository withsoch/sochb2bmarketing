import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icons";
import { NAV, SERVICE_CATEGORIES, SITE } from "@/lib/content";
import { AuditFooterLink } from "@/components/AuditFooterLink";
import { BookFooterLink } from "@/components/BookFooterLink";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-x">
        {/* link columns */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.85fr_1.15fr_1fr]">
          <div className="max-w-xs">
            <Logo variant="light" imgClassName="h-8 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {SITE.tagline}
            </p>
          </div>

          <FooterCol title="Company">
            {NAV.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICE_CATEGORIES.map((c) => (
              <FooterLink key={c.slug} href={`/services#${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Get started">
            <BookFooterLink />
            <AuditFooterLink />
            <FooterLink href={`mailto:${SITE.email}`}>{SITE.email}</FooterLink>
          </FooterCol>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-end gap-4 border-t border-white/10 py-4 text-sm sm:flex-row">
          <div className="flex items-center gap-3">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soch on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="social" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-3 flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        {children}
      </Link>
    </li>
  );
}
