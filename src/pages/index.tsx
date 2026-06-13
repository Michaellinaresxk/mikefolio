import { Inter } from 'next/font/google';
import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import PageHead from '@/components/stateless/PageHead';
import Presentation from '@/components/stateless/Presentation';
import Footer from '@/components/stateless/Footer';
import CallToAction from '@/components/stateless/CallToAction';
import ServicesSection from '@/components/stateless/ServicesSection';
import WebsSection from '@/components/stateless/WebsSection';
import { AboutMeText } from '@/components/stateless/AboutMeText';
import { WebCard } from '@/components/stateless/cards/WebCard';
import Menu from '@/components/stateless/menu/Menu';
import { pcyr } from '@/assets/img/webs/index';
import { websites } from '@/data/websites';
import { ImageAnimation } from '@/components/stateless/ImageAnimation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const cardCount = websites.length;
  const endX = `-${(cardCount - 1) * 90}vw`;
  const horizontalRef = useTransform(scrollYProgress, [0, 1], ['0%', endX]);
  const fontSizeTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['1.5rem', '8vw'],
  );

  return (
    <>
      {/* FIX #1 — SEO + OG meta para WhatsApp/LinkedIn/iMessage */}
      <PageHead
        title='Home'
        description='Portfolio of Michael Linares, Frontend Developer & Web Designer specializing in React, Next.js and interactive digital experiences.'
        path='/'
        includeStructuredData
      />

      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Menu />

        {/* ── HERO ── */}
        <div
          className='relative bg-home w-full flex items-center overflow-hidden'
          style={{
            height: '100svh',
            paddingLeft: 'max(1.5rem, env(safe-area-inset-left))',
            paddingRight: 'max(1.5rem, env(safe-area-inset-right))',
            paddingTop: 'max(4rem, env(safe-area-inset-top))',
            paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
          }}
        >
          {/*
            FIX #5 — Video solo en desktop. En mobile usamos la imagen
            poster como fondo estático: ahorra ~2-5 MB de datos y elimina
            el retraso de carga en conexiones lentas.
          */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster='/og-image.jpg'
            className='absolute inset-0 w-full h-full object-cover -z-10 hidden sm:block'
            aria-hidden='true'
          >
            <source
              src='https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1768397474/mike-folio/video-bg_mqooam.mp4'
              type='video/mp4'
            />
          </video>

          {/* Mobile: imagen estática del poster como fondo */}
          <div
            className='absolute inset-0 -z-10 sm:hidden bg-cover bg-center'
            style={{ backgroundImage: "url('/og-image.jpg')" }}
            aria-hidden='true'
          />

          {/* Scrim para legibilidad */}
          <div
            className='absolute inset-0 -z-10 bg-black/45'
            aria-hidden='true'
          />

          <div className='w-full max-w-2xl sm:pl-10 lg:pl-16'>
            <Presentation
              title1='Michael'
              title2='Linares'
              subtitle='FrontEnd Developer & Web Designer'
            />
          </div>
        </div>

        <AboutMeText />
      </main>

      {/* ── LATEST CREATIONS ── */}
      <div className='lasted_websites'>
        <motion.h2
          className='font-bold text-center py-10 md:py-20 px-4'
          style={{ fontSize: fontSizeTransform }}
        >
          Latest Web{' '}
          <span className='font-normal text-orange-500'>Creations</span>
        </motion.h2>

        <section className='relative h-[300vh]' ref={targetRef}>
          <div
            className='sticky top-0 flex items-center overflow-hidden'
            style={{ height: '100svh' }}
          >
            <motion.div
              className='flex gap-4 pl-4 md:pl-8'
              style={{ x: horizontalRef, willChange: 'transform' }}
            >
              {websites.map((web, i) => (
                <div key={`${web.id}-${i}`} className='flex-shrink-0'>
                  <WebCard
                    title={web.title}
                    imageUrl={web.CardImage}
                    cardWidht='min(80vw, 450px)'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <ImageAnimation image={pcyr} />

        <Link href='/projects' className='flex justify-center mt-12 pb-16 px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold text-indigo-200 hover:text-indigo-100 transition-colors flex items-center gap-2'>
            Explore My Projects <span aria-hidden='true'>→</span>
          </h2>
        </Link>
      </div>

      <WebsSection />
      <ServicesSection />
      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year={2024} />
    </>
  );
}
