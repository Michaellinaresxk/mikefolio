This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact Form Anti-Spam Protection

The portfolio contact form (`/api/contact`) is protected by **three layers** of defense to block automated bot submissions (random text spam like `asldkfjas;ldkfja`).

### Layers of defense

1. **Honeypot field** — A hidden `website` input is rendered off-screen with `tabIndex={-1}`. Humans never see it; bots that auto-fill every field will populate it. When the API detects a non-empty honeypot, it returns a fake `200 OK` so bots don't learn they were caught.
2. **Rate limit** — Best-effort in-memory limiter: max **3 submissions per IP per 10 minutes**. Returns `429` with a `Retry-After` header when exceeded.
3. **Cloudflare Turnstile** — Invisible CAPTCHA verified server-side via `https://challenges.cloudflare.com/turnstile/v0/siteverify`. The submit button stays disabled until a valid token is produced. Free, privacy-friendly, no user tracking.

### File map

| File | Purpose |
| --- | --- |
| [src/components/stateless/ContactForm.tsx](src/components/stateless/ContactForm.tsx) | Form UI with hidden honeypot + Turnstile widget |
| [src/pages/api/contact.ts](src/pages/api/contact.ts) | API handler: rate limit → honeypot check → Turnstile verify → send email |
| [src/lib/validation/contact.schema.ts](src/lib/validation/contact.schema.ts) | Zod schema (includes `website` honeypot + `turnstileToken`) |
| [src/lib/security/rate-limit.ts](src/lib/security/rate-limit.ts) | In-memory IP rate limiter |
| [src/lib/security/turnstile.ts](src/lib/security/turnstile.ts) | Server-side Turnstile token verification |

### Environment variables

See [.env.example](.env.example). Required keys:

```bash
# Resend (email delivery)
RESEND_API_KEY=re_xxxxxxxx
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=you@example.com

# Cloudflare Turnstile (anti-bot)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0xAAAA...   # public, exposed to browser
TURNSTILE_SECRET_KEY=0xBBBB...              # private, server-only
```

### Setting up Cloudflare Turnstile (one-time, ~5 min)

1. Go to [Cloudflare dashboard](https://dash.cloudflare.com) → **Turnstile** → **Add site**
2. Add your hostname(s): production domain + `localhost` for development
3. Widget mode: **Managed** (invisible most of the time, only challenges suspicious traffic)
4. Copy the **Site Key** and **Secret Key** into `.env.local` and Vercel project env vars
5. Redeploy on Vercel — `NEXT_PUBLIC_*` variables are only read at build time

### Known limitation: rate limit is in-memory

The rate limiter uses an in-process `Map`, so on Vercel serverless:

- Each Function instance has its own counter
- Counters reset on cold starts
- Limits are not shared across regions

This is **best-effort** — it stops bursts from a single warm instance but won't catch distributed abuse. If spam volume justifies it, migrate to **Vercel KV** or **Upstash Redis** for cross-instance limits.

### Local testing

```bash
# 1. Install deps
npm install

# 2. Copy env template and fill in real keys
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

To verify protection:

- Submit the form normally → should succeed
- Open DevTools and fill the hidden `website` input via JS → API should return fake success but no email arrives (check server logs for `🍯 Honeypot triggered`)
- Submit 4× in 10 min → 4th submission should return `429`
