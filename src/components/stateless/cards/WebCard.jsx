'use client';
import Image from 'next/image';

export const WebCard = ({ title, imageUrl, cardWidht }) => {
  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
      style={{ width: cardWidht }}
    >
      <div className='relative'>
        <Image
          className='w-full object-cover'
          src={imageUrl}
          alt={`Project titled ${title}`}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
      </div>
    </div>
  );
};
