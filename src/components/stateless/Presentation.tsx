import { useState, useEffect } from 'react';
import SocialMedia from './SocialMedia';

interface PresentationProps {
  title1: string;
  title2: string;
  subtitle: string;
}

const Presentation = ({ title1, title2, subtitle }: PresentationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='flex flex-col relative z-10 max-w-2xl'>
      <div className='relative'>
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-tight'>
            <span
              className={`block text-white/90 drop-shadow-2xl transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-20 opacity-0 blur-md'
              }`}
            >
              {title1}
            </span>
            <span
              className={`block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-transparent bg-clip-text drop-shadow-2xl transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-20 opacity-0 blur-md'
              }`}
            >
              {title2}
            </span>
          </h1>
        </div>

        <div
          className={`absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent rounded-3xl blur-3xl -z-10 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div
        className={`relative mt-6 lg:mt-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <p className='text-lg md:text-xl lg:text-2xl font-medium text-white/80 backdrop-blur-sm'>
          <span className='relative inline-block pb-4'>
            {subtitle}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent transition-all duration-1000 delay-1000 origin-left ${
                isVisible ? 'w-full scale-x-100' : 'w-0 scale-x-0'
              }`}
            />
          </span>
        </p>
      </div>

      <div
        className={`mt-8 lg:mt-12 transition-all duration-1000 delay-[1200ms] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <SocialMedia />
      </div>
    </section>
  );
};

export default Presentation;
