"use client";
// =============================================================
// FILE   : src/komponen/pengelola/KehadiranLangsung.js
// JENIS  : Client Component (angka kehadiran bertambah real-time)
//
// KONSEP REACT
// - Data awal dari server (props) → disalin ke state → diperbarui oleh
//   pesan real-time. Ini pola "server render dulu, lalu hidup di client".
// - Alternatif paling sederhana: setiap pesan masuk → router.refresh()
//   (server render ulang dengan data terbaru). Lebih sedikit kode, sedikit
//   lebih berat. Coba dua-duanya untuk belajar!
//
// PSEUDOCODE
// props: { eventId, initialStats, initialLog }
// [stats, setStats] = useState(initialStats)
// [log, setLog]     = useState(initialLog)
//
// useKanalLangsung(eventId, "checkin", (p) => {
//   setLog(l => [p, ...l].slice(0, 50))
//   setStats(s => ({ ...s, hadir: s.hadir + 1, totalPax: s.totalPax + p.pax,
//                    perKategori: { ...s.perKategori,
//                      [p.category]: { ...s.perKategori[p.category], hadir: s.perKategori[p.category].hadir + 1 } } }))
// })
//
// return (
//   <>
//     <div> {stats.hadir} / {stats.diundang} hadir · {stats.totalPax} orang </div>
//     progress bar per kategori
//     <table> log terbaru (baris baru diberi highlight sebentar) </table>
//   </>
// )
// =============================================================

export default function KehadiranLangsung({ eventId, initialStats, initialLog = [] }) {
  // TODO
  return <p>TODO: Kehadiran real-time</p>;
}
