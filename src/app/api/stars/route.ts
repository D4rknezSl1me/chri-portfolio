import { NextResponse } from 'next/server'
import Redis from 'ioredis'

export const runtime = 'nodejs'
// Always hit Redis live; never let Next cache the count.
export const dynamic = 'force-dynamic'

const KEY = 'stars'

// Baseline the visible count starts from, so it stays continuous with the
// pre-Redis number instead of dropping to real-stars-only. Redis holds the
// *new* real stars; the displayed total is BASE + that. Set to 0 to show only
// genuinely-recorded stars.
const BASE_STARS = 128

// One shared connection, reused across route invocations (Next keeps the module
// warm between requests). Created lazily so a missing REDIS_URL just disables
// the live count instead of crashing the route.
let client: Redis | null = null
function redis(): Redis | null {
  const url = process.env.REDIS_URL
  if (!url) return null
  if (!client) {
    client = new Redis(url, { maxRetriesPerRequest: 2, lazyConnect: false })
    client.on('error', (err) => console.warn('[stars] redis error:', err.message))
  }
  return client
}

// GET /api/stars — current total. `live` is false when Redis is unwired,
// signalling the number is just the seeded baseline.
export async function GET() {
  const r = redis()
  if (!r) return NextResponse.json({ count: BASE_STARS, live: false })
  try {
    const n = await r.get(KEY)
    return NextResponse.json({ count: BASE_STARS + (Number(n) || 0), live: true })
  } catch {
    return NextResponse.json({ count: BASE_STARS, live: false })
  }
}

// POST /api/stars — record one star and return the new total. The browser gates
// repeat stars via localStorage, so this is only hit once per visitor.
export async function POST() {
  const r = redis()
  if (!r) return NextResponse.json({ count: BASE_STARS, live: false })
  try {
    const n = await r.incr(KEY)
    return NextResponse.json({ count: BASE_STARS + n, live: true })
  } catch {
    return NextResponse.json({ error: 'Could not record star.' }, { status: 502 })
  }
}
