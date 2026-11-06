// =============================================================
// FILE   : src/app/not-found.js
// JENIS  : File konvensi Next — tampil saat notFound() dipanggil atau URL tidak ada
// DOKUMEN: 01-fondasi.md "Error/loading/not-found pages"
//
// PSEUDOCODE
// return (
//   <main className="grid min-h-dvh place-items-center text-center">
//     <h1>Halaman tidak ditemukan</h1>
//     <p>Periksa kembali link undangan Anda.</p>
//     <Link href="/">Kembali</Link>
//   </main>
// )
// =============================================================

export default function NotFound() {
  // TODO: percantik
  return (
    <main className="grid min-h-dvh place-items-center text-center">
      <h1 className="text-2xl font-semibold">Halaman tidak ditemukan</h1>
    </main>
  );
}
