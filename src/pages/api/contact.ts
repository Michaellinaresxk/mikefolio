// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { z } from 'zod';
import { contactFormSchema } from '@/lib/validation/contact.schema';
import { checkRateLimit } from '@/lib/security/rate-limit';
import { verifyTurnstile } from '@/lib/security/turnstile';

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  if (Array.isArray(forwarded)) return forwarded[0];
  return req.socket.remoteAddress ?? 'unknown';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = getClientIp(req);

  // 1) Rate limit by IP
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    res.setHeader('Retry-After', String(rate.retryAfterSec));
    return res
      .status(429)
      .json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const validatedData = contactFormSchema.parse(req.body);

    // 2) Honeypot — silently drop bot submissions
    if (validatedData.website && validatedData.website.length > 0) {
      console.warn('🍯 Honeypot triggered from IP:', ip);
      // Pretend success so bots don't learn they were caught
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    // 3) Turnstile verification
    const turnstileOk = await verifyTurnstile(
      validatedData.turnstileToken,
      ip,
    );
    if (!turnstileOk) {
      return res
        .status(403)
        .json({ error: 'Verification failed. Please try again.' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f97316; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Name:</strong>
              <span style="color: #6b7280;">${validatedData.name}</span>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong>
              <a href="mailto:${validatedData.email}" style="color: #f97316; text-decoration: none;">
                ${validatedData.email}
              </a>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Subject:</strong>
              <span style="color: #6b7280;">${validatedData.subject}</span>
            </p>
          </div>

          <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #f97316;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #374151;">Message:</strong>
            </p>
            <p style="color: #6b7280; white-space: pre-wrap; line-height: 1.6;">
              ${validatedData.message}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
            <p>Sent from Michaelxk Portfolio</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error de Resend:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log('✅ Email enviado:', data);
    return res.status(200).json({
      message: 'Email sent successfully',
      id: data?.id,
    });
  } catch (error) {
    console.error('❌ Error general:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid form data',
        details: error.issues,
      });
    }

    return res.status(500).json({ error: 'Internal server error' });
  }
}
