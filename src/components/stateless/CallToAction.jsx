'use client';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='bg-black text-white flex items-center justify-center px-5 sm:px-8 py-16 sm:py-20 md:py-28'>
      {/*
        Old: max-w-1xl doesn't exist in Tailwind. Changed to max-w-4xl.
        Old: The separator `______________________ Let's talk!` was a string
        of underscores — on small screens it wrapped or overflowed. Replaced
        with a semantic decorative line + text.
        Old: flex-col stacked fine, md:flex-row is good, but the spacing
        between items needed adjustment for very small screens.
      */}
      <div className='w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12'>
        <div className='flex-1'>
          <h2
            className='font-bold tracking-tight'
            style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}
          >
            Got a project?
          </h2>

          <div className='flex items-center gap-4 mt-4 md:mt-6'>
            {/* Visual separator — pure CSS, no overflow risk */}
            <div
              className='flex-1 h-px bg-white/25 max-w-[180px] sm:max-w-[260px]'
              aria-hidden='true'
            />
            <p
              className='font-light text-white/80 whitespace-nowrap'
              style={{ fontSize: 'clamp(1rem, 3vw, 1.75rem)' }}
            >
              Let&apos;s talk!
            </p>
          </div>
        </div>

        <Link href='/contact' className='flex-shrink-0'>
          <button
            type='button'
            className='bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full
              px-8 py-4 md:px-12 md:py-6
              hover:from-gray-600 hover:to-gray-800
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
              active:scale-95 transition-all ease-in-out duration-300
              text-base md:text-lg shadow-lg
              min-h-[52px] min-w-[140px]'
          >
            Contact me!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
