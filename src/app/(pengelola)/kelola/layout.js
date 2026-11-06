// =============================================================
// FILE   : src/app/(pengelola)/kelola/layout.js
// JENIS  : Layout Server Component (kerangka semua halaman /kelola/*)
// DOKUMEN: 01-fondasi.md "Dashboard admin (kerangka)"
//
// KONSEP
// - Layout cocok untuk header/sidebar yang sama di semua halaman admin.
// - JANGAN hanya mengandalkan cek login di layout: layout tidak dirender
//   ulang pada setiap navigasi, dan Server Action tidak lewat layout.
//   Cek tetap dilakukan di page (requireAdmin / requireEventAccess).
//
// PSEUDOCODE
// DashboardLayout({ children })
//   user = await requireAdmin()
//   return (
//     <div className="min-h-dvh grid md:grid-cols-[220px_1fr]">
//       <aside> logo · <Link href="/kelola">Acara Saya</Link> · {user.name}
//               <form action={logoutAdmin}><button>Keluar</button></form> </aside>
//       <main className="p-6">{children}</main>
//     </div>
//   )
// =============================================================

export default async function DashboardLayout({ children }) {
  // TODO: requireAdmin + sidebar
  return <div className="min-h-dvh p-6">{children}</div>;
}
