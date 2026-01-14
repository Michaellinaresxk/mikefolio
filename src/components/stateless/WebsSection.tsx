'use client';
import React from 'react';
import { WebCard } from './cards/WebCard';
import { uiDesign } from '../../data/UIDesign';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WebsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className='relative w-full bg-black overflow-x-hidden py-16 sm:py-20 lg:py-24'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div
        className='absolute inset-0 opacity-5 pointer-events-none'
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 140, 0, 0.05) 25%, rgba(255, 140, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 140, 0, 0.05) 75%, rgba(255, 140, 0, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 140, 0, 0.05) 25%, rgba(255, 140, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 140, 0, 0.05) 75%, rgba(255, 140, 0, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Left Column - Content */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col justify-start'
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'
            >
              Latest{' '}
              <span className='bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'>
                UI Designs
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-gray-300 text-base sm:text-lg mb-8 leading-relaxed'
            >
              I&apos;ve been instrumental in creating impactful UI designs.
              Here&apos;s a curated selection that highlights my expertise and
              the results achieved.
            </motion.p>

            <Link href='/projects' className='w-full sm:w-auto'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className='w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 shadow-lg'
              >
                View all Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
          >
            {uiDesign.slice(0, 4).map((web) => (
              <motion.div
                key={web.id}
                variants={itemVariants}
                className='w-full'
              >
                <WebCard
                  title={web.title}
                  imageUrl={web.CardImage}
                  cardWidht='100%'
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View More CTA */}
        {uiDesign.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='mt-12 sm:mt-16 flex justify-center'
          >
            <Link href='/projects' className='w-full sm:w-auto'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='text-center'
              >
                <p className='text-gray-400 text-base sm:text-lg mb-4'>
                  Want to see more designs?
                </p>
                <p className='text-2xl sm:text-3xl font-bold text-white hover:text-orange-400 transition-colors cursor-pointer flex items-center justify-center gap-2'>
                  Browse All Designs
                  <span className='text-2xl'>→</span>
                </p>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
      <div className='absolute bottom-0 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-red-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
    </motion.section>
  );
};

export default WebsSection;
