"use client";
// =============================================================
// FILE   : src/app/error.js
// JENIS  : Error Boundary (WAJIB Client Component)
// DOKUMEN: 01-fondasi.md "Error/loading/not-found pages"
//
// KONSEP
// - Jika page/komponen di bawahnya melempar error saat render, Next
//   menampilkan komponen ini alih-alih layar putih.
// - Props: { error, reset } → reset() mencoba merender ulang segmen.
// - Bisa juga dibuat error.js khusus per folder (mis. untuk (layar)
//   yang otomatis reload setelah beberapa detik).
//
// PSEUDOCODE
// useEffect(() => { console.error(error) /* nanti: kirim ke Sentry */ }, [error])
// return (
//   <main className="grid min-h-dvh place-items-center text-center">
//     <h1>Terjadi kesalahan</h1>
//     <button onClick={() => reset()}>Coba lagi</button>
//   </main>
// )
// =============================================================

export default function Error({ error, reset }) {
  // TODO: useEffect untuk logging
  return (
    <main className="grid min-h-dvh place-items-center text-center">
      <h1 className="text-2xl font-semibold">Terjadi kesalahan</h1>
      <button onClick={() => reset()}>Coba lagi</button>
    </main>
  );
}
