'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/stateless/cards/ProjectCard';
import WebsiteCard from '@/components/stateless/cards/WebsiteCard';
import Menu from '@/components/stateless/menu/Menu';
import Heading from '@/components/stateless/Heading';
import CallToAction from '@/components/stateless/CallToAction';
import Footer from '@/components/stateless/Footer';
import { projects } from '@/data/projects';
import { websites } from '@/data/websites';
import { uiDesigns } from '@/data/UIDesigns';

// Constants
const FILTER_CATEGORIES = ['All', 'Projects', 'Websites', 'UI Designs'];

// Animation variants - Extracted to constants for reusability
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  },
};

/**
 * Custom hook to handle filtering logic
 * @param {string} filter - Current active filter
 * @returns {Object} Filtered items for each category
 */
const useProjectFilter = (filter) => {
  return useMemo(() => {
    const filterItems = (items) => {
      if (filter === 'All') return items;
      return items.filter((item) => item.category === filter);
    };

    return {
      filteredProjects: filterItems(projects),
      filteredWebsites: filterItems(websites),
      filteredUiDesigns: filterItems(uiDesigns),
    };
  }, [filter]);
};

/**
 * Filter buttons component
 */
const FilterButtons = ({ categories, activeFilter, onFilterChange }) => (
  <nav
    className='flex justify-center mt-10 flex-wrap gap-2'
    aria-label='Project filters'
  >
    {categories.map((category) => (
      <button
        key={category}
        className={`px-4 py-2 rounded-full transition-colors duration-200 ${
          activeFilter === category
            ? 'bg-orange-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange(category)}
        aria-pressed={activeFilter === category}
        aria-label={`Filter by ${category}`}
      >
        {category}
      </button>
    ))}
  </nav>
);

/**
 * Project grid component - Handles rendering of all project types
 */
const ProjectGrid = ({ websites, projects, uiDesigns }) => {
  // Check if there are no results
  const isEmpty =
    websites.length === 0 && projects.length === 0 && uiDesigns.length === 0;

  if (isEmpty) {
    return (
      <div className='text-center py-20'>
        <p className='text-gray-500 text-lg'>
          No projects found for this category.
        </p>
      </div>
    );
  }

  return (
    <motion.section
      variants={ANIMATION_VARIANTS.container}
      initial='hidden'
      animate='show'
      layout
      className='grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr 
                 sm:w-5/6 md:w-4/5 lg:w-full xl:w-5/6 mx-auto cursor-pointer mt-20 mb-16 px-4'
    >
      {/* Render Websites */}
      {websites.map((project) => (
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          key={`website-${project.id}`}
          className='mx-auto w-full'
          layout
        >
          <WebsiteCard
            image={project.CardImage}
            title={project.title}
            app_link={project.projectLinks}
            id={project.id}
          />
        </motion.div>
      ))}

      {/* Render Projects */}
      {projects.map((project) => (
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          key={`project-${project.id}`}
          className='mx-auto w-full'
          layout
        >
          <ProjectCard
            image={project.CardImage}
            title={project.title}
            app_link={project.projectLinks}
            repo_link={project.repoLink}
            id={project.id}
            description={project.description}
            repoProvider={project.repoProvider}
          />
        </motion.div>
      ))}

      {/* Render UI Designs */}
      {uiDesigns.map((project) => (
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          key={`ui-${project.id}`}
          className='mx-auto w-full'
          layout
        >
          <WebsiteCard
            image={project.CardImage}
            title={project.title}
            app_link={project.projectLinks}
            id={project.id}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

/**
 * Main Projects page component
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { filteredProjects, filteredWebsites, filteredUiDesigns } =
    useProjectFilter(activeFilter);

  return (
    <>
      <div className='bg-projects min-h-screen'>
        <Menu />

        <Heading title1='My' title2='Work' subtitle='Explore my projects' />

        <FilterButtons
          categories={FILTER_CATEGORIES}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectGrid
          websites={filteredWebsites}
          projects={filteredProjects}
          uiDesigns={filteredUiDesigns}
        />
      </div>

      <CallToAction />
      <Footer text='Copyright Michaelxk ©' year='2024' />
    </>
  );
};

export default Projects;
