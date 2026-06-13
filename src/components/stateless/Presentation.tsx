import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import SocialMedia from './SocialMedia';

interface PresentationProps {
  title1: string;
  title2: string;
  subtitle: string;
}

const STACK = ['React', 'Vue.js', 'Next.js', 'TypeScript', 'React Native'];

const STATS = [
  { value: '6+', label: 'years exp.' },
  { value: '11K+', label: 'students' },
  { value: '30+', label: 'projects' },
];

const Presentation = ({ title1, title2, subtitle }: PresentationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const visible = shouldReduceMotion ? true : isVisible;

  const fadeUp = (delay: string) =>
    shouldReduceMotion
      ? ''
      : `transform transition-all duration-700 ease-out ${delay} ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`;

  return (
    <section className='flex flex-col relative z-10 w-full max-w-2xl gap-5'>
      {/* ── Name ── */}
      <div className={fadeUp('delay-0')}>
        <h1
          className='font-bold tracking-tight leading-none'
          style={{ fontSize: 'clamp(2.8rem, 11vw, 6.5rem)' }}
        >
          <span className='block text-white/90 drop-shadow-2xl'>{title1}</span>
          <span className='block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text drop-shadow-2xl'>
            {title2}
          </span>
        </h1>
      </div>

      {/* ── Subtitle + underline ── */}
      <div className={fadeUp('delay-150')}>
        <p className='text-sm sm:text-base font-medium text-white/70 relative inline-block pb-2'>
          {subtitle}
          <span
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-transparent
              ${shouldReduceMotion ? 'w-full' : `transition-all duration-700 delay-[900ms] origin-left ${visible ? 'w-full' : 'w-0'}`}`}
            aria-hidden='true'
          />
        </p>
      </div>

      {/* ── Stats row ── */}
      <div
        className={`flex items-center gap-5 sm:gap-8 ${fadeUp('delay-[300ms]')}`}
      >
        {STATS.map(({ value, label }, i) => (
          <div key={i} className='flex flex-col'>
            <span className='text-xl sm:text-2xl font-bold text-orange-400 leading-none'>
              {value}
            </span>
            <span className='text-[11px] sm:text-xs text-white/50 uppercase tracking-widest mt-0.5'>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Stack pills ── */}
      <div className={`flex flex-wrap gap-2 ${fadeUp('delay-[450ms]')}`}>
        {STACK.map((tech) => (
          <span
            key={tech}
            className='text-[11px] sm:text-xs font-medium text-white/60 border border-white/15 rounded-full px-3 py-1 bg-white/5'
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ── Social ── */}
      <div className={fadeUp('delay-[600ms]')}>
        <SocialMedia />
      </div>

      {/* Glow */}
      <div
        className='absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-3xl blur-3xl -z-10 pointer-events-none'
        aria-hidden='true'
      />
    </section>
  );
};

export default Presentation;
