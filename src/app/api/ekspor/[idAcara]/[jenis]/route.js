// =============================================================
// FILE   : src/app/api/ekspor/[idAcara]/[jenis]/route.js
// URL    : GET /api/ekspor/<idAcara>/tamu | rsvp | checkin
// JENIS  : Route Handler (download CSV)
// DOKUMEN: modul-1 "Rekap RSVP + export CSV",
//          modul-2 "Log check-in + export CSV/Excel"
//
// KONSEP
// - proxy.js TIDAK melindungi /api/* (lihat matcher), jadi cek akses WAJIB di sini.
//
// PSEUDOCODE
// QUERIES = {
//   tamu:     { columns: ["name","phone","category","max_pax","table_no","link"], query: ... },
//   rsvp:     { columns: ["name","status","pax","note","updated_at"], query: ... },
//   checkin:  { columns: ["name","category","table_no","pax_arrived","method","created_at","staff"], ... },// }
//
// GET(request, { params })
//   { idAcara, jenis } = await params
//   try { await requireEventAccess(idAcara) } catch { return new Response("Forbidden", { status: 403 }) }
//   def = QUERIES[jenis]; jika !def → 404
//   rows = await def.query(idAcara)
//   csv = "﻿" + toCsv(rows, def.columns)       // BOM supaya Excel membaca UTF-8 dengan benar
//   return new Response(csv, { headers: {
//     "Content-Type": "text/csv; charset=utf-8",
//     "Content-Disposition": `attachment; filename="${jenis}-${tanggal}.csv"`,
//   }})
// =============================================================

export async function GET(request, { params }) {
  const { idAcara, jenis } = await params;
  // TODO
  return new Response(`TODO: export ${jenis} untuk ${idAcara}`, { status: 501 });
}
