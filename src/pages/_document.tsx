import { Html, Head, Main, NextScript } from 'next/document';

/**
 * _document.tsx — Base HTML shell
 *
 * Aquí van SOLO las cosas que no cambian entre páginas:
 * - viewport (critical para mobile)
 * - theme-color (barra del browser en Android/iOS)
 * - favicon
 *
 * El SEO por página (title, description, og:image) va en cada
 * page con <Head> de next/head — no aquí, porque este archivo
 * se renderiza una sola vez en el server y no tiene acceso a
 * props dinámicas por página.
 */
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

        {/* Theme color — barra del browser en mobile Chrome/Safari */}
        <meta name='theme-color' content='#0c0f17' />

        {/* Preconnect a Cloudinary para que el video del hero cargue antes */}
        <link rel='preconnect' href='https://res.cloudinary.com' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
