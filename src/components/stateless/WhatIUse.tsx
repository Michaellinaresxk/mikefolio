import React from 'react';
import { arrow } from '../../assets/img/index';
import Image from 'next/image';

const technologiesWeb = [
  { name: 'HTML', id: 1 },
  { name: 'CSS', id: 2 },
  { name: 'JavaScript', id: 3 },
  { name: 'Vue.js', id: 4 },
  { name: 'Nuxt', id: 5 },
  { name: 'React', id: 6 },
  { name: 'Next', id: 7 },
  { name: 'Node', id: 8 },
  { name: 'Git', id: 9 },
  { name: 'Figma', id: 10 },
  { name: 'Photoshop', id: 11 },
  { name: 'Jest', id: 12 },
  { name: 'SCSS', id: 13 },
  { name: 'TypeScript', id: 14 },
  { name: 'React Native', id: 15 },
  { name: 'GraphQL', id: 16 },
];

export const WhatIUse = () => {
  return (
    <section aria-labelledby='what-i-use-heading' className='py-16 sm:py-24'>
      {/* Title block */}
      <div className='text-center px-5'>
        {/*
          Old: text-7xl (4.5rem) with no responsive scaling — enormous on
          desktop, unreadable on phones if the viewport is narrow.
        */}
        <h2
          id='what-i-use-heading'
          className='font-bold'
          style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)' }}
        >
          What I <span className='font-normal text-orange-500'>Use</span>
        </h2>
        <p
          className='text-white px-4 mt-4 max-w-xl mx-auto'
          style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
        >
          I am passionate about the{' '}
          <span className='text-orange-500'>world of JavaScript</span> and its
          ecosystems.
        </p>
      </div>

      {/* Tech pills */}
      <div className='flex flex-wrap justify-center gap-3 px-5 sm:px-8 mt-10 max-w-4xl mx-auto'>
        {technologiesWeb.map((tech) => (
          <span
            key={tech.id}
            className='bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full
              px-4 sm:px-6 py-2 text-sm sm:text-base shadow-lg
              border border-gray-700/50
              select-none'
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Tools copy block */}
      <div className='flex flex-col lg:flex-row justify-center items-center mt-16 px-5 sm:px-10 lg:pl-20 max-w-5xl mx-auto gap-8'>
        <div className='w-full lg:w-10/12 text-center lg:text-left'>
          <div className='flex justify-center lg:justify-start mb-6'>
            <Image
              src={arrow}
              alt=''
              aria-hidden='true'
              className='w-[120px] sm:w-[160px] md:w-[200px] h-auto'
            />
          </div>

          <h2
            className='font-bold tracking-wide text-white mb-4'
            style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
          >
            These <span className='text-orange-500'>Tools</span>
          </h2>

          <p
            className='text-white'
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
          >
            allow me to create innovative and{' '}
            <span className='text-orange-500'>efficient solutions, </span>
            ensuring that the products I develop are not only functional but
            also scalable and easy to maintain.
          </p>
        </div>
      </div>
    </section>
  );
};
