import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/stateless/ErrorBoundary';

/**
 * FIX #14 — ErrorBoundary global.
 * Si un componente crashea, el usuario ve un mensaje útil
 * en vez de pantalla blanca.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
