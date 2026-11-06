// =============================================================
// FILE   : src/app/api/tiket/[slug]/route.js
// URL    : GET /api/tiket/budi-ani     (tombol "Simpan QR sebagai gambar")
// JENIS  : Route Handler → mengembalikan gambar PNG
// DOKUMEN: modul-2 "Tombol simpan QR sebagai gambar (PNG)"
//
// PSEUDOCODE
// GET(request, { params })
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   guest = await getGuestSession(event.id)     // cookie ikut terkirim otomatis
//   jika !guest → return new Response("Unauthorized", { status: 401 })
//   png = await toPngBuffer(buildCheckinPayload(guest.qr_token))
//   return new Response(png, { headers: {
//     "Content-Type": "image/png",
//     "Content-Disposition": `attachment; filename="tiket-${slug}.png"`,
//     "Cache-Control": "private, no-store",
//   }})
// =============================================================

export async function GET(request, { params }) {
  const { slug } = await params;
  // TODO
  return new Response(`TODO: PNG tiket ${slug}`, { status: 501 });
}
