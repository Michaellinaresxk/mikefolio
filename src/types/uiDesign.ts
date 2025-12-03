// types/uiDesign.ts
import { StaticImageData } from 'next/image';

export interface UIDesign {
  id: number;
  category: 'UI Designs';
  title: string;
  CardImage: StaticImageData;
  projectLinks: string;
}

export interface UIDesignConfig {
  id: number;
  title: string;
  cardImage: StaticImageData;
  projectLinks: string;
}
