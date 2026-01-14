'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaEye, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({
  image,
  title,
  repo_link,
  app_link,
  id,
  repoProvider,
  description,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      viewport={{ once: true, margin: '-50px' }}
      className='group h-full'
    >
      <div className='relative h-full rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 flex flex-col'>
        {/* Image Container */}
        <motion.div
          variants={imageVariants}
          initial='initial'
          whileHover='hover'
          className='relative overflow-hidden h-48 sm:h-56 w-full bg-gray-800'
        >
          <Link href={`/projectDetails?id=${id}`}>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover w-full h-full'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            {/* Overlay Gradient on Hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </Link>
        </motion.div>

        {/* Content Container */}
        <div className='flex flex-col flex-grow px-6 py-5'>
          {/* Title */}
          <Link href={`/projectDetails?id=${id}`}>
            <motion.h3
              className='text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2 hover:text-orange-500 transition-colors duration-300 cursor-pointer'
              whileHover={{ x: 4 }}
            >
              {title}
            </motion.h3>
          </Link>

          {/* Description (if provided) */}
          {description && (
            <p className='text-gray-400 text-sm mb-4 line-clamp-2 flex-grow'>
              {description.length > 80
                ? `${description.substring(0, 80)}...`
                : description}
            </p>
          )}

          {/* Action Buttons */}
          <div className='flex gap-3 mt-auto'>
            <motion.div
              custom={0}
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              className='flex-1'
            >
              <Link href={repo_link} target='_blank' rel='noopener noreferrer'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgb(249, 115, 22)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-white font-semibold text-sm transition-all duration-300 border border-gray-700 hover:border-orange-500 group/btn'
                >
                  <FaGithub className='group-hover/btn:rotate-12 transition-transform' />
                  <span className='hidden sm:inline'>{repoProvider}</span>
                  <span className='sm:hidden'>Code</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              custom={1}
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              className='flex-1'
            >
              <Link href={app_link} target='_blank' rel='noopener noreferrer'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 group/btn'
                >
                  <FaEye className='group-hover/btn:animate-pulse' />
                  <span>View</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Border Accent */}
        <div className='absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500' />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
