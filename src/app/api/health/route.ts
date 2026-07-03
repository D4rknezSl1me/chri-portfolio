import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Cheap, stable endpoint for k8s liveness/readiness probes.
export function GET() {
  return NextResponse.json({ status: 'ok' }, { status: 200 })
}
