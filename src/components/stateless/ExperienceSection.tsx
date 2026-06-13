'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { EXPERIENCES, type Experience } from '@/data/experience';

/**
 * FIX #9 — Datos movidos a /data/experience.ts
 * FIX #12 — useReducedMotion: si el usuario tiene
 *   "Reduce motion" activo en su sistema, las animaciones
 *   se desactivan completamente.
 */

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className='border-b border-gray-700 pb-6 sm:pb-8 last:border-b-0'
      initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4'>
        <div className='flex-1'>
          <h3
            className='font-bold text-white mb-1'
            style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)' }}
          >
            {experience.title}
          </h3>
          <p className='text-sm sm:text-base text-orange-400 font-medium'>
            {experience.company}
          </p>
        </div>
        <div className='flex-shrink-0 sm:text-right'>
          <p className='text-sm sm:text-base text-gray-400'>
            {experience.period}
          </p>
          <p className='text-sm text-gray-500'>{experience.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface ExperienceSectionProps {
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
}

export const ExperienceSection = ({
  imageSrc,
  imagePosition = 'left',
}: ExperienceSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const ContentColumn = (
    <motion.div
      className='flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16'
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: imagePosition === 'left' ? 20 : -20 }
      }
      whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className='max-w-2xl w-full space-y-6 sm:space-y-8'>
        <h2
          className='font-bold text-white'
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Experience{' '}
          <span className='font-normal text-orange-500'>History</span>
        </h2>

        <div className='space-y-4 sm:space-y-6'>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem
              key={`${exp.company}-${i}`}
              experience={exp}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  /*
    FIX #7 — Si no se pasa imageSrc, no renderizamos la columna de imagen
    (evita el 404 silencioso con /portrait.jpg que no existe en /public).
  */
  const ImageColumn = imageSrc ? (
    <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden'>
      <Image
        src={imageSrc}
        alt='Experience section'
        fill
        className='object-cover object-center'
        sizes='(max-width: 768px) 100vw, 50vw'
      />
    </div>
  ) : null;

  return (
    <section
      className={`grid gap-0 ${ImageColumn ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} min-h-0 lg:min-h-screen`}
      aria-labelledby='experience-heading'
    >
      {imagePosition === 'left' ? (
        <>
          {ImageColumn}
          {ContentColumn}
        </>
      ) : (
        <>
          {ContentColumn}
          {ImageColumn}
        </>
      )}
    </section>
  );
};
