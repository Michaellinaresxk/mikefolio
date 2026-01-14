import Image from 'next/image';
import { Inter } from 'next/font/google';
import Presentation from '@/components/stateless/Presentation';
import Footer from '@/components/stateless/Footer';
import CallToAction from '@/components/stateless/CallToAction';
import ServicesSection from '@/components/stateless/ServicesSection';
import WebsSection from '@/components/stateless/WebsSection';
import { AboutMeText } from '@/components/stateless/AboutMeText';
import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { WebCard } from '@/components/stateless/cards/WebCard';
import Menu from '@/components/stateless/menu/Menu';
import { pcyr } from '@/assets/img/webs/index';
import { websites } from '@/data/websites';
import { ImageAnimation } from '@/components/stateless/ImageAnimation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const targetRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const horizontalRef = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  const fontSizeTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['.5vw', '10vw']
  );

  return (
    <>
      <main
        className={`transition-all ease-in flex min-h-screen flex-col items-center justify-between overflow-x-hidden ${inter.className}`}
      >
        <Menu />
        <div className='relative bg-home w-full h-screen bg-slate-900 bg-opacity-0 flex items-center pl-4 sm:pl-20'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className='absolute top-0 left-0 w-full h-full object-cover -z-10'
          >
            <source
              src='https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1768397474/mike-folio/video-bg_mqooam.mp4'
              type='video/mp4'
            />
          </video>

          <div className='container-presentation'>
            <Presentation
              title1='Michael'
              title2='Linares'
              subtitle='FrontEnd Developer & Web Designer'
            />
          </div>
        </div>
        <AboutMeText />
      </main>
      <div className='lasted_websites' ref={textRef}>
        <motion.h2
          className='text-7xl font-bold text-center py-20'
          style={{ fontSize: fontSizeTransform }}
        >
          Latest Web{' '}
          <span className='font-normal text-orange-500'>Creations</span>
        </motion.h2>

        <section className='relative h-[270vh]'>
          <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
            <motion.div className='flex gap-4' style={{ x: horizontalRef }}>
              {websites.map((web) => (
                <div key={web.id} className='p-4'>
                  <WebCard
                    title={web.title}
                    imageUrl={web.CardImage}
                    cardWidht='450px'
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        <ImageAnimation image={pcyr} />
        <Link
          href={`/projects`}
          className='flex justify-center mt-20 pb-20 inline-block text-sm md:text-base lg:text-lg font-medium leading-loose text-indigo-200 hover:text-indigo-100'
        >
          <h2 className='text-3xl font-bold mb-6'>
            Explore My Projects{' '}
            <span aria-hidden='true' className='ml-2'>
              →
            </span>
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
