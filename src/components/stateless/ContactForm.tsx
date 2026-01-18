'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactFormData,
  contactFormSchema,
} from '../../../lib/validation/contact.schema';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    }
  };

  return (
    <div className='mx-auto max-w-2xl mt-20'>
      <h2 className='text-3xl font-bold mb-5 sm:text-4xl'>Get In Touch</h2>
      <div className='bg-orange-500 h-1 w-16 mb-10'></div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        {/* Name Field */}
        <div>
          <label htmlFor='name' className='block text-sm font-medium mb-2'>
            Name *
          </label>
          <input
            {...register('name')}
            type='text'
            id='name'
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                     focus:border-orange-500 focus:outline-none focus:ring-2 
                     focus:ring-orange-500/50 transition-all'
            placeholder='Your name'
          />
          {errors.name && (
            <p className='mt-1 text-sm text-red-400'>{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-2'>
            Email *
          </label>
          <input
            {...register('email')}
            type='email'
            id='email'
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                     focus:border-orange-500 focus:outline-none focus:ring-2 
                     focus:ring-orange-500/50 transition-all'
            placeholder='your@email.com'
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-400'>{errors.email.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor='subject' className='block text-sm font-medium mb-2'>
            Subject *
          </label>
          <input
            {...register('subject')}
            type='text'
            id='subject'
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                     focus:border-orange-500 focus:outline-none focus:ring-2 
                     focus:ring-orange-500/50 transition-all'
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className='mt-1 text-sm text-red-400'>
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor='message' className='block text-sm font-medium mb-2'>
            Message *
          </label>
          <textarea
            {...register('message')}
            id='message'
            rows={5}
            className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                     focus:border-orange-500 focus:outline-none focus:ring-2 
                     focus:ring-orange-500/50 transition-all resize-none'
            placeholder='Your message...'
          />
          {errors.message && (
            <p className='mt-1 text-sm text-red-400'>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 
                   disabled:cursor-not-allowed text-white font-semibold py-3 px-6 
                   rounded-lg transition-all duration-200 transform 
                   hover:scale-[1.02] active:scale-[0.98]'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <div className='p-4 rounded-lg bg-green-500/20 border border-green-500/50'>
            <p className='text-green-400 text-sm'>
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className='p-4 rounded-lg bg-red-500/20 border border-red-500/50'>
            <p className='text-red-400 text-sm'>✗ {errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
