'use client';
import ProjectCard from '@/components/stateless/cards/ProjectCard';
import WebsiteCard from '@/components/stateless/cards/WebsiteCard';
import Menu from '@/components/stateless/menu/Menu';
import Heading from '@/components/stateless/Heading';
import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import PageHead from '@/components/PageHead';
import { projects } from '@/data/projects';
import { websites } from '@/data/websites';
import { uiDesign } from '@/data/UIDesign';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useRef, useEffect } from 'react';
import { FaFilter, FaChevronDown } from 'react-icons/fa';

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

  return (
    <>
      {/* FIX #1 — SEO */}
      <PageHead
        title='Projects'
        description='Explore the web projects, UI designs and websites built by Michael Linares.'
        path='/projects'
      />

      <div
        className='relative w-full min-h-screen bg-black'
        style={{ touchAction: 'pan-y' }}
      >
        {/* Grid bg */}
        <div
          className='fixed inset-0 opacity-[0.03] pointer-events-none'
          style={{
            backgroundImage: `linear-gradient(rgba(255,140,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          aria-hidden='true'
        />

        <Menu />

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative z-10'
        >
          <Heading title1='My' title2='Work' subtitle='Explore my projects' />
        </motion.div>

        {/* Filter — desktop */}
        <div className='hidden sm:flex relative z-10 justify-center items-center gap-2 flex-wrap px-4 mt-6 mb-10'>
          <FaFilter
            size={13}
            className='text-gray-400 mr-1'
            aria-hidden='true'
          />
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter — mobile dropdown */}
        <div className='sm:hidden relative z-50 px-4 mt-4 mb-6' ref={filterRef}>
          <button
            onClick={() => setShowMobileMenu((v) => !v)}
            aria-expanded={showMobileMenu}
            aria-haspopup='listbox'
            className='w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm border border-gray-700 active:scale-[0.98] transition-transform'
          >
            <span className='flex items-center gap-2'>
              <FaFilter size={13} className='text-orange-400' />
              {activeFilter}
            </span>
            <FaChevronDown
              size={13}
              className={`text-gray-400 transition-transform duration-200 ${showMobileMenu ? 'rotate-180' : ''}`}
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
                className='absolute top-full left-4 right-4 mt-1 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-2xl origin-top'
                style={{ zIndex: 9999 }}
              >
                {filterCategories.map((cat) => (
                  <li
                    key={cat}
                    role='option'
                    aria-selected={activeFilter === cat}
                  >
                    <button
                      className={`w-full text-left px-4 py-3.5 text-sm font-semibold transition-colors border-b border-gray-800 last:border-b-0 ${
                        activeFilter === cat
                          ? 'text-orange-400 bg-orange-500/10'
                          : 'text-gray-300 active:bg-gray-800'
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

        {/* Grid — FIX #grid: 2 cols mobile, pb-24 para el espacio inferior */}
        <AnimatePresence mode='wait'>
          <motion.section
            key={activeFilter}
            variants={containerVariants}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className='relative z-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-24'
            aria-label='Projects list'
          >
            {allFilteredItems.length > 0 ? (
              allFilteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className='w-full'
                >
                  {item.type === 'website' && (
                    <WebsiteCard
                      image={item.data.CardImage}
                      title={item.data.title}
                      app_link={item.data.projectLinks}
                      id={item.data.id}
                    />
                  )}
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
                  {item.type === 'ui' && (
                    <WebsiteCard
                      image={item.data.CardImage}
                      title={item.data.title}
                      app_link={item.data.projectLinks}
                      id={item.data.id}
                    />
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className='col-span-2 lg:col-span-3 flex items-center justify-center py-20'
              >
                <div className='text-center'>
                  <p className='text-gray-400 text-lg mb-1'>
                    No projects found
                  </p>
                  <p className='text-gray-500 text-sm'>Try another filter</p>
                </div>
              </motion.div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>

      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year='2024' />
    </>
  );
}
