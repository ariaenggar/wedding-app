// =============================================================
// FILE   : src/app/(petugas)/e/[slug]/pindai/page.js
// URL    : /e/budi-ani/pindai
// JENIS  : Server Component → PemindaiQr + CariTamuManual (Client)
// DOKUMEN: modul-2-checkin-qr.md "Sisi petugas"
//
// KONSEP
// - proxy.js sudah redirect jika cookie tidak ada, tapi halaman ini TETAP
//   memverifikasi sesi (getStaff) karena cookie bisa saja palsu/kedaluwarsa.
// - Prototipe lama: src/app/penerima-tamu/page.js (input nama manual).
//
// PSEUDOCODE
// ScanPage({ params })
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   staff = await getStaff(event.id); jika !staff → redirect(`/e/${slug}/masuk`)
//   stats = { hadir: count checkins, diundang: count guests, pax: sum pax_arrived }
//   return (
//     <main>
//       <header> {event.title} · petugas {staff.name} · {stats.hadir}/{stats.diundang} hadir </header>
//       <PemindaiQr slug={slug} />
//       <CariTamuManual slug={slug} />
//     </main>
//   )
// =============================================================

import PemindaiQr from "@/komponen/petugas/PemindaiQr";
import CariTamuManual from "@/komponen/petugas/CariTamuManual";

export default async function ScanPage({ params }) {
  const { slug } = await params;
  // TODO: getStaff + statistik
  return (
    <main className="p-4">
      <PemindaiQr slug={slug} />
      <CariTamuManual slug={slug} />
    </main>
  );
}
