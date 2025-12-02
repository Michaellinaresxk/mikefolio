// data/uiDesigns.js
import {
  web12,
  UI4,
  UI6,
  web33,
  appUi1,
  appUi2,
  web1,
  web2,
  web3,
  web9,
  web13,
  web15,
  web16,
} from '@/assets/img/webs';

/**
 * UI Design factory function
 * @param {Object} config - UI Design configuration
 * @returns {Object} UI Design object
 */
const createUIDesign = ({ id, title, cardImage, projectLinks }) => ({
  id,
  category: 'UI Designs',
  title,
  CardImage: cardImage,
  projectLinks,
});

/**
 * All UI designs data
 */
export const uiDesigns = [
  createUIDesign({
    id: 1,
    title: 'Let the adventure begin',
    cardImage: UI6,
    projectLinks: 'https://dribbble.com/shots/17866659-Let-the-adventure-begin',
  }),

  createUIDesign({
    id: 2,
    title: 'Spiderman Website',
    cardImage: web2,
    projectLinks: 'https://dribbble.com/shots/17863637-Spiderman-4-website',
  }),

  createUIDesign({
    id: 3,
    title: 'XK-Bike',
    cardImage: web3,
    projectLinks: 'https://dribbble.com/shots/18241241-Xk-Bike',
  }),

  createUIDesign({
    id: 4,
    title: 'Portfolio Web Dev',
    cardImage: web9,
    projectLinks: 'https://dribbble.com/shots/18069549-Web-Designer-portfolio',
  }),

  createUIDesign({
    id: 5,
    title: '3D Portfolio',
    cardImage: UI4,
    projectLinks: 'https://dribbble.com/shots/18069523-3D-Portfolio-for-web-developer',
  }),

  createUIDesign({
    id: 6,
    title: 'McLaren Elva',
    cardImage: web13,
    projectLinks: 'https://dribbble.com/shots/17863682-McLaren-Elva-presentation-website',
  }),

  createUIDesign({
    id: 7,
    title: 'Web Dev Portfolio',
    cardImage: web15,
    projectLinks: 'https://dribbble.com/shots/17866509-Developer-portfolio',
  }),

  createUIDesign({
    id: 8,
    title: 'XK-Beats',
    cardImage: web1,
    projectLinks: 'https://dribbble.com/shots/18433748-XK-Beats',
  }),

  createUIDesign({
    id: 9,
    title: 'Walk with DC',
    cardImage: web12,
    projectLinks: 'https://dribbble.com/shots/17866667-New-way-to-walk-with-DC',
  }),

  createUIDesign({
    id: 10,
    title: 'Web Dev Portfolio',
    cardImage: web16,
    projectLinks: 'https://dribbble.com/shots/17873129-Web-developer-portfolio',
  }),

  createUIDesign({
    id: 11,
    title: 'Nature UI',
    cardImage: web33,
    projectLinks: 'https://dribbble.com/shots/18433793-Nature-web-design',
  }),

  createUIDesign({
    id: 12,
    title: 'Guitar instructor locator',
    cardImage: appUi1,
    projectLinks: 'https://dribbble.com/shots/18239915-Guitar-instructor-locator-app',
  }),

  createUIDesign({
    id: 13,
    title: 'Trekking App',
    cardImage: appUi2,
    projectLinks: 'https://dribbble.com/shots/20039475-Trekking-App',
  }),
];

/**
 * Get UI design by ID
 * @param {number} id - UI Design ID
 * @returns {Object|undefined} UI Design object or undefined
 */
export const getUIDesignById = (id) => {
  return uiDesigns.find((design) => design.id === id);
};

/**
 * Get total count of UI designs
 * @returns {number} Total number of UI designs
 */
export const getUIDesignsCount = () => uiDesigns.length;

/**
 * Check if a design is from Dribbble
 * @param {Object} design - UI Design object
 * @returns {boolean} True if hosted on Dribbble
 */
export const isDribbbleDesign = (design) => {
  return design.projectLinks.includes('dribbble.com');
};