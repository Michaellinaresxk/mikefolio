/**
 * components/ErrorBoundary.tsx
 *
 * FIX #14 — Captura errores de render en cualquier componente hijo.
 * ErrorBoundary debe ser un class component (limitación de React).
 */
import React, { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // En producción conectarías aquí Sentry/LogRocket/etc.
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className='min-h-screen bg-black text-white flex items-center justify-center px-6'>
          <div className='text-center max-w-md'>
            <h1 className='text-4xl font-bold text-orange-500 mb-4'>Oops</h1>
            <p className='text-gray-300 mb-6'>
              Something went wrong. Please refresh the page.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className='px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors'
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
