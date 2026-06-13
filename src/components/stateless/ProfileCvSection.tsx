import React, { useRef } from 'react';
import { cv } from '../../assets/img/index';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export const ProfileCvSection = () => {
  const sectionRef = useRef(null);
  const resumeLink = '/Michael-Linares-CV.pdf';

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className='relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden bg-black'
      aria-label='Download CV'
    >
      {/* Subtle glow behind the CV image */}
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
        aria-hidden='true'
      />

      <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-10'>
        {/* ── Eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='text-center'
        >
          <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-3'>
            Resume
          </p>
          <h2
            className='font-bold text-white'
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            6 years of work,{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
              one document
            </span>
          </h2>
          <p className='text-white/40 mt-3 text-sm sm:text-base max-w-md mx-auto'>
            React · Vue.js · TypeScript · React Native · Node.js
          </p>
        </motion.div>

        {/* ── CV Image ── */}
        <motion.div
          style={{ y, opacity }}
          className='relative w-full max-w-md rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl'
        >
          <Image
            src={cv}
            alt='Michael Linares CV preview'
            className='w-full h-auto'
          />
          {/* Frosted bottom fade */}
          <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none' />
        </motion.div>

        {/* ── Download button ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <a
            href={resumeLink}
            download='Michael-Linares-CV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/[0.06] border border-white/10
              hover:bg-orange-500 hover:border-orange-500
              text-white font-semibold text-sm
              transition-all duration-250'
          >
            <FiDownload
              size={16}
              className='transition-transform duration-200 group-hover:translate-y-0.5'
            />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};
