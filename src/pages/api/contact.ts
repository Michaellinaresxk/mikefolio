import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = { message: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      replyTo: email,
      subject: `[Linarex Press Kit] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #0a0a0a; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; font-size: 18px; margin: 0; font-weight: 500;">
              New message — Linarex Press Kit
            </h1>
          </div>
          <div style="background: #f9f9f9; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 80px;">From</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Subject</td>
                <td style="padding: 8px 0; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
            <p style="font-size: 13px; color: #666; margin: 0 0 8px;">Message</p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res
        .status(500)
        .json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}
