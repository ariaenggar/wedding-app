// =============================================================
// FILE   : src/app/(tamu)/u/[slug]/loading.js
// JENIS  : File konvensi Next — UI sementara selama page.js masih
//          menunggu data (otomatis dibungkus <Suspense>)
//
// PSEUDOCODE
// return layar polos warna tema + teks/animasi "Memuat undangan…"
// (buat ringan: tanpa gambar besar, supaya muncul instan di HP)
// =============================================================

export default function Loading() {
  // TODO: percantik
  return <div className="p-8 text-center">Memuat undangan…</div>;
}
