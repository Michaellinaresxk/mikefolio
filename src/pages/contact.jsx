import ContactForm from '@/components/stateless/ContactForm';
import Menu from '@/components/stateless/menu/Menu';
import SocialMedia from '@/components/stateless/SocialMedia';
import Heading from '@/components/stateless/Heading';
import Footer from '@/components/stateless/Footer';
import PageHead from '@/components/PageHead';
import Link from 'next/link';

/**
 * FIX #10 — Links centralizados.
 * Los perfiles de redes adicionales (Instagram, GitLab, Udemy)
 * que no están en SocialMedia.jsx se definen aquí localmente.
 * Si necesitas que estén también en otro componente, muévelos
 * a /data/social-links.ts.
 */
const additionalLinks = [
  { name: 'Instagram UI', href: 'https://www.instagram.com/michaelxk.ui/' },
  { name: 'Instagram XK', href: 'https://www.instagram.com/xkweb' },
  { name: 'Gitlab', href: 'https://gitlab.com/Michaelxk' },
  { name: 'Udemy', href: 'https://www.udemy.com/user/michael-linares-a/' },
];

const Contact = () => {
  return (
    <>
      {/* FIX #1 — SEO */}
      <PageHead
        title='Contact'
        description="Get in touch with Michael Linares. Let's discuss your next web project."
        path='/contact'
      />

      <Menu />

      {/*
        FIX #4 — El mt-40 original (160px) dejaba un espacio enorme
        en mobile antes del contenido. Reemplazado por pt-24 sm:pt-32
        para compensar el menu fijo sin desperdiciar espacio.
      */}
      <div className='relative isolate overflow-hidden bg-black text-white pt-24 sm:pt-32 pb-20'>
        {/* Decorative blobs — solo en sm+ para no ralentizar mobile */}
        <div className='hidden sm:block' aria-hidden='true'>
          <div className='absolute -top-10 right-1/2 -z-10 mr-10 transform-gpu blur-3xl'>
            <div
              className='aspect-[1097/845] w-[40rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <div className='mx-auto max-w-4xl px-6 lg:px-8'>
          <Heading title1='How to reach' title2='me?' />

          <div className='mt-16 space-y-16'>
            {/* Social Media */}
            <section aria-labelledby='social-heading'>
              <h2
                id='social-heading'
                className='text-2xl sm:text-3xl font-bold mb-3'
              >
                Social Media
              </h2>
              <div className='bg-orange-500 h-1 w-12 mb-8' aria-hidden='true' />
              <SocialMedia />
              <p className='text-lg sm:text-xl mt-6 text-white/80 leading-relaxed max-w-2xl'>
                Whether you&apos;re looking to discuss the latest trends, decode
                the mysteries of responsive design, or even fancy sponsoring a
                digital coffee to fuel the next innovation, I&apos;m just a
                click away.
              </p>
            </section>

            {/* Additional links */}
            <section aria-labelledby='links-heading'>
              <h2
                id='links-heading'
                className='text-2xl sm:text-3xl font-bold mb-3'
              >
                Links
              </h2>
              <div className='bg-orange-500 h-1 w-12 mb-8' aria-hidden='true' />
              <ul className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {additionalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 text-lg font-bold text-white hover:text-orange-400 transition-colors'
                    >
                      {link.name} <span aria-hidden='true'>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact Form */}
            <section aria-labelledby='form-heading'>
              <ContactForm />
            </section>
          </div>
        </div>
      </div>

      <Footer text='Copyright Michaelxk ©' year='2024' />
    </>
  );
};

export default Contact;
