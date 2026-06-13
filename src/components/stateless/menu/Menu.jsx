import { useRef, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

/**
 * Panel slide-in desde la derecha — sin clip-path visible en closed state.
 * El backdrop solo existe en el DOM cuando isOpen = true (AnimatePresence),
 * por lo que nunca hay nada oscuro visible mientras el menú está cerrado.
 */
const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  // Lock body scroll on iOS when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) toggleOpen();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, toggleOpen]);

  return (
    <>
      {/* Toggle button — always visible, fully transparent background */}
      <motion.div
        className='fixed top-4 right-4 z-50'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      {/* Menu panel — only mounted when open, so nothing leaks visually */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Tap-outside overlay */}
            <motion.div
              key='overlay'
              className='fixed inset-0 z-40 bg-black/50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpen()}
              aria-hidden='true'
            />

            {/* Slide-in panel from right */}
            <motion.nav
              key='panel'
              className='fixed top-0 right-0 z-40 h-full w-full sm:w-[300px] bg-gray-950/95 backdrop-blur-md shadow-2xl'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              aria-label='Main navigation'
            >
              <Navigation onClose={() => toggleOpen()} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
