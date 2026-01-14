import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaEye, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Heading from '../components/stateless/Heading';
import Footer from '../components/stateless/Footer';
import CallToAction from '../components/stateless/CallToAction';
import Menu from '@/components/stateless/menu/Menu';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  const project = projects.find((pro) => pro.id === parseInt(id));

  useEffect(() => {
    setIsLoading(!project);
  }, [project]);

  if (isLoading || !project) {
    return (
      <div className='flex items-center justify-center min-h-screen text-white bg-black'>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='text-2xl'
        >
          Cargando proyecto...
        </motion.div>
      </div>
    );
  }

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Menu />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden'
      >
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 140, 0, 0.05) 25%, rgba(255, 140, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 140, 0, 0.05) 75%, rgba(255, 140, 0, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 140, 0, 0.05) 25%, rgba(255, 140, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 140, 0, 0.05) 75%, rgba(255, 140, 0, 0.05) 76%, transparent 77%, transparent)
          `,
            backgroundSize: '50px 50px',
            animation: 'grid-fade 6s ease-in-out infinite',
          }}
        />

        <motion.div variants={itemVariants} className='relative z-10 mb-12'>
          <Heading
            title1={project.title1}
            title2={project.title2}
            subtitle={project.subtitle}
          />
        </motion.div>

        <style>{`
          @keyframes grid-fade {
            0% { opacity: 0.05; }
            50% { opacity: 0.15; }
            100% { opacity: 0.05; }
          }
        `}</style>
      </motion.section>

      {/* Main Content */}
      <section className='relative bg-black py-16 px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-7xl mx-auto'
        >
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
            {/* Sidebar - Left Column */}
            <motion.div
              variants={itemVariants}
              className='lg:col-span-1 space-y-6'
            >
              {/* Project Image */}
              <motion.div
                variants={imageVariants}
                className='relative rounded-xl overflow-hidden shadow-2xl group'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10' />
                <Image
                  alt={project.title1}
                  className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                  src={project.appImage}
                  width={400}
                  height={300}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Main Content - Right Column */}
            <motion.div
              variants={itemVariants}
              className='lg:col-span-2 space-y-8'
            >
              {/* Description */}
              <motion.div
                variants={itemVariants}
                className='bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-colors group'
              >
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full group-hover:h-10 transition-all' />
                  <h2 className='text-3xl font-bold text-white'>Descripción</h2>
                </div>

                <div className='text-gray-300 text-lg leading-relaxed space-y-4'>
                  {typeof project.description === 'string' ? (
                    <p>{project.description}</p>
                  ) : (
                    project.description
                  )}
                </div>
              </motion.div>

              {/* Improvements */}
              <motion.div
                variants={itemVariants}
                className='bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-orange-500 transition-colors'
              >
                <div className='flex items-center gap-3 mb-8'>
                  <div className='w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full' />
                  <h2 className='text-3xl font-bold text-white'>
                    Mejoras Implementadas
                  </h2>
                </div>

                <div className='space-y-4'>
                  {project.whatIImprube?.map((improvement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='flex gap-4 p-4 bg-gray-800 rounded-lg border-l-4 border-orange-500 hover:bg-gray-700 transition-colors group'
                    >
                      <div className='flex-shrink-0'>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className='flex items-center justify-center h-8 w-8 rounded-md bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors'
                        >
                          <div className='w-2 h-2 bg-orange-500 rounded-full' />
                        </motion.div>
                      </div>
                      <div className='flex-grow'>
                        <p className='text-gray-300 text-lg'>{improvement}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Technologies Card */}
              <motion.div
                variants={itemVariants}
                className='bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-colors'
              >
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full' />
                  <h3 className='text-2xl font-bold text-white'>Tecnologías</h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {project.technologies.map((technology, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-center gap-2 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-orange-500 transition-all group'
                    >
                      <div className='w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform' />
                      <span className='text-gray-300 text-sm font-medium'>
                        {technology}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className='space-y-3'>
                <motion.a
                  href={project.projectLinks}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full block'
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 group'>
                    <FaEye className='group-hover:animate-pulse' />
                    Ver Proyecto
                  </button>
                </motion.a>

                <motion.a
                  href={project.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full block'
                >
                  <button className='w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-700 hover:border-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 group'>
                    <FaGithub className='group-hover:rotate-12 transition-transform' />
                    Ver Código
                  </button>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CallToAction />
      </motion.section>

      {/* Footer */}
      <Footer text='Copyright Michaelxk ©' year='2024' />

      {/* Global Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ff8c00, #ff6347);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ffa500, #ff7f50);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 768px) {
          .text-3xl {
            font-size: 1.875rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .text-lg {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetails;
