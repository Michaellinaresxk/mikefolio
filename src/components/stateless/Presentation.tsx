import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import SocialMedia from './SocialMedia';

interface PresentationProps {
  title1: string;
  title2: string;
  subtitle: string;
}

/**
 * FIX #12 — useReducedMotion.
 * Si el usuario tiene "Reduce motion" activado en su SO,
 * el componente muestra el contenido directamente sin animaciones.
 */
const Presentation = ({ title1, title2, subtitle }: PresentationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Con reduced motion: visibilidad inmediata, sin clases de transición
  const visible = shouldReduceMotion ? true : isVisible;

  return (
    <section className='flex flex-col relative z-10 w-full max-w-2xl'>
      <div
        className={
          shouldReduceMotion
            ? ''
            : `transform transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
        }
      >
        <h1
          className='font-bold tracking-tight leading-tight'
          style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}
        >
          <span
            className={
              shouldReduceMotion
                ? 'block text-white/90'
                : `block text-white/90 drop-shadow-2xl transition-all duration-700 delay-150 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'}`
            }
          >
            {title1}
          </span>
          <span
            className={
              shouldReduceMotion
                ? 'block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text'
                : `block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text drop-shadow-2xl transition-all duration-700 delay-300 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-sm'}`
            }
          >
            {title2}
          </span>
        </h1>
      </div>

      {/* Glow */}
      <div
        className={`absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-3xl blur-3xl -z-10 pointer-events-none ${shouldReduceMotion ? 'opacity-100' : `transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}`}
        aria-hidden='true'
      />

      <div
        className={
          shouldReduceMotion
            ? 'mt-4'
            : `relative mt-4 sm:mt-6 transition-all duration-700 delay-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
        }
      >
        <p className='text-base sm:text-lg font-medium text-white/80'>
          <span className='relative inline-block pb-3'>
            {subtitle}
            <span
              className={
                shouldReduceMotion
                  ? 'absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent'
                  : `absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent transition-all duration-700 delay-[900ms] origin-left ${visible ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`
              }
              aria-hidden='true'
            />
          </span>
        </p>
      </div>

      <div
        className={
          shouldReduceMotion
            ? 'mt-6'
            : `mt-6 sm:mt-8 transition-all duration-700 delay-[1100ms] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
        }
      >
        <SocialMedia />
      </div>
    </section>
  );
};

export default Presentation;
