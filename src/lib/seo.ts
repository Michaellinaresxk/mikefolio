/**
 * /lib/seo.ts
 *
 * Datos SEO centralizados. Todos los campos de og: y twitter:
 * en un solo lugar — si cambias la URL del sitio, cambias aquí.
 *
 * USO en cada página:
 *   import { baseSeo, pageSeo } from '@/lib/seo';
 *   // en el JSX:
 *   <Head>
 *     {...pageSeo('Projects', 'Explore all my projects')}
 *   </Head>
 */

export const SITE_URL = 'https://mikefolio-kappa.vercel.app';
export const SITE_NAME = 'Michael Linares — Frontend Developer';
export const SITE_DESCRIPTION =
  'Portfolio of Michael Linares, Frontend Developer & Web Designer specializing in React, Next.js and interactive digital experiences.';

/**
 * La imagen OG es la que aparece en WhatsApp, iMessage, Twitter, LinkedIn, etc.
 * Debe ser:
 *  - 1200×630 px (ratio 1.91:1) — estándar Open Graph
 *  - Menos de 8 MB
 *  - URL absoluta
 *
 * Crea el archivo en /public/og-image.jpg
 * Recomendación: screenshot de tu hero en desktop, con tu nombre y título encima.
 */
export const OG_IMAGE = `${SITE_URL}/og-image-v2.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Datos estructurados JSON-LD — Person schema para Google */
export const structuredDataPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michael Linares',
  url: SITE_URL,
  jobTitle: 'Frontend Developer & Web Designer',
  sameAs: [
    'https://github.com/Michaellinaresxk',
    'https://www.linkedin.com/in/michael-linares-abreu/',
    'https://dribbble.com/michaelxk',
    'https://www.youtube.com/c/XkWeb',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Web Design',
    'Frontend Development',
  ],
};

/** Genera los props de <Head> para cada página */
export function pageSeo(
  pageTitle: string,
  pageDescription?: string,
  pageUrl?: string,
  pageImage?: string,
) {
  const title = `${pageTitle} | ${SITE_NAME}`;
  const description = pageDescription ?? SITE_DESCRIPTION;
  const url = pageUrl ? `${SITE_URL}${pageUrl}` : SITE_URL;
  const image = pageImage ?? OG_IMAGE;

  return { title, description, url, image };
}
