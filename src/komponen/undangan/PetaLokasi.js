// =============================================================
// FILE   : src/komponen/undangan/PetaLokasi.js
// JENIS  : Server Component
// DOKUMEN: modul-1 "Peta"
//
// PSEUDOCODE
// props: { lat, lng, venueName }
// jika lat/lng kosong → return null
// return (
//   <iframe
//     src={mapsEmbedUrl(lat, lng)}          // tanpa API key
//     title={`Peta ${venueName}`}
//     loading="lazy"                         // baru dimuat saat discroll mendekat
//     className="w-full aspect-video rounded-xl border-0"
//     referrerPolicy="no-referrer-when-downgrade"
//   />
// )
// =============================================================

export default function PetaLokasi({ lat, lng, venueName }) {
  // TODO
  return null;
}
