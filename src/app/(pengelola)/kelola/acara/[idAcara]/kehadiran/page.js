// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/kehadiran/page.js
// URL    : /kelola/acara/<id>/kehadiran
// DOKUMEN: modul-2 "Dashboard kehadiran real-time", "Log check-in + export",
//          "Toggle visibilitas"
//
// PSEUDOCODE
// KehadiranPage({ params })
//   { idAcara } = await params ; { event } = await requireEventAccess(idAcara)
//   stats = { diundang, hadir, totalPax, perKategori: { vip: {hadir, total}, ... } }
//   log   = 50 checkins terbaru JOIN guests (nama, kategori, meja, pax, method, jam, petugas)
//   return (
//     <>
//       <KehadiranLangsung eventId={idAcara} initialStats={stats} initialLog={log} />
//       <a href={`/api/ekspor/${idAcara}/checkin`}>Export CSV</a>
//     </>
//   )
// =============================================================

import KehadiranLangsung from "@/komponen/pengelola/KehadiranLangsung";

export default async function KehadiranPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <KehadiranLangsung eventId={idAcara} initialStats={null} initialLog={[]} />;
}
