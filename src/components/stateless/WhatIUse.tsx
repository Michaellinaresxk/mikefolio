import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { arrow } from '../../assets/img/index';

const technologiesWeb = [
  { name: 'JavaScript', id: 3 },
  { name: 'TypeScript', id: 14 },
  { name: 'React', id: 6 },
  { name: 'Next.js', id: 7 },
  { name: 'Vue.js', id: 4 },
  { name: 'Nuxt', id: 5 },
  { name: 'React Native', id: 15 },
  { name: 'Node.js', id: 8 },
  { name: 'GraphQL', id: 16 },
  { name: 'Jest', id: 12 },
  { name: 'TypeScript', id: 14 },
  { name: 'SCSS', id: 13 },
  { name: 'Figma', id: 10 },
  { name: 'Git', id: 9 },
  { name: 'HTML', id: 1 },
  { name: 'CSS', id: 2 },
  { name: 'Photoshop', id: 11 },
];

// Split into two rows for the marquee effect
const ROW_1 = technologiesWeb.slice(0, 9);
const ROW_2 = technologiesWeb.slice(8);

const PillRow = ({
  items,
  direction = 'left',
}: {
  items: typeof technologiesWeb;
  direction?: 'left' | 'right';
}) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className='overflow-hidden w-full'>
      <motion.div
        className='flex gap-3 w-max'
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech.id}-${i}`}
            className='flex-shrink-0 text-xs sm:text-sm font-medium text-white/60
              border border-white/10 rounded-full px-4 py-2
              bg-white/[0.04] whitespace-nowrap select-none'
          >
            {tech.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const WhatIUse = () => {
  return (
    <section
      aria-labelledby='what-i-use-heading'
      className='py-20 sm:py-28 overflow-hidden'
    >
      {/* ── Header ── */}
      <div className='text-center px-5 mb-14'>
        <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
          Tech Stack
        </p>
        <h2
          id='what-i-use-heading'
          className='font-bold text-white'
          style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}
        >
          Tools I{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
            work with
          </span>
        </h2>
        <p className='text-white/50 mt-4 max-w-md mx-auto text-sm sm:text-base leading-relaxed'>
          6 years deep in the JavaScript ecosystem — from pixel-perfect UIs to
          production APIs.
        </p>
      </div>

      {/* ── Marquee rows ── */}
      <div className='flex flex-col gap-3'>
        <PillRow items={ROW_1} direction='left' />
        <PillRow items={ROW_2} direction='right' />
      </div>

      {/* ── Bottom copy ── */}
      <div className='mt-20 max-w-4xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-10'>
        {/* Arrow */}
        <div className='flex-shrink-0 opacity-60'>
          <Image
            src={arrow}
            alt=''
            aria-hidden='true'
            className='w-[80px] sm:w-[110px] h-auto rotate-12'
          />
        </div>

        {/* Text */}
        <div>
          <h3
            className='font-bold text-white mb-3 text-center lg:text-left'
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)' }}
          >
            Built for <span className='text-orange-500'>performance</span> and
            scale
          </h3>
          <p className='text-white/50 text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-xl'>
            Every tool in the stack is chosen deliberately — not for the trend,
            but for what it delivers in production. Core Web Vitals, bundle
            optimization, and rendering strategies that move real-user metrics.
          </p>
        </div>
      </div>
    </section>
  );
};
