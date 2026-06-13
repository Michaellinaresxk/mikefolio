/**
 * components/PageHead.tsx
 *
 * Componente reutilizable que genera todos los meta tags de SEO
 * para cada página. Úsalo en cada page con los props correspondientes.
 *
 * INCLUYE:
 * - <title>
 * - meta description
 * - Open Graph (WhatsApp, Facebook, LinkedIn, iMessage)
 * - Twitter Card (X)
 * - canonical URL
 * - JSON-LD structured data (opcional, solo en home)
 *
 * USO:
 *   <PageHead
 *     title="Projects"
 *     description="Explore all my web projects and UI designs"
 *     path="/projects"
 *   />
 */

import Head from 'next/head';
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  structuredDataPerson,
} from '@/lib/seo';

interface PageHeadProps {
  /** Page-specific title. Gets appended with " | Site Name" */
  title: string;
  /** Page-specific description. Falls back to site description. */
  description?: string;
  /** Relative path, e.g. "/projects". Used for canonical + og:url */
  path?: string;
  /** Custom OG image URL (absolute). Falls back to default og-image.jpg */
  ogImage?: string;
  /** Include JSON-LD Person schema. Only set true on the home page. */
  includeStructuredData?: boolean;
}

export default function PageHead({
  title,
  description = SITE_DESCRIPTION,
  path = '',
  ogImage = OG_IMAGE,
  includeStructuredData = false,
}: PageHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Head>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonicalUrl} />

      {/* ── Open Graph ── WhatsApp, Facebook, LinkedIn, iMessage, Telegram */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content={String(OG_IMAGE_WIDTH)} />
      <meta property='og:image:height' content={String(OG_IMAGE_HEIGHT)} />
      <meta property='og:image:alt' content={`${title} — ${SITE_NAME}`} />
      <meta property='og:locale' content='en_US' />

      {/* ── Twitter / X Card ── */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />

      {/* ── JSON-LD Structured Data (home only) ── */}
      {includeStructuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataPerson),
          }}
        />
      )}
    </Head>
  );
}
