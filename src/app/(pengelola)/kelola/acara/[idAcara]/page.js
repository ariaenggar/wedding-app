// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/page.js
// URL    : /kelola/acara/<id>
// JENIS  : Server Component (ringkasan + edit acara)
//
// PSEUDOCODE
// EventOverviewPage({ params })
//   { idAcara } = await params
//   { event } = await requireEventAccess(idAcara)
//   angka = { tamu, rsvpHadir, totalPax, checkin, ucapan }   // Promise.all supaya paralel
//   return (
//     <>
//       <div className="grid grid-cols-3 gap-3"> kartu-kartu angka </div>
//       <p>Link undangan: {APP_URL}/u/{event.slug}</p>
//       <p>Link layar sambutan: /e/{slug}/sambutan?k=... · Link petugas: /e/{slug}/masuk</p>
//       <FormAcara mode="edit" event={event} themes={themes} />
//     </>
//   )
//
// TIPS: const [a, b, c] = await Promise.all([qA, qB, qC]) → 3 query jalan bersamaan,
// bukan berurutan.
// =============================================================

export default async function EventOverviewPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Ringkasan acara {idAcara}</p>;
}
