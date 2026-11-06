// =============================================================
// FILE   : src/app/api/acara/[slug]/ics/route.js
// URL    : GET /api/acara/budi-ani/ics
// JENIS  : Route Handler (seperti endpoint API biasa)
// DOKUMEN: modul-1 "Tambah ke kalender: file .ics untuk iOS/Outlook"
//
// KONSEP
// - route.js mengekspor fungsi bernama sesuai HTTP method: GET, POST, ...
// - Argumen kedua { params } → juga Promise di Next 16.
// - Kembalikan Response standar Web API.
//
// PSEUDOCODE
// GET(request, { params })
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   sesi  = sesi pertama (atau semua sesi → beberapa VEVENT)
//   ics = buildIcs({ uid: `${sesi.id}@wedding-system`, title: event.title,
//                    start: sesi.starts_at, end: sesi.ends_at,
//                    location: `${sesi.venue_name}, ${sesi.address}`,
//                    url: `${APP_URL}/u/${slug}` })
//   return new Response(ics, { headers: {
//     "Content-Type": "text/calendar; charset=utf-8",
//     "Content-Disposition": `attachment; filename="${slug}.ics"`,
//   }})
// =============================================================

export async function GET(request, { params }) {
  const { slug } = await params;
  // TODO
  return new Response(`TODO: file .ics untuk ${slug}`, { status: 501 });
}
