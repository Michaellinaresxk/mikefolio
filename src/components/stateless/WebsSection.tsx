'use client';
import React from 'react';
import Image from 'next/image';
import { uiDesign } from '../../data/UIDesign';
import { motion } from 'framer-motion';
import Link from 'next/link';

const UICard = ({ title, imageUrl }: { title: string; imageUrl: any }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className='group relative overflow-hidden rounded-xl bg-[#0f1117] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500'
  >
    {/* Image */}
    <div className='relative overflow-hidden aspect-[4/3]'>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]'
        sizes='(max-width: 640px) 100vw, 50vw'
      />
      {/* Scrim */}
      <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500' />
      {/* Orange line grow */}
      <div className='absolute bottom-0 left-0 h-[2px] w-8 bg-orange-500 group-hover:w-full transition-all duration-500 origin-left' />
    </div>

    {/* Title */}
    <div className='px-4 py-3'>
      <h3 className='text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200 truncate'>
        {title}
      </h3>
    </div>

    {/* Glow on hover */}
    <div
      className='pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
      style={{ boxShadow: '0 0 28px 0 rgba(249,115,22,0.08)' }}
      aria-hidden='true'
    />
  </motion.article>
);

const WebsSection = () => {
  const preview = uiDesign.slice(0, 4);

  return (
    <section className='relative w-full bg-black py-20 sm:py-28 overflow-hidden'>
      <div className='relative z-10 max-w-6xl mx-auto px-5 sm:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start'>
          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='lg:sticky lg:top-24 flex flex-col gap-6'
          >
            <div>
              <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
                UI Design
              </p>
              <h2
                className='font-bold text-white leading-tight'
                style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
              >
                Latest{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                  UI Designs
                </span>
              </h2>
            </div>

            <p className='text-white/45 text-sm sm:text-base leading-relaxed'>
              A selection of interface work spanning web apps, product pages,
              and mobile concepts — all designed in Figma before touching code.
            </p>

            <Link
              href='/projects'
              className='inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-300 transition-colors group/cta w-fit'
            >
              View all designs
              <span className='transition-transform duration-200 group-hover/cta:translate-x-1'>
                →
              </span>
            </Link>
          </motion.div>

          {/* ── Right: 2×2 grid ── */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {preview.map((item) => (
              <UICard
                key={item.id}
                title={item.title}
                imageUrl={item.CardImage}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        {uiDesign.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4'
          >
            <p className='text-white/35 text-sm'>
              Showing 4 of {uiDesign.length} designs
            </p>
            <Link
              href='/projects'
              className='text-lg font-bold text-white hover:text-orange-400 transition-colors flex items-center gap-2 group/browse'
            >
              Browse all designs
              <span className='transition-transform duration-200 group-hover/browse:translate-x-1'>
                →
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WebsSection;
