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

`lib/content.ts` contains placeholder testimonials and client logos, all clearly
labeled — replace them with real venue results before launch. The case studies
at `/case-studies` (linked from the main nav) are restaurant/café/shisha-lounge
illustrative examples, not real client results — replace them before launch.
The logo in `components/Logo.tsx` is a vector placeholder (no real brand artwork
exists yet) and can be swapped for real assets without touching any call sites.

## Project structure

```
app/                 # routes (App Router) - one folder per page
components/          # section components + components/ui primitives
lib/content.ts        # single source of copy, services, stats, nav, FAQs
context/              # audit modal state
```
