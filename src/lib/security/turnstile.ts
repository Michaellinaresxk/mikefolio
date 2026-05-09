const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

type VerifyResponse = {
  success: boolean;
  'error-codes'?: string[];
  hostname?: string;
  challenge_ts?: string;
};

export async function verifyTurnstile(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not set');
    return false;
  }

  const body = new URLSearchParams();
  body.append('secret', secret);
  body.append('response', token);
  if (remoteIp) body.append('remoteip', remoteIp);

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    const data = (await res.json()) as VerifyResponse;
    if (!data.success) {
      console.warn('Turnstile verification failed:', data['error-codes']);
    }
    return data.success === true;
  } catch (err) {
    console.error('Turnstile verify network error:', err);
    return false;
  }
}
