# Soch - Website

Marketing site for **Soch**, a marketing agency for restaurants, cafes and
shisha lounges — Instagram, Google Business Profile, review management, AI
content, one-page websites, Wolt & Bolt Food listings, and paid ads. Piloting
in Tallinn, Estonia.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion.

## Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build (run build first)
npm run lint     # ESLint
```

## Configuration

Copy `.env.example` to `.env.local` and fill in the real values before launch:

- `NEXT_PUBLIC_BOOKING_URL` - Cal.com/Calendly link used by every "Get a quote"
  button (defaults to a placeholder Cal.com slug).
- `NEXT_PUBLIC_SCHEDULER_URL` - optional live scheduler embed for `/book` (falls back
  to a styled contact card when unset).
- `NEXT_PUBLIC_AUDIT_WEBHOOK_URL` - webhook the "Free Venue Audit" form posts to
  (falls back to a prefilled `mailto:` when unset).

## Placeholder content

`lib/content.ts` contains placeholder testimonials and client logos for
restaurants/cafes/shisha lounges, all clearly labeled — replace them with
real venue results before launch. The logo in `components/Logo.tsx` is a
vector placeholder (no real brand artwork exists yet) and can be swapped for
real assets without touching any call sites.

## Case studies

The 4 pages under `/case-studies` (linked from the main nav) are **real**
Signal House / Soch Catalyst client engagements (Gaia Ferrero/Byzantine,
Biola Babawale/Cycle Together, Shahzad Akhtar/Strateasy Consulting, Kaitlin
Malaspina/Brenna & Co.), reused here with internal sign-off — not restaurant
work, and not placeholders. Each is a standalone page under
`app/case-studies/<slug>/page.tsx` (not driven by `lib/content.ts`); the
`CASE_STUDIES` array in `lib/content.ts` only feeds the separate homepage
carousel (`components/Testimonials.tsx`) and must be kept in sync with those
pages if either changes.

**Known issue:** the Shahzad Akhtar and Kaitlin Malaspina photos are hotlinked
from LinkedIn's CDN with signed URLs that expire — they returned 403 as of
2026-09-04. Download and self-host both under `public/images/clients/` before
relying on those pages.

## Project structure

```
app/                       # routes (App Router) - one folder per page
app/case-studies/<slug>/   # standalone case-study pages, one per client (see above)
components/                # section components + components/ui primitives
lib/content.ts             # single source of copy, services, stats, nav, FAQs
context/                   # audit modal state
```

## Repository

Hosted at [github.com/withsoch/sochb2bmarketing](https://github.com/withsoch/sochb2bmarketing).
