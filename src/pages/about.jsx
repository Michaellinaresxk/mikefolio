import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import { ProfileCvSection } from '@/components/stateless/ProfileCvSection';
import { ExperienceSection } from '@/components/stateless/ExperienceSection';
import { WhatIUse } from '@/components/stateless/WhatIUse';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Menu from '@/components/stateless/menu/Menu';
import Link from 'next/link';
import PageHead from '@/components/PageHead';

const About = () => {
  return (
    <>
      <PageHead
        title='About'
        description='Learn more about Michael Linares, his journey as a Frontend Developer and the technologies he works with.'
        path='/about'
      />

      <div className='bg-black'>
        <Menu />

        {/* ── Hero ── */}
        <section className='relative min-h-screen flex flex-col justify-center px-5 sm:px-8 pt-24 pb-20 overflow-hidden'>
          {/* Ambient glow */}
          <div
            className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none'
            style={{
              background:
                'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)',
            }}
            aria-hidden='true'
          />

          <div className='relative z-10 max-w-5xl mx-auto w-full'>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-6'
            >
              About me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className='font-bold text-white leading-[0.95] tracking-tight mb-10'
              style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}
            >
              Hello, <br className='sm:hidden' />
              I&apos;m{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300'>
                Michael
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className='max-w-2xl space-y-5'
            >
              <p className='text-white/60 text-base sm:text-lg leading-relaxed'>
                Frontend Developer with{' '}
                <span className='text-white/90'>6+ years</span> building
                production-ready applications in React, Vue, and TypeScript. Web
                design background translates into sharper UX decisions and
                closer collaboration with designers.
              </p>
              <p className='text-white/40 text-sm sm:text-base leading-relaxed'>
                Currently focused on web performance — Core Web Vitals, bundle
                optimization, and rendering strategies that move the needle on
                real-user metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className='mt-10 flex items-center gap-6'
            >
              <Link
                href='/projects'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors'
              >
                See my work
                <span aria-hidden='true'>→</span>
              </Link>
              <Link
                href='/contact'
                className='text-sm font-semibold text-white/50 hover:text-white/80 transition-colors'
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Journey ── */}
        <section className='px-5 sm:px-8 py-20 sm:py-28 border-t border-white/[0.06]'>
          <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
                My story
              </p>
              <h2
                className='font-bold text-white mb-6'
                style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
              >
                My journey
              </h2>
              <p className='text-white/55 text-sm sm:text-base leading-relaxed mb-4'>
                It started when I realized I could bring my{' '}
                <span className='text-white/80'>ideas to life</span> and grow my
                skills in the same process. That feeling never left.
              </p>
              <p className='text-white/35 text-sm sm:text-base leading-relaxed'>
                I&apos;m naturally curious and perpetually expanding my
                knowledge — from advanced frontend architecture to AI
                integrations and mobile apps in production.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className='grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]'
            >
              {[
                { value: '6+', label: 'Years experience' },
                { value: '30+', label: 'Projects delivered' },
                { value: '11K+', label: 'Udemy students' },
                { value: '3', label: 'Countries worked in' },
              ].map((s) => (
                <div key={s.label} className='bg-black px-6 py-8 text-center'>
                  <p className='text-2xl sm:text-3xl font-bold text-orange-400 mb-1'>
                    {s.value}
                  </p>
                  <p className='text-xs text-white/30 uppercase tracking-wider'>
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <main>
          <ExperienceSection />
          <WhatIUse />
          <ProfileCvSection />
          <CallToAction />
        </main>
      </div>

      <Footer text='Copyright Michaelxk ©' year={2026} />
    </>
  );
};

export default About;
