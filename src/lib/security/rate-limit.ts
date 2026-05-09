// Best-effort in-memory rate limiter. On Vercel serverless, instances are
// ephemeral and per-region — limits are not shared across cold starts/regions.
// For stricter limits, swap this for Vercel KV / Upstash Redis.

type Hit = { count: number; resetAt: number };

const buckets = new Map<string, Hit>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 3;

export function checkRateLimit(key: string): {
  allowed: boolean;
  retryAfterSec: number;
} {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (bucket.count >= MAX_HITS) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}
