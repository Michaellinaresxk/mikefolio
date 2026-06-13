import { useRef, useEffect } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) toggleOpen();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, toggleOpen]);

  return (
    <>
      {/* Toggle — siempre por encima de todo */}
      <motion.div
        className='fixed top-4 right-4 z-[10001]'
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay tap-outside */}
            <motion.div
              key='overlay'
              className='fixed inset-0 z-[9999] bg-black/50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpen()}
              aria-hidden='true'
            />

            {/* Panel — tween en vez de spring para que el exit sea limpio sin rebound */}
            <motion.nav
              key='panel'
              className='fixed top-0 right-0 z-[10000] h-full w-full sm:w-[300px] bg-gray-950/95 backdrop-blur-md shadow-2xl'
              initial={{ x: '110%' }}
              animate={{ x: 0 }}
              exit={{ x: '110%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
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
