import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../components/stateless/Footer';
import CallToAction from '../components/stateless/CallToAction';
import Menu from '@/components/stateless/menu/Menu';
import { projects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', delay: d },
  }),
};

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [ready, setReady] = useState(false);

  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (project) setReady(true);
  }, [project]);

  if (!ready || !project) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-black'>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className='text-white/40 text-sm tracking-widest uppercase'
        >
          Loading…
        </motion.div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-black'>
      <Menu />

      {/* ── Hero ── */}
      <section className='relative pt-24 pb-12 px-5 sm:px-8 max-w-6xl mx-auto'>
        {/* Back */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial='hidden'
          animate='visible'
          className='mb-8'
        >
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/35 hover:text-white/70 transition-colors'
          >
            <FaArrowLeft size={10} />
            All projects
          </Link>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          {/* Left: title + meta */}
          <motion.div
            custom={0.05}
            variants={fadeUp}
            initial='hidden'
            animate='visible'
          >
            <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
              {project.subtitle}
            </p>
            <h1
              className='font-bold text-white leading-tight mb-6'
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              {project.title1}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                {project.title2}
              </span>
            </h1>

            {/* Tech pills */}
            {project.technologies?.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-8'>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className='text-[11px] font-medium text-white/50 border border-white/10 rounded-full px-3 py-1'
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href={project.projectLinks}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm transition-colors'
              >
                <FaEye size={13} />
                Live project
              </a>
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-white/70 hover:text-white font-semibold text-sm transition-all'
                >
                  <FaGithub size={13} />
                  View code
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            className='relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0f1117] border border-white/[0.06]'
          >
            <Image
              alt={project.title1}
              src={project.appImage}
              fill
              className='object-cover'
              priority
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
            <div className='absolute inset-0 bg-black/20' />
          </motion.div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className='px-5 sm:px-8 max-w-6xl mx-auto pb-20 space-y-6'>
        {/* Description */}
        {project.description && (
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            className='rounded-2xl bg-[#0f1117] border border-white/[0.06] p-7 sm:p-10'
          >
            <h2 className='text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-5'>
              About this project
            </h2>
            <p className='text-white/65 text-base sm:text-lg leading-relaxed'>
              {project.description}
            </p>
          </motion.div>
        )}

        {/* Improvements */}
        {project.whatIImprube?.length > 0 && (
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            className='rounded-2xl bg-[#0f1117] border border-white/[0.06] p-7 sm:p-10'
          >
            <h2 className='text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-6'>
              What I improved
            </h2>
            <ul className='space-y-3'>
              {project.whatIImprube.map((item, i) => (
                <li key={i} className='flex gap-4 items-start'>
                  <span className='mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500' />
                  <span className='text-white/60 text-sm sm:text-base leading-relaxed'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </section>

      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year={2026} />
    </div>
  );
};

export default ProjectDetails;
