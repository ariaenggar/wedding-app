// =============================================================
// FILE   : src/app/(layar)/layout.js
// JENIS  : Layout (berlaku untuk semua halaman layar besar di dalam (layar),
//          saat ini: welcome)
// DOKUMEN: layar TV/proyektor — sembunyikan kursor, latar gelap
//
// KONSEP
// - layout.js membungkus page.js di folder yang sama & semua subfolder.
//   Layout TIDAK di-render ulang saat pindah antar halaman di bawahnya.
// - Route group "(layar)" memungkinkan layout khusus layar besar
//   tanpa mengubah URL (/e/[slug]/sambutan tetap /e/[slug]/sambutan).
//
// PSEUDOCODE
// DisplayLayout({ children })
//   return (
//     <div className="fixed inset-0 overflow-hidden bg-black text-white cursor-none select-none">
//       {children}
//     </div>
//   )
// =============================================================

export default function DisplayLayout({ children }) {
  // TODO: tambahkan cursor-none dll.
  return <div className="min-h-dvh bg-black text-white">{children}</div>;
}
