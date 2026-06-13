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
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className='group relative flex flex-col h-full'
    >
      {/* Card shell */}
      <div className='relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#0f1117] border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.14]'>
        {/* ── Image ── */}
        <Link
          href={`/projectDetails?id=${id}`}
          className='block relative overflow-hidden aspect-[16/9] bg-[#0a0c12]'
        >
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]'
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
          {/* Dark scrim that lifts on hover */}
          <div className='absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-20' />

          {/* Orange slash accent — bottom-left corner */}
          <div className='absolute bottom-0 left-0 w-10 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full origin-left' />
        </Link>

        {/* ── Body ── */}
        <div className='flex flex-col flex-grow px-5 py-5 gap-4'>
          {/* Title */}
          <Link href={`/projectDetails?id=${id}`}>
            <h3 className='text-base sm:text-lg font-bold text-white/90 leading-snug tracking-tight line-clamp-2 transition-colors duration-200 group-hover:text-orange-400'>
              {title}
            </h3>
          </Link>

          {/* Description */}
          {description && (
            <p className='text-white/40 text-xs sm:text-sm leading-relaxed line-clamp-2 flex-grow'>
              {description}
            </p>
          )}

          {/* ── Actions ── */}
          <div className='flex items-center gap-2 mt-auto pt-1'>
            {/* Code button — ghost */}
            <Link
              href={repo_link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1'
            >
              <motion.span
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg text-xs font-semibold text-white/50 border border-white/[0.08] hover:border-white/20 hover:text-white/80 transition-all duration-200'
              >
                <FaGithub size={13} />
                <span className='hidden sm:inline'>
                  {repoProvider ?? 'Code'}
                </span>
                <span className='sm:hidden'>Code</span>
              </motion.span>
            </Link>

            {/* Live button — orange solid */}
            <Link
              href={app_link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1'
            >
              <motion.span
                whileTap={{ scale: 0.95 }}
                className='flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-lg text-xs font-bold text-white bg-orange-500 hover:bg-orange-400 transition-colors duration-200'
              >
                <FaEye size={12} />
                Live
              </motion.span>
            </Link>
          </div>
        </div>
      </div>

      {/* Glow — only visible on hover, doesn't affect layout */}
      <div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
        style={{ boxShadow: '0 0 32px 0 rgba(249,115,22,0.10)' }}
        aria-hidden='true'
      />
    </motion.article>
  );
};

export default ProjectCard;
