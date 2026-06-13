'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCES, type Experience } from '@/data/experience';

const ROLE_HIGHLIGHTS: Record<string, string[]> = {
  MONTREAL: [
    'Vue 2 → Vue 3 migration — bundle size −25%',
    'Frontend owner of REST API integration across teams',
    'Design-to-code bridge between engineering and design',
  ],
  'EFS-INNOVATION': [
    'Vue.js / Nuxt component library across 3+ enterprise apps',
    'Jest baseline — regressions caught before production',
    'Figma → pixel-accurate handoff ownership',
  ],
  'PCYR Tech Solutions': [
    'Sole frontend owner across full delivery lifecycle',
    '3–4 active client projects simultaneously',
    'E-commerce sites, landing pages, and web apps',
  ],
};

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const ExperienceItem = ({ experience, index, isLast }: ExperienceItemProps) => {
  const shouldReduceMotion = useReducedMotion();
  const highlights = ROLE_HIGHLIGHTS[experience.company] ?? [];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      className='relative flex gap-6 sm:gap-8'
    >
      {/* ── Timeline spine ── */}
      <div className='flex flex-col items-center flex-shrink-0'>
        {/* Dot */}
        <div className='relative flex items-center justify-center w-9 h-9 rounded-full bg-black border-2 border-orange-500/60 z-10'>
          <div className='w-2.5 h-2.5 rounded-full bg-orange-500' />
        </div>
        {/* Vertical line */}
        {!isLast && <div className='flex-1 w-px bg-white/[0.08] mt-2 mb-0' />}
      </div>

      {/* ── Content ── */}
      <div className={`pb-12 ${isLast ? 'pb-0' : ''} flex-1 pt-1`}>
        {/* Period badge */}
        <span className='inline-block text-[11px] font-semibold tracking-widest uppercase text-orange-500/70 mb-2'>
          {experience.period}
        </span>

        {/* Role + company */}
        <h3 className='font-bold text-white text-base sm:text-xl leading-snug mb-0.5'>
          {experience.title}
        </h3>
        <p className='text-sm text-white/40 mb-4'>
          {experience.company} · {experience.location}
        </p>

        {/* Bullets */}
        {highlights.length > 0 && (
          <ul className='space-y-2'>
            {highlights.map((h, i) => (
              <li key={i} className='flex items-start gap-2.5'>
                <span className='mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-orange-500/50' />
                <span className='text-xs sm:text-sm text-white/45 leading-relaxed'>
                  {h}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className='relative bg-black py-20 sm:py-28 overflow-hidden'
      aria-labelledby='experience-heading'
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]'>
        {/* ── Left: portrait ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='relative hidden lg:block'
        >
          <img
            src='/portrait.jpg'
            alt='Michael Linares'
            className='w-full h-full object-cover object-center'
          />
          {/* Fade right so it blends into the dark content side */}
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80' />
          {/* Fade bottom */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
        </motion.div>

        {/* ── Right: header + timeline ── */}
        <div className='px-6 sm:px-10 lg:px-14 py-4 lg:py-0 flex flex-col justify-center'>
          {/* Header */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className='mb-12'
          >
            <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
              Experience
            </p>
            <h2
              id='experience-heading'
              className='font-bold text-white'
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Where I&apos;ve{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                shipped
              </span>
            </h2>
            <p className='text-white/35 mt-3 text-sm sm:text-base max-w-md'>
              6+ years across remote teams, enterprise products, and client
              projects.
            </p>
          </motion.div>

          {/* Timeline */}
          <div>
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem
                key={`${exp.company}-${i}`}
                experience={exp}
                index={i}
                isLast={i === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
