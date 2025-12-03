'use client';
import React, { useEffect, useRef } from 'react';
import image from '@/assets/img/planet.jpg';

const images = [image, image, image, image, image];

import Image from 'next/image';
export const MainBanner = () => {
  return (
    <>
      <div className='main-banner'>
        <div className='banner-slider'>
          <div className='slider-container'>
            {images.map((image, index) => (
              <div className='slider-item' key={index}>
                <Image
                  className='slider-item__image'
                  src={image}
                  width={100}
                  height={100}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
