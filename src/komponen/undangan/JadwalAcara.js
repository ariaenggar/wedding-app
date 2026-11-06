// =============================================================
// FILE   : src/komponen/undangan/JadwalAcara.js
// JENIS  : Server Component (tidak ada interaksi → tidak perlu "use client")
// DOKUMEN: modul-1 "Lokasi & waktu"
//
// KONSEP
// - Komponen tanpa state/klik sebaiknya tetap Server Component:
//   JavaScript-nya tidak dikirim ke HP tamu → halaman lebih ringan.
//
// PSEUDOCODE
// props: { sessions, timeZone }
// return sessions.map((s) => (
//   <article key={s.id}>
//     <h3>{s.type === "akad" ? "Akad Nikah" : "Resepsi"}</h3>
//     <p>{formatTanggal(s.starts_at, timeZone)}</p>
//     <p>{formatJam(s.starts_at, timeZone)} – {formatJam(s.ends_at, timeZone)}</p>
//     <p><b>{s.venue_name}</b><br />{s.address}</p>
//     <a href={mapsDeepLink(s.lat, s.lng)} target="_blank" rel="noopener">Buka di Maps</a>
//   </article>
// ))
// =============================================================

export default function JadwalAcara({ sessions = [], timeZone }) {
  // TODO
  return null;
}
