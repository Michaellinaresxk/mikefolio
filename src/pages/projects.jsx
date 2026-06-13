'use client';
import ProjectCard from '@/components/stateless/cards/ProjectCard';
import WebsiteCard from '@/components/stateless/cards/WebsiteCard';
import Menu from '@/components/stateless/menu/Menu';
import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import PageHead from '@/components/PageHead';
import { projects } from '@/data/projects';
import { websites } from '@/data/websites';
import { uiDesign } from '@/data/UIDesign';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const filterCategories = ['All', 'Projects', 'Websites', 'UI Designs'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const filterRef = useRef(null);

  const filteredData = useMemo(() => {
    const by = (arr) =>
      activeFilter === 'All'
        ? arr
        : arr.filter((i) => i.category === activeFilter);
    return {
      projects: by(projects),
      websites: by(websites),
      uiDesigns: by(uiDesign),
    };
  }, [activeFilter]);

  const allFilteredItems = useMemo(() => {
    const items = [];
    filteredData.websites.forEach((w) =>
      items.push({ id: `website-${w.id}`, type: 'website', data: w }),
    );
    filteredData.projects.forEach((p) =>
      items.push({ id: `project-${p.id}`, type: 'project', data: p }),
    );
    filteredData.uiDesigns.forEach((u) =>
      items.push({ id: `ui-${u.id}`, type: 'ui', data: u }),
    );
    return items;
  }, [filteredData]);

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    setShowMobileMenu(false);
  };

  useEffect(() => {
    if (!showMobileMenu) return;
    const handler = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target))
        setShowMobileMenu(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [showMobileMenu]);

  const total = allFilteredItems.length;

  return (
    <>
      <PageHead
        title='Projects'
        description='Explore the web projects, UI designs and websites built by Michael Linares.'
        path='/projects'
      />

      <div
        className='relative w-full min-h-screen bg-black'
        style={{ touchAction: 'pan-y' }}
      >
        {/* Subtle fixed grid */}
        <div
          className='fixed inset-0 opacity-[0.025] pointer-events-none'
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          aria-hidden='true'
        />

        <Menu />

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='relative z-10 pt-24 pb-10 px-5 sm:px-8 max-w-7xl mx-auto'
        >
          <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-3'>
            Portfolio
          </p>
          <h1
            className='font-bold text-white leading-tight'
            style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)' }}
          >
            My{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
              Work
            </span>
          </h1>
          <p className='text-white/40 mt-3 text-sm sm:text-base max-w-md'>
            Websites, apps, and UI concepts built over 6+ years of frontend
            work.
          </p>
        </motion.div>

        {/* ── Filter bar — desktop ── */}
        <div className='hidden sm:flex relative z-10 items-center gap-2 flex-wrap px-5 sm:px-8 max-w-7xl mx-auto mb-10'>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-white/50 border-white/10 hover:border-white/25 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className='ml-auto text-xs text-white/25'>
            {total} {total === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* ── Filter — mobile dropdown ── */}
        <div className='sm:hidden relative z-50 px-4 mt-2 mb-6' ref={filterRef}>
          <button
            onClick={() => setShowMobileMenu((v) => !v)}
            aria-expanded={showMobileMenu}
            aria-haspopup='listbox'
            className='w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/[0.04] text-white font-semibold text-sm border border-white/10 active:scale-[0.98] transition-transform'
          >
            <span>{activeFilter}</span>
            <FaChevronDown
              size={12}
              className={`text-white/40 transition-transform duration-200 ${showMobileMenu ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {showMobileMenu && (
              <motion.ul
                role='listbox'
                initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                transition={{ duration: 0.15 }}
                className='absolute top-full left-4 right-4 mt-1 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl origin-top'
                style={{ zIndex: 9999 }}
              >
                {filterCategories.map((cat) => (
                  <li
                    key={cat}
                    role='option'
                    aria-selected={activeFilter === cat}
                  >
                    <button
                      className={`w-full text-left px-4 py-3.5 text-sm font-semibold transition-colors border-b border-white/[0.06] last:border-b-0 ${
                        activeFilter === cat
                          ? 'text-orange-400 bg-orange-500/10'
                          : 'text-white/60 active:bg-white/5'
                      }`}
                      onClick={() => handleFilterClick(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* ── Grid ── */}
        <AnimatePresence mode='wait'>
          <motion.section
            key={activeFilter}
            variants={containerVariants}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            className='relative z-10 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-2 pb-24'
            aria-label='Projects list'
          >
            {allFilteredItems.length > 0 ? (
              allFilteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className='w-full'
                >
                  {/* websites → external link, sin id */}
                  {item.type === 'website' && (
                    <WebsiteCard
                      image={item.data.CardImage}
                      title={item.data.title}
                      app_link={item.data.projectLinks}
                    />
                  )}
                  {/* projects → /projectDetails?id=X */}
                  {item.type === 'project' && (
                    <ProjectCard
                      image={item.data.CardImage}
                      title={item.data.title}
                      app_link={item.data.projectLinks}
                      repo_link={item.data.repoLink}
                      id={item.data.id}
                      description={item.data.description}
                      repoProvider={item.data.repoProvider}
                    />
                  )}
                  {/* ui designs → Dribbble externo, sin id */}
                  {item.type === 'ui' && (
                    <WebsiteCard
                      image={item.data.CardImage}
                      title={item.data.title}
                      app_link={item.data.projectLinks}
                    />
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className='col-span-1 sm:col-span-2 lg:col-span-3 flex items-center justify-center py-24'
              >
                <div className='text-center'>
                  <p className='text-white/40 text-lg mb-1'>No items found</p>
                  <p className='text-white/20 text-sm'>Try another filter</p>
                </div>
              </motion.div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>

      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year={2026} />
    </>
  );
}
