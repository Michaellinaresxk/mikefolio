# Agent Guidelines for mikefolio

This document provides guidelines for AI agents working on the mikefolio codebase.

## Project Overview

mikefolio is a personal portfolio website built with Next.js 14, React 18, TypeScript, and Tailwind CSS. It showcases projects, skills, and includes a contact form with email integration via Resend.

## Build Commands

```bash
# Development
npm run dev          # Start Next.js dev server on http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint (extends Next.js core-web-vitals)
```

**Note:** This project does not have a test suite configured. Do not write tests unless explicitly requested.

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode enabled** in `tsconfig.json` - all type annotations must be explicit
- Path alias: `@/*` maps to `./src/*` (use `@/` for imports)
- JSX is preserved (`"jsx": "preserve"`) - use `.tsx` for React components

### File Naming Conventions

| File Type   | Convention             | Example                    |
| ----------- | ---------------------- | -------------------------- |
| Components  | PascalCase + .tsx      | `ContactForm.tsx`          |
| Pages       | kebab-case + .jsx/.tsx | `projectDetails.jsx`       |
| Utils/Hooks | camelCase + .ts        | `contact.schema.ts`        |
| Config      | camelCase + .js/.ts    | `motion.js`, `constans.js` |
| Types       | camelCase + .ts        | `website.ts`               |

### Directory Structure

```
src/
├── components/
│   └── stateless/     # React components (UI components)
├── pages/
│   ├── api/           # API routes (Next.js Pages Router)
│   └── *.tsx/.jsx     # Page components
├── lib/
│   ├── validation/    # Zod schemas and validation
│   └── security/      # Anti-spam helpers (rate limit, Turnstile verify)
├── types/             # TypeScript type definitions
├── data/              # Static data files
├── config/            # Configuration files
├── assets/            # Images, static files
├── styles/            # Global styles (globals.css)
└── constants/         # Constants
```

### Import Organization

Follow this order in TypeScript/React files:

1. React/Next imports (`'use client'`, `import { useState } from 'react'`)
2. Third-party imports (`import { useForm } from 'react-hook-form'`)
3. Path alias imports (`import { ContactFormData } from '@/lib/validation/contact.schema'`)
4. Relative imports (`import SocialMedia from './SocialMedia'`)

Example:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactFormData,
  contactFormSchema,
} from '@/lib/validation/contact.schema';
import SocialMedia from './SocialMedia';
```

### Component Patterns

- **Client Components**: Add `'use client'` at the top for any component using hooks (`useState`, `useEffect`, `useRef`) or browser APIs
- **Props**: Define interface for props using TypeScript
- **Export**: Use default export for page components, named exports for utilities

```tsx
// Example component structure
'use client';

import { useState } from 'react';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

const MyComponent = ({ title, onAction }: MyComponentProps) => {
  const [state, setState] = useState('');

  return <div>{title}</div>;
};

export default MyComponent;
```

### Tailwind CSS

- Use utility classes for all styling
- Custom colors: `orange-500` (primary accent)
- Use `white/` opacity modifiers (e.g., `white/10`, `white/80`)
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### Form Validation

- Use **Zod** for schema validation
- Use **react-hook-form** with `@hookform/resolvers/zod`
- Always validate both client-side and server-side

```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  // ...
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### Error Handling

- API routes: Return proper HTTP status codes (200, 400, 405, 500)
- Use try/catch with typed errors
- Log errors with meaningful messages

```typescript
try {
  // operation
} catch (error) {
  console.error('❌ Error description:', error);

  if (error instanceof z.ZodError) {
    return res
      .status(400)
      .json({ error: 'Invalid data', details: error.issues });
  }

  return res.status(500).json({ error: 'Internal server error' });
}
```

### Naming Conventions

- **Variables/functions**: camelCase
- **Components/Classes**: PascalCase
- **Constants**: camelCase or UPPER_SNAKE_CASE for true constants
- **Interfaces**: PascalCase with `Props` suffix for prop types
- **Types**: PascalCase

