'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
}

const EXPERIENCES: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'EFS Innovation',
    period: 'October 2022 - June 2025',
    location: 'Remote',
  },
  {
    title: 'Web Designer',
    company: 'PCYR Punta Cana Yacht Rentals',
    period: 'January 2018 - March 2022',
    location: 'Hybrid',
  },
  // Agrega más experiencias aquí
];

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

interface ExperienceSectionProps {
  imageSrc?: string;
  imagePosition?: 'left' | 'right';
}

export const ExperienceSection = ({
  imageSrc = '/portrait.jpg',
  imagePosition = 'left',
}: ExperienceSectionProps) => {
  // Componente para la imagen
  const ImageColumn = (
    <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-full overflow-hidden'>
      <Image
        src={imageSrc}
        alt='Professional Experience'
        fill
        className='object-contain object-center'
        sizes='(max-width: 768px) 100vw, 50vw'
        priority={false}
      />
    </div>
  );

  // Componente para el contenido
  const ContentColumn = (
    <motion.div
      className='bg-dark-blue flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-full'
      initial={{ opacity: 0, x: imagePosition === 'left' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className='max-w-2xl w-full space-y-6 sm:space-y-8 md:space-y-10'>
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>
            Experience{' '}
            <span className='font-normal text-orange-500'>History</span>
          </h2>
        </motion.div>

        {/* Lista de experiencias */}
        <div className='space-y-4 sm:space-y-6'>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Renderizar grid responsivo
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen'>
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
