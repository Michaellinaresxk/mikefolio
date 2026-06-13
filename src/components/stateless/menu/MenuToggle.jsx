import { motion } from 'framer-motion';

/**
 * Toggle standalone — sin background oscuro propio.
 * El fondo semitransparente es sutil para que el ícono se lea
 * sobre cualquier sección (video, negro, oscuro).
 */
const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='2.5'
    stroke='white'
    strokeLinecap='round'
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    aria-label='Toggle navigation menu'
    className='flex items-center justify-center w-11 h-11 rounded-full
      bg-white/10 backdrop-blur-sm border border-white/20
      hover:bg-white/20 active:scale-95
      transition-all duration-150 cursor-pointer'
  >
    <svg width='20' height='20' viewBox='0 0 23 23' aria-hidden='true'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