### Best Practices

1. **No console.log in production** - Use proper logging or remove
2. **Environment variables** - Never commit secrets; use `.env.local`
3. **Accessibility** - Include `alt` props on images, `htmlFor` on labels
4. **Performance** - Use `next/image` for images when possible
5. **Strict null checks** - Handle undefined/null explicitly

### ESLint

The project uses ESLint with `next/core-web-vitals` config. Run `npm run lint` before committing.

### Adding New Dependencies

Before adding new packages:

1. Check existing dependencies in `package.json`
2. Avoid duplicates (e.g., don't add `zod` if already present)
3. Ensure TypeScript types are available (check `@types/` packages)

### API Routes

- Location: `src/pages/api/`
- Use Next.js Pages Router API routes
- Return JSON responses with proper status codes
- Validate request method (`req.method`)

### Environment Variables

Required for contact form (see [.env.example](.env.example)):

- `RESEND_API_KEY` — Resend API key for sending emails
- `EMAIL_FROM` — Sender email address
- `EMAIL_TO` — Recipient email address
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (public, exposed to browser)
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile secret key (server-only)

> `NEXT_PUBLIC_*` variables are inlined at build time. After changing them on Vercel, you must redeploy.

## Contact Form Anti-Spam Architecture

The `/api/contact` endpoint uses **three layers** of defense against bot submissions. Agents touching the contact flow MUST preserve all three layers — removing any one weakens the system meaningfully.

### Layer 1: Honeypot

- Hidden `website` field rendered off-screen with `tabIndex={-1}` and `aria-hidden`
- Defined in the Zod schema as `z.string().max(0)` — must be empty
- On the server, a non-empty value triggers a **fake `200 OK` response** so the bot doesn't learn it was caught (do not change this behavior to a `400`/`403`)
- Implementation: [ContactForm.tsx](src/components/stateless/ContactForm.tsx), [contact.ts](src/pages/api/contact.ts)

### Layer 2: Rate limit

- In-memory IP-based limiter at [src/lib/security/rate-limit.ts](src/lib/security/rate-limit.ts)
- Defaults: **3 hits per IP per 10 minutes**
- Returns `429` with `Retry-After` header
- **Caveat**: in-memory state on Vercel serverless is per-instance and resets on cold starts. This is intentional for the current scale; if abuse increases, migrate to Vercel KV or Upstash Redis rather than tightening the in-memory limits

### Layer 3: Cloudflare Turnstile

- Invisible CAPTCHA, free, privacy-friendly (no user tracking)
- Frontend widget: `@marsidev/react-turnstile`, configured with `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- Submit button is disabled until a valid token is produced (`!turnstileToken`)
- Server verifies the token against `https://challenges.cloudflare.com/turnstile/v0/siteverify` using `TURNSTILE_SECRET_KEY`
- Implementation: [src/lib/security/turnstile.ts](src/lib/security/turnstile.ts)

### Order of checks in the API handler

The handler in [src/pages/api/contact.ts](src/pages/api/contact.ts) MUST execute checks in this order. Do not reorder without understanding why:

1. **Method check** (`POST` only)
2. **Rate limit** (cheapest — fail fast on abusive IPs before parsing body)
3. **Zod parse** (validates shape, lengths, honeypot is empty)
4. **Honeypot check** (fake-success short-circuit)
5. **Turnstile verify** (network call to Cloudflare — most expensive, runs last)
6. **Send email** via Resend

### When modifying the contact form

- Adding a new field → update the Zod schema, the form, AND the email template
- Changing rate limits → adjust `WINDOW_MS` / `MAX_HITS` constants in [rate-limit.ts](src/lib/security/rate-limit.ts), don't add ad-hoc checks in the handler
- Disabling Turnstile temporarily for testing → guard with an env flag, never delete the verify call
- The honeypot field name is `website`. Bots key off common field names; if you rename it, pick another plausible name (e.g., `url`, `homepage`) — not something obvious like `bot_check`
