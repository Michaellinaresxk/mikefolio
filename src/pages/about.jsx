import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import { ProfileCvSection } from '@/components/stateless/ProfileCvSection';
import { ExperienceSection } from '@/components/stateless/ExperienceSection';
import { WhatIUse } from '@/components/stateless/WhatIUse';
import { motion, useTransform, useScroll } from 'framer-motion';
import { about_background_image } from '@/assets/img/index';
import { useRef } from 'react';
import Image from 'next/image';
import Menu from '@/components/stateless/menu/Menu';
import Link from 'next/link';
import PageHead from '@/components/PageHead';

const About = () => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['end start', 'start end'],
  });

  /*
    FIX #15 — scale empieza en 0.8 en vez de 0.5.
    Con 0.5 el título "Hello, I'm Michael" en mobile arrancaba
    como texto ilegible de ~1.5rem. Con 0.8 luce intencional.
  */
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      {/* FIX #1 — SEO */}
      <PageHead
        title='About'
        description='Learn more about Michael Linares, his journey as a Frontend Developer and the technologies he works with.'
        path='/about'
      />

      {/*
        FIX #3 — Estructura HTML válida.
        El original tenía <section> → <section> → <main> → <main> anidados.
        Ahora: una sola <div> wrapper, un <main> para el contenido principal.
        El <Menu /> va fuera del flujo semántico (es nav global).
      */}
      <div className='bg-about-page'>
        <Menu />

        {/* Hero image */}
        <div className='relative w-full'>
          <Image
            alt='Michael Linares — About page hero'
            className='object-cover object-center w-full'
            src={about_background_image}
            priority
          />
        </div>

        <main className='about-banner min-h-screen flex flex-col'>
          {/* Intro title block */}
          <div className='relative bg-dark-blue text-white font-sans'>
            <div className='container mx-auto px-6 py-20 text-center'>
              <p className='uppercase tracking-wide text-sm md:text-base lg:text-lg text-gray-300'>
                Innovating User Experiences with Every Line of Code
              </p>

              <div className='flex justify-center items-center mt-6 relative'>
                <div
                  className='absolute z-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 pointer-events-none'
                  aria-hidden='true'
                />
                <motion.h1
                  ref={titleRef}
                  style={{ scale }}
                  className='relative z-10 leading-none font-extrabold tracking-tight'
                  style={{
                    scale,
                    fontSize: 'clamp(3rem, 12vw, 10rem)',
                  }}
                >
                  Hello, I&apos;m{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
                    Michael
                  </span>
                </motion.h1>
              </div>

              <div className='mt-8 md:mt-12'>
                <Link
                  href='/projects'
                  className='inline-block text-sm md:text-base font-medium text-indigo-200 hover:text-indigo-100 transition-colors'
                >
                  Latest Project <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/*
            FIX #3 — Era <main> anidado. Ahora es <section>.
            FIX: h-screen en mobile con texto lg:text-5xl causaba overflow.
            Reemplazado por padding generoso.
          */}
          <section className='myJourney-bg flex justify-center items-center flex-col py-20 lg:py-0 lg:min-h-screen'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center lg:pl-20 px-6 max-w-4xl w-full'>
              <div className='w-full text-left'>
                <h2
                  className='font-bold tracking-wide text-white mb-4'
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
                >
                  My journey,
                </h2>
                <p
                  className='text-white leading-snug'
                  style={{ fontSize: 'clamp(1.1rem, 3.5vw, 3rem)' }}
                >
                  as a developer started when I noticed that I can bring my{' '}
                  <span className='text-orange-500'>ideas to life</span> and
                  develop my knowledge in the same process.
                </p>
                <p
                  className='mt-8 text-white text-right'
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)' }}
                >
                  I&apos;m naturally curious and perpetually expanding{' '}
                  <span className='text-orange-500'>my knowledge.</span>
                </p>
              </div>
            </div>
          </section>

          <ExperienceSection />
          <ProfileCvSection />

          <div className='mt-20'>
            <CallToAction />
          </div>

          <WhatIUse />
        </main>
      </div>

      <Footer text='Copyright Michaelxk ©' year={2024} />
    </>
  );
};

export default About;
