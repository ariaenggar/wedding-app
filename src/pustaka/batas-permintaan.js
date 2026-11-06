// =============================================================
// FILE   : src/pustaka/batas-permintaan.js
// JENIS  : Utilitas server-only (membatasi spam)
// DOKUMEN: 99-non-fungsional.md "Rate limiting"
//
// PILIHAN
//   Produksi : Upstash Ratelimit (npm i @upstash/ratelimit @upstash/redis)
//   Belajar  : Map di memori (cukup untuk dev, TIDAK andal di serverless
//              karena tiap instance punya memori sendiri)
//
// PSEUDOCODE (versi Map sederhana, "fixed window")
// hits = new Map()                         // key → { count, resetAt }
//
// rateLimit(key, { limit, windowMs })
//   now = Date.now()
//   entry = hits.get(key)
//   jika !entry atau entry.resetAt < now → entry = { count: 0, resetAt: now + windowMs }
//   entry.count++ ; hits.set(key, entry)
//   return { ok: entry.count <= limit, retryAfter: entry.resetAt - now }
//
// clientIp()                               // dari headers()
//   h = await headers()
//   return h.get("x-forwarded-for")?.split(",")[0] ?? "unknown"
//
// Contoh pakai di action:
//   const { ok } = rateLimit(`wish:${guestId ?? ip}`, { limit: 3, windowMs: 60_000 })
//   if (!ok) return { error: "Terlalu cepat, coba lagi sebentar." }
// =============================================================

export function rateLimit(key, { limit, windowMs }) {
  // TODO
  return { ok: true, retryAfter: 0 };
}

export async function clientIp() {
  // TODO
  return "unknown";
}
