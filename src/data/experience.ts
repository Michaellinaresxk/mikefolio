/**
 * /data/experience.ts
 *
 * FIX #9 — Datos de experiencia separados del componente.
 * Para agregar un nuevo trabajo, solo tocas este archivo.
 */

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'MONTREAL',
    period: 'Feb 2024 – Apr 2026',
    location: 'Remote',
  },
  {
    title: 'Full Stack Developer',
    company: 'EFS-INNOVATION',
    period: 'Oct 2022 – Jan 2024',
    location: 'Remote',
  },
  {
    title: 'Freelance Frontend Developer',
    company: 'PCYR Tech Solutions',
    period: 'Jan 2019 – Jan 2022',
    location: 'Hybrid',
  },
];
