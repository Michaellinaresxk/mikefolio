'use client';
import Image from 'next/image';
import Link from 'next/link';

/**
 * FIX #2 — CLS (Cumulative Layout Shift)
 * El original: <Image src={image} className="w-full" /> sin width/height.
 * Next.js Image necesita dimensiones para reservar el espacio en el DOM
 * antes de que cargue la imagen. Sin ellas, la página brinca.
 *
 * Solución: usamos `fill` + un contenedor con aspect-ratio fijo.
 * aspect-[16/9] = ratio estándar para screenshots de proyectos.
 *
 * FIX #11 — Link al detalle del proyecto.
 * Antes solo había link externo (app_link). Ahora si el item tiene `id`,
 * el título y la imagen llevan a /projectDetails?id=X igual que ProjectCard.
 * El botón "Visit" sigue abriendo el link externo.
 */
const WebsiteCard = ({ image, title, app_link, id }) => {
  const detailHref = id ? `/projectDetails?id=${id}` : null;

  return (
    <div className='group project-card__body rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500/40 transition-all duration-300'>
      {/* Image container con aspect ratio fijo — elimina el CLS */}
      <div className='relative w-full aspect-[16/9] overflow-hidden bg-gray-800'>
        {detailHref ? (
          <Link href={detailHref}>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              sizes='(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw'
            />
          </Link>
        ) : (
          <a href={app_link} target='_blank' rel='noopener noreferrer'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              sizes='(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw'
            />
          </a>
        )}
        {/* Gradient overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
      </div>

      {/* Card footer */}
      <div className='px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2'>
        {detailHref ? (
          <Link href={detailHref} className='flex-1 min-w-0'>
            <h3 className='text-sm sm:text-base font-semibold text-white truncate hover:text-orange-400 transition-colors'>
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className='text-sm sm:text-base font-semibold text-white truncate flex-1 min-w-0'>
            {title}
          </h3>
        )}

        {app_link && (
          <a
            href={app_link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex-shrink-0 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap'
            aria-label={`Visit ${title}`}
          >
            Visit →
          </a>
        )}
      </div>

      {/* Top accent */}
      <div className='absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-600 group-hover:w-full transition-all duration-500' />
    </div>
  );
};

export default WebsiteCard;
