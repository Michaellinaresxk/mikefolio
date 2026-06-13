'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    number: '01',
    title: 'Web Design',
    description:
      'Your web presence is your first impression. I design interfaces that are intentional, on-brand, and built to convert — not just look good in Figma.',
    tags: ['UI / UX', 'Figma', 'Responsive'],
    href: '/contact',
    cta: "Let's work together",
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Production-ready React and Vue applications with clean architecture, optimized bundles, and Core Web Vitals that actually move the needle.',
    tags: ['React', 'Vue.js', 'Next.js', 'TypeScript'],
    href: '/contact',
    cta: 'Start a project',
  },
  {
    number: '03',
    title: 'Mobile Apps',
    description:
      'Cross-platform React Native apps with real-time features, AI integrations, and the same attention to UX detail as the web work.',
    tags: ['React Native', 'Expo', 'Firebase'],
    href: '/projects',
    cta: 'See examples',
  },
];

const STATS = [
  { value: '6+', label: 'Years of experience' },
  { value: '30+', label: 'Projects delivered' },
  { value: '11K+', label: 'Udemy students' },
  { value: '3', label: 'Countries worked in' },
];

export default function ServicesSection() {
  return (
    <section className='relative w-full bg-black py-20 sm:py-32 overflow-hidden'>
      {/* Subtle grid bg */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.025]'
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden='true'
      />

      <div className='relative z-10 max-w-6xl mx-auto px-5 sm:px-8'>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16 sm:mb-20'
        >
          <p className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'>
            What I do
          </p>
          <h2
            className='font-bold text-white leading-tight'
            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
          >
            Turning ideas into{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
              production
            </span>
          </h2>
          <p className='text-white/40 mt-4 max-w-lg text-sm sm:text-base leading-relaxed'>
            From pixel-perfect UI to scalable frontend architecture — I own the
            full delivery cycle.
          </p>
        </motion.div>

        {/* ── Services list ── */}
        <div className='flex flex-col divide-y divide-white/[0.06]'>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className='group grid grid-cols-1 sm:grid-cols-[80px_1fr_auto] gap-4 sm:gap-8 py-8 sm:py-10 items-start'
            >
              {/* Number */}
              <span className='text-xs font-bold tracking-[0.25em] text-white/20 pt-1'>
                {s.number}
              </span>

              {/* Content */}
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-200'>
                  {s.title}
                </h3>
                <p className='text-white/50 text-sm sm:text-base leading-relaxed mb-4 max-w-xl'>
                  {s.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-[11px] font-medium text-white/40 border border-white/10 rounded-full px-3 py-1'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={s.href}
                className='flex-shrink-0 mt-1 text-sm font-semibold text-orange-500 hover:text-orange-300 transition-colors flex items-center gap-1.5 group/cta'
              >
                {s.cta}
                <span className='transition-transform duration-200 group-hover/cta:translate-x-1'>
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]'
        >
          {STATS.map((stat) => (
            <div key={stat.label} className='bg-black px-6 py-8 text-center'>
              <p className='text-2xl sm:text-3xl font-bold text-orange-400 mb-1'>
                {stat.value}
              </p>
              <p className='text-xs text-white/35 uppercase tracking-wider'>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
