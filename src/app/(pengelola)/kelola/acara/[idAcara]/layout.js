// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/layout.js
// JENIS  : Layout bersarang (tab navigasi per modul untuk satu acara)
//
// KONSEP
// - Layout bersarang: kelola/layout.js → events/[idAcara]/layout.js → page.js
// - Layout juga menerima params (Promise) → await params
//
// PSEUDOCODE
// EventLayout({ children, params })
//   { idAcara } = await params
//   { event } = await requireEventAccess(idAcara)
//   TABS = [
//     ["", "Ringkasan"], ["sesi", "Sesi Acara"], ["undangan", "Konten Undangan"],
//     ["tamu", "Tamu"], ["rsvp", "RSVP"], ["ucapan", "Ucapan"],
//     ["kehadiran", "Kehadiran"], ["petugas", "Petugas"],
//   ]
//   return (
//     <>
//       <h1>{event.title}</h1>
//       <nav className="flex gap-2 overflow-x-auto">
//         {TABS.map(([path, label]) => <Link key={path} href={`/kelola/acara/${idAcara}/${path}`}>{label}</Link>)}
//       </nav>
//       {children}
//     </>
//   )
//   (bonus: highlight tab aktif → komponen client kecil dengan usePathname())
// =============================================================

export default async function EventLayout({ children, params }) {
  const { idAcara } = await params;
  // TODO: requireEventAccess + tab navigasi
  return <section data-event={idAcara}>{children}</section>;
}
