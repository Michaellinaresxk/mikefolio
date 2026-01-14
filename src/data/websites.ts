// data/websites.ts
import {
  yacht,
  yacht1,
  pcyr2,
  sugar,
  linarex,
  jammusik,
  web10,
  web11,
  afrodita,
} from '@/assets/img/webs';
import { Website, WebsiteConfig } from '@/types/website';

/**
 * Website factory function
 */
const createWebsite = ({
  id,
  title,
  cardImage,
  projectLinks,
}: WebsiteConfig): Website => ({
  id,
  category: 'Websites' as const,
  title,
  CardImage: cardImage,
  projectLinks,
});

/**
 * All websites data
 */
export const websites: readonly Website[] = [
  createWebsite({
    id: 1,
    title: 'PCYR',
    cardImage: yacht,
    projectLinks: 'https://puntacanayachtrentals.com/',
  }),

  createWebsite({
    id: 2,
    title: 'Linarex Press Kit',
    cardImage: linarex,
    projectLinks: 'https://linares-press-kit.vercel.app/',
  }),

  createWebsite({
    id: 3,
    title: 'Jammusik',
    cardImage: jammusik,
    projectLinks: 'https://jammusik.com/',
  }),

  createWebsite({
    id: 4,
    title: 'The sugar brown web',
    cardImage: sugar,
    projectLinks:
      'https://dribbble.com/shots/17873845-The-sugar-brown-beauty-store',
  }),

  createWebsite({
    id: 5,
    title: 'Puntacana Yachts Rentals',
    cardImage: pcyr2,
    projectLinks: 'https://puntacanayachtrentals.com',
  }),

  createWebsite({
    id: 6,
    title: 'Yacht Charter',
    cardImage: yacht1,
    projectLinks: 'https://puntacanayachtcharters.com/',
  }),

  createWebsite({
    id: 7,
    title: 'XKhealth',
    cardImage: web10,
    projectLinks: 'https://gorgeous-bavarois-9214b4.netlify.app/',
  }),

  createWebsite({
    id: 8,
    title: 'XK-Drums',
    cardImage: web11,
    projectLinks: 'https://agitated-chandrasekhar-78e608.netlify.app/',
  }),
  createWebsite({
    id: 8,
    title: 'Afrodita Beauty Store',
    cardImage: afrodita,
    projectLinks: 'https://afrodita-flame.vercel.app/',
  }),
];

/**
 * Get website by ID
 */
export const getWebsiteById = (id: number): Website | undefined => {
  return websites.find((website) => website.id === id);
};

/**
 * Get total count of websites
 */
export const getWebsitesCount = (): number => websites.length;
