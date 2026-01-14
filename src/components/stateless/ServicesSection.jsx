'use client';
import { useRef } from 'react';
import { FaRocket, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTransform, useScroll } from 'framer-motion';

const ServicesSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const horizontalRef = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  const features = [
    {
      icon: '✓',
      title: 'User-Friendly Interfaces',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: '✓',
      title: 'Visual Appeal',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: '✓',
      title: 'Aesthetically Pleasing',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: '✓',
      title: 'Cross-Browser Compatibility',
      color: 'from-orange-500 to-red-600',
    },
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={targetRef}
      className='relative w-full bg-black overflow-x-hidden py-16 sm:py-24'
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

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='relative z-10 container mx-auto px-4 sm:px-6'
      >
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24'>
          {/* Web Design Card */}
          <motion.div
            variants={serviceVariants}
            whileHover='hover'
            className='group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/20'
          >
            {/* Accent Border */}
            <div className='absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500 rounded-t-xl' />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className='mb-4 sm:mb-6 inline-block p-3 sm:p-4 rounded-lg bg-orange-500/10'
            >
              <FaRocket size={32} className='sm:text-5xl text-orange-500' />
            </motion.div>

            <h3 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white'>
              Web Design
            </h3>

            <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6'>
              A web is the image that your business transmits to the world. I
              offer modern and innovative design, easy to use, aesthetically
              pleasing, and perfectly suited to your needs.
            </p>

            <motion.p
              whileHover={{ x: 5 }}
              className='font-bold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer flex items-center gap-2'
            >
              Let&apos;s work together!
              <span className='text-lg'>→</span>
            </motion.p>
          </motion.div>

          {/* Application Development Card */}
          <motion.div
            variants={serviceVariants}
            whileHover='hover'
            className='group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/20'
          >
            {/* Accent Border */}
            <div className='absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500 rounded-t-xl' />

            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className='mb-4 sm:mb-6 inline-block p-3 sm:p-4 rounded-lg bg-orange-500/10'
            >
              <FaMobileAlt size={32} className='sm:text-5xl text-orange-500' />
            </motion.div>

            <h3 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white'>
              Application Development
            </h3>

            <p className='text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6'>
              Full-cycle development from design and planning to deployment and
              maintenance. Seamless experience across all devices, with focus on
              performance, security, and scalability.
            </p>

            <motion.div
              whileHover={{ x: 5 }}
              className='font-bold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer flex items-center gap-2'
            >
              Explore more
              <span className='text-lg'>→</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16 sm:mb-24 px-4'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
            Turning{' '}
            <span className='bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'>
              ideas
            </span>{' '}
            into code,
            <br className='hidden sm:block' />
            one pixel at a time.
          </h2>
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureVariants}
              whileHover={{ x: 10 }}
              className='flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all group'
            >
              <div className='flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 group-hover:scale-110 transition-transform'>
                <span className='text-white font-bold text-lg'>
                  {feature.icon}
                </span>
              </div>

              <span className='text-base sm:text-lg font-semibold text-white'>
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className='absolute top-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
        <div className='absolute bottom-0 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-red-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
      </motion.div>
    </section>
  );
};

export default ServicesSection;
