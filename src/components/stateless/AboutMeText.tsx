'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const AboutMeText = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start('visible');
  }, [isInView, mainControls]);

  return (
    <section className='bg-aboutme-container w-full py-20 sm:py-28 lg:py-36'>
      {/*
        Layout: padding izquierdo generoso como en el original (pl-6 sm:pl-10 lg:pl-20)
        sin centrar el contenido — el texto es una declaración, tiene más peso
        anclado a la izquierda.
        max-w-3xl evita que las líneas se vuelvan demasiado largas en pantallas grandes.
      */}
      <div className='px-6 sm:px-10 lg:pl-20 lg:pr-12 w-full max-w-3xl'>
        <motion.div
          ref={containerRef}
          animate={mainControls}
          initial='hidden'
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
            },
          }}
        >
          <h2
            className='font-bold tracking-wide text-white mb-4'
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}
          >
            I am,
          </h2>

          <p
            className='text-white leading-snug'
            style={{ fontSize: 'clamp(1.1rem, 3.5vw, 2.5rem)' }}
          >
            Frontend Developer, I specialize in crafting visually stunning{' '}
            <span className='text-orange-500'>
              and interactive digital experiences.
            </span>
          </p>

          <p
            className='mt-6 text-white text-right pr-2'
            style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.75rem)' }}
          >
            Let&apos;s create something amazing{' '}
            <span className='text-orange-500'>together.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
