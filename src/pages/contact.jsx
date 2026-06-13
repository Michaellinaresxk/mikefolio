import ContactForm from '@/components/stateless/ContactForm';
import Menu from '@/components/stateless/menu/Menu';
import SocialMedia from '@/components/stateless/SocialMedia';
import Footer from '@/components/stateless/Footer';
import PageHead from '@/components/PageHead';
import Link from 'next/link';
import { motion } from 'framer-motion';

const additionalLinks = [
  { name: 'Instagram UI', href: 'https://www.instagram.com/michaelxk.ui/' },
  { name: 'Instagram XK', href: 'https://www.instagram.com/xkweb' },
  { name: 'Gitlab', href: 'https://gitlab.com/Michaelxk' },
  { name: 'Udemy', href: 'https://www.udemy.com/user/michael-linares-a/' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
});

const Contact = () => {
  return (
    <>
      <PageHead
        title='Contact'
        description="Get in touch with Michael Linares. Let's discuss your next web project."
        path='/contact'
      />

      <div className='min-h-screen bg-black text-white'>
        <Menu />

        {/* ── Hero ── */}
        <section className='relative px-5 sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-white/[0.06] overflow-hidden'>
          {/* Glow */}
          <div
            className='absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none'
            style={{
              background:
                'radial-gradient(ellipse at top right, rgba(249,115,22,0.08) 0%, transparent 65%)',
            }}
            aria-hidden='true'
          />

          <div className='relative z-10 max-w-4xl mx-auto'>
            <motion.p
              {...fadeUp(0)}
              className='text-xs font-semibold tracking-[0.3em] uppercase text-orange-500/70 mb-4'
            >
              Contact
            </motion.p>
            <motion.h1
              {...fadeUp(0.05)}
              className='font-bold text-white leading-tight'
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              How to{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300'>
                reach me
              </span>
            </motion.h1>
            <motion.p
              {...fadeUp(0.1)}
              className='text-white/40 mt-4 text-sm sm:text-base max-w-md'
            >
              Available for freelance projects, full-time roles, and
              collaborations. Warsaw-based, remote-friendly.
            </motion.p>
          </div>
        </section>

        {/* ── Body ── */}
        <div className='max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 space-y-16'>
          {/* Social */}
          <motion.section {...fadeUp(0)} aria-labelledby='social-heading'>
            <h2
              id='social-heading'
              className='text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-6'
            >
              Social Media
            </h2>
            <SocialMedia />
            <p className='text-white/40 text-sm sm:text-base mt-5 leading-relaxed max-w-lg'>
              Whether you want to discuss the latest in frontend, talk shop
              about performance, or just say hi — I&apos;m a click away.
            </p>
          </motion.section>

          {/* Divider */}
          <div className='border-t border-white/[0.06]' />

          {/* Links */}
          <motion.section {...fadeUp(0)} aria-labelledby='links-heading'>
            <h2
              id='links-heading'
              className='text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-6'
            >
              More links
            </h2>
            <ul className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
              {additionalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center justify-between gap-2 px-4 py-3 rounded-xl
                      border border-white/[0.06] hover:border-orange-500/40
                      text-sm font-semibold text-white/60 hover:text-white
                      transition-all duration-200'
                  >
                    {link.name}
                    <span className='text-white/25 group-hover:text-orange-500 transition-colors'>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Divider */}
          <div className='border-t border-white/[0.06]' />

          {/* Form */}
          <motion.section {...fadeUp(0)} aria-labelledby='form-heading'>
            <h2
              id='form-heading'
              className='text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-8'
            >
              Get in touch
            </h2>
            <ContactForm />
          </motion.section>
        </div>
      </div>

      <Footer text='Copyright Michaelxk ©' year={2026} />
    </>
  );
};

export default Contact;
