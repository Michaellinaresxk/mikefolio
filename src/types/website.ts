// types/website.ts
import { StaticImageData } from 'next/image';

export interface Website {
  id: number;
  category: 'Websites';
  title: string;
  CardImage: StaticImageData;
  projectLinks: string;
  // Agrega otras propiedades si las hay
}

export interface WebsiteConfig {
  id: number;
  title: string;
  cardImage: StaticImageData;
  projectLinks: string;
  category?: string;
}
