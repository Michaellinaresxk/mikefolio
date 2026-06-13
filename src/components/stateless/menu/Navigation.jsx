import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { photo1 } from '@/assets/img/index';

/**
 * FIXES vs original:
 * - No more `absolute top-20 right-24 w-[230px]` — that caused text to clip
 *   off-screen because 230px anchored from right-24 (96px) = overflows 320px phones.
 * - Items now use full-width links with proper padding instead of fixed w-[200px].
 * - Photo is properly square/circle: old code had `w-[180px] h-[180px]` but the
 *   containing column was narrower than that, squashing it into a pill.
 * - Stagger animation kept from original variants_menu_items pattern.
 */

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
  exit: { x: 40, opacity: 0, transition: { duration: 0.15 } },
};

const Navigation = ({ onClose }) => (
  <motion.div
    className='absolute inset-0 flex flex-col justify-between pt-20 pb-10 px-8 overflow-y-auto'
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    {/* Links */}
    <nav>
      <ul className='space-y-2' role='menu'>
        {navLinks.map(({ label, href }) => (
          <motion.li key={label} variants={itemVariants} role='none'>
            <Link
              href={href}
              onClick={onClose}
              className='block w-full py-3 text-3xl sm:text-4xl font-bold text-white hover:text-orange-400 transition-colors'
              role='menuitem'
            >
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>

    {/* Profile photo at bottom */}
    <motion.div variants={itemVariants} className='flex justify-start mt-8'>
      <div className='relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-orange-500/60 photo-animation'>
        <Image
          src={photo1}
          alt='Profile photo of Michael Linares'
          fill
          className='object-cover'
          sizes='96px'
        />
      </div>
    </motion.div>
  </motion.div>
);

export default Navigation;
