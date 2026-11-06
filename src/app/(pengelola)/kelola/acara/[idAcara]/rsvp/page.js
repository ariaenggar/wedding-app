// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/rsvp/page.js
// URL    : /kelola/acara/<id>/rsvp
// DOKUMEN: modul-1 "Rekap RSVP (hadir/tidak/belum jawab, total pax) + export CSV"
//
// PSEUDOCODE
// RsvpPage({ params })
//   { idAcara } = await params ; await requireEventAccess(idAcara)
//   rows = guests LEFT JOIN rsvps where event_id
//   rekap = {
//     hadir:  rows.filter(r => r.status === "hadir").length,
//     tidak:  ... "tidak", ragu: ... "ragu",
//     belum:  rows.filter(r => !r.status).length,
//     pax:    sum pax untuk yang hadir,
//   }
//   return (
//     <>
//       kartu rekap (5 angka)
//       tabel: nama · status · pax · catatan · updated_at
//       <a href={`/api/ekspor/${idAcara}/rsvp`}>Export CSV</a>
//     </>
//   )
// =============================================================

export default async function RsvpPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Rekap RSVP {idAcara}</p>;
}
