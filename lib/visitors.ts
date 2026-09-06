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

export async function fetchKomarevVisitors(): Promise<number | null> {
  try {
    const res = await fetch('https://komarev.com/ghpvc/?username=Rimanshupatel', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PortfolioVisitorCounter/1.0)',
      },
    })
    if (!res.ok) return null
    const svg = await res.text()
    const matches = svg.match(/<text[^>]*>([\d,]+)<\/text>/g)
    if (matches && matches.length > 0) {
      const rawText = matches[matches.length - 1].replace(/<[^>]+>/g, '').trim()
      const count = parseInt(rawText.replace(/,/g, ''), 10)
      return isNaN(count) ? null : count
    }
    return null
  } catch (err) {
    console.error('Error fetching Komarev visitor count:', err)
    return null
  }
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
    // Check live komarev count first
    const liveCount = await fetchKomarevVisitors();
    if (liveCount !== null && liveCount > 0) {
      return { uniqueVisitors: liveCount };
    }

    const sql = getSql();
    await sql`
      INSERT INTO visitors (visitor_id)
      VALUES (${visitorId})
      ON CONFLICT (visitor_id) DO NOTHING
    `

    const result = (await sql`SELECT COUNT(*) as count FROM visitors`) as { count: string }[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    const liveCount = await fetchKomarevVisitors();
    return { uniqueVisitors: liveCount ?? 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const liveCount = await fetchKomarevVisitors();
    if (liveCount !== null && liveCount > 0) {
      return { uniqueVisitors: liveCount };
    }

    const sql = getSql();
    const result = (await sql`SELECT COUNT(*) as count FROM visitors`) as { count: string }[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    const liveCount = await fetchKomarevVisitors();
    return { uniqueVisitors: liveCount ?? 0 }
  }
}
