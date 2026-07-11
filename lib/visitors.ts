import { neon } from '@neondatabase/serverless'

export interface VisitorData {
  uniqueVisitors: number
}

// Lazy SQL executor client to prevent crash during Next.js build when environment variables are absent
let sqlInstance: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sqlInstance) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      console.warn("WARNING: DATABASE_URL environment variable is not defined.");
      // Return a dummy function to gracefully degrade and prevent crash
      return async () => [];
    }
    sqlInstance = neon(url);
  }
  return sqlInstance;
}

export function generateVisitorId(ip: string | null, userAgent: string | null, fingerprint?: string): string {
  if (fingerprint) {
    return `fp:${fingerprint}`
  }

  const ipPart = ip || 'unknown'
  const uaPart = userAgent || 'unknown'
  return Buffer.from(`${ipPart}-${uaPart}`).toString('base64').slice(0, 32)
}

export async function initVisitorTable(): Promise<void> {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      visitor_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  try {
    const sql = getSql();
    // Insert visitor if not exists
    await sql`
      INSERT INTO visitors (visitor_id)
      VALUES (${visitorId})
      ON CONFLICT (visitor_id) DO NOTHING
    `

    // Get count
    const result = (await sql`SELECT COUNT(*) as count FROM visitors`) as { count: string }[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return { uniqueVisitors: 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const sql = getSql();
    const result = (await sql`SELECT COUNT(*) as count FROM visitors`) as { count: string }[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    return { uniqueVisitors: 0 }
  }
}
