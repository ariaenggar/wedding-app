// =============================================================
// FILE   : src/app/(tamu)/u/[slug]/tiket/page.js
// URL    : /u/budi-ani/tiket
// JENIS  : Server Component
// DOKUMEN: modul-2-checkin-qr.md "Sisi tamu"
//
// KONSEP
// - Halaman sangat ringan berisi QR check-in, supaya tamu bisa
//   screenshot / menyimpannya. Link ini yang dikirim via WhatsApp.
//
// PSEUDOCODE
// TiketPage({ params })
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   guest = await getGuestSession(event.id)
//   jika !guest → tampilkan "Buka link undangan Anda terlebih dahulu"
//   jika event.visibility !== "private" → tampilkan "Acara ini tidak memerlukan tiket"
//   payload = buildCheckinPayload(guest.qr_token)
//   qrSrc   = await toDataUrl(payload)
//   return (
//     <main> judul acara, nama tamu, kategori, meja, max_pax
//            <img src={qrSrc} alt="QR check-in" />
//            <a href={`/api/tiket/${slug}`} download> Simpan sebagai gambar </a>
//            tanggal & jam sesi
//     </main>
//   )
// =============================================================

export default async function TiketPage({ params }) {
  const { slug } = await params;
  // TODO
  return <main className="p-8">TODO: Tiket QR untuk {slug}</main>;
}
