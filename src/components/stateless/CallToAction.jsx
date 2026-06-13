'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className='relative bg-black border-t border-white/[0.06] px-5 sm:px-8 py-20 sm:py-28 overflow-hidden'>
      {/* Glow */}
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
        aria-hidden='true'
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-16'
      >
        {/* Copy */}
        <div>
          <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
            Let&apos;s work together
          </p>
          <h2
            className='font-bold text-white leading-tight'
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
          >
            Got a project?
            <br />
            <span className='text-white/30'>Let&apos;s talk.</span>
          </h2>
        </div>

        {/* CTA */}
        <Link href='/contact' className='flex-shrink-0'>
          <motion.span
            whileTap={{ scale: 0.97 }}
            className='inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-orange-500 hover:bg-orange-400
              text-white font-bold text-base
              transition-colors duration-200
              shadow-lg shadow-orange-500/20'
          >
            Contact me
            <span aria-hidden='true' className='text-lg'>
              →
            </span>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;
