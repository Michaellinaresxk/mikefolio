'use client';
import ProjectCard from '@/components/stateless/cards/ProjectCard';
import WebsiteCard from '@/components/stateless/cards/WebsiteCard';
import Menu from '@/components/stateless/menu/Menu';
import Heading from '@/components/stateless/Heading';
import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import { projects } from '@/data/projects';
import { websites } from '@/data/websites';
import { uiDesign } from '@/data/UIDesign';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useRef, useEffect } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';

export default function Projects() {
  const filterCategories = ['All', 'Projects', 'Websites', 'UI Designs'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const filterRef = useRef();

  // Memoize filtered data
  const filteredData = useMemo(() => {
    const filterContent = (content) => {
      if (activeFilter === 'All') return content;
      return content.filter((item) => item.category === activeFilter);
    };

    return {
      projects: filterContent(projects),
      websites: filterContent(websites),
      uiDesigns: filterContent(uiDesign),
    };
  }, [activeFilter]);

  // Combine all projects
  const allFilteredItems = useMemo(() => {
    const items = [];

    filteredData.websites.forEach((website) => {
      items.push({
        id: `website-${website.id}`,
        type: 'website',
        data: website,
      });
    });

    filteredData.projects.forEach((project) => {
      items.push({
        id: `project-${project.id}`,
        type: 'project',
        data: project,
      });
    });

    filteredData.uiDesigns.forEach((design) => {
      items.push({
        id: `ui-${design.id}`,
        type: 'ui',
        data: design,
      });
    });

    return items;
  }, [filteredData]);

  // Close mobile menu when filter is selected
  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setShowMobileMenu(false);
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showMobileMenu]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filterButtonVariants = {
    inactive: {
      backgroundColor: 'rgba(55, 65, 81, 0.5)',
      borderColor: 'rgba(107, 114, 128, 0.5)',
      color: 'rgb(209, 213, 219)',
    },
    active: {
      backgroundColor: 'rgb(249, 115, 22)',
      borderColor: 'rgb(249, 115, 22)',
      color: 'white',
      boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)',
    },
  };

  return (
    <>
      <div className='relative w-full min-h-screen bg-black overflow-x-hidden'>
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

        <Menu />

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative z-10'
        >
          <Heading title1='My' title2='Work' subtitle='Explore my projects' />
        </motion.div>

        {/* Filter Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='hidden sm:flex relative z-10 justify-center items-center gap-2 flex-wrap px-4 mt-8 mb-12'
        >
          <div className='flex items-center gap-2 text-gray-300 mr-2'>
            <FaFilter size={14} />
            <span className='text-xs sm:text-sm font-medium'>Filter:</span>
          </div>

          {filterCategories.map((category) => (
            <motion.button
              key={category}
              variants={filterButtonVariants}
              initial='inactive'
              animate={activeFilter === category ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-5 py-2 rounded-full font-semibold transition-all duration-300 border text-xs sm:text-sm ${
                activeFilter === category
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-orange-500/30'
              }`}
              onClick={() => handleFilterClick(category)}
              layout
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Filter Section - Mobile */}
        <div className='sm:hidden relative z-50 px-3 mt-4 mb-6' ref={filterRef}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className='w-full flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-orange-500 text-white font-semibold text-sm transition-all duration-300 border border-orange-500 shadow-lg shadow-orange-500/50'
          >
            <span className='flex items-center gap-2'>
              <FaFilter size={14} />
              {activeFilter}
            </span>
            <FaTimes
              size={16}
              className={`transition-transform duration-300 ${
                showMobileMenu ? 'rotate-45' : ''
              }`}
            />
          </motion.button>

          {/* Mobile Filter Dropdown */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className='absolute top-full left-3 right-3 mt-2 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl'
                style={{ zIndex: 9999 }}
              >
                {filterCategories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className={`w-full px-4 py-3 text-left font-semibold text-sm transition-all duration-300 border-b border-gray-800 last:border-b-0 ${
                      activeFilter === category
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                    onClick={() => handleFilterClick(category)}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.section
            key={activeFilter}
            variants={containerVariants}
            initial='hidden'
            animate='show'
            exit='hidden'
            layout
            className='relative z-10 grid gap-3 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 mb-16'
          >
            <AnimatePresence mode='popLayout'>
              {allFilteredItems.length > 0 ? (
                allFilteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
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
                  className='col-span-full flex items-center justify-center py-16 sm:py-20'
                >
                  <div className='text-center px-4'>
                    <p className='text-gray-400 text-base sm:text-lg mb-2'>
                      No projects found
                    </p>
                    <p className='text-gray-500 text-xs sm:text-sm'>
                      Try another filter
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </AnimatePresence>

        {/* Decorative Elements - Mobile Optimized */}
        <div className='absolute top-10 -right-20 w-40 h-40 sm:w-72 sm:h-72 bg-orange-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
        <div className='absolute -bottom-20 -left-20 w-40 h-40 sm:w-72 sm:h-72 bg-red-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />
      </div>

      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year='2024' />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #ff8c00, #ff6347);
          border-radius: 10px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
