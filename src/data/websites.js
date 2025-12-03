// data/websites.js
import {
  yacht,
  yacht1,
  pcyr2,
  sugar,
  linarex,
  jammusik,
  web10,
  web11,
} from '@/assets/img/webs';

/**
 * Website factory function
 * @param {Object} config - Website configuration
 * @returns {Object} Website object
 */
const createWebsite = ({ id, title, cardImage, projectLinks }) => ({
  id,
  category: 'Websites',
  title,
  CardImage: cardImage,
  projectLinks,
});

/**
 * All websites data
 */
export const websites = [
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
    projectLinks: 'https://dribbble.com/shots/17873845-The-sugar-brown-beauty-store',
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
];

/**
 * Get website by ID
 * @param {number} id - Website ID
 * @returns {Object|undefined} Website object or undefined
 */
export const getWebsiteById = (id) => {
  return websites.find((website) => website.id === id);
};

/**
 * Get total count of websites
 * @returns {number} Total number of websites
 */
export const getWebsitesCount = () => websites.length;
