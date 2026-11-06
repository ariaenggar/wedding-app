// =============================================================
// FILE   : src/komponen/undangan/QrCheckin.js
// JENIS  : Server Component (async!) — QR dibuat di server
// DOKUMEN: modul-2 "Sisi tamu"
//
// KONSEP
// - Server Component boleh async dan dirender di dalam page lain.
// - qr_token tidak pernah dikirim mentah ke JS client; yang dikirim
//   hanya gambar QR (data URL).
//
// PSEUDOCODE
// props: { slug, qrToken }
// payload = buildCheckinPayload(qrToken)
// src = await toDataUrl(payload)
// return (
//   <section className="text-center">
//     <h3>QR Check-in Anda</h3>
//     <img src={src} alt="QR check-in" width={240} height={240} />
//     <p>Tunjukkan QR ini kepada penerima tamu.</p>
//     <a href={`/api/tiket/${slug}`} download>Simpan Gambar</a>
//     <a href={`/u/${slug}/tiket`}>Buka Halaman Tiket</a>
//   </section>
// )
// =============================================================

export default async function QrCheckin({ slug, qrToken }) {
  // TODO
  return null;
}
