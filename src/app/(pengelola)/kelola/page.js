// =============================================================
// FILE   : src/app/(pengelola)/kelola/page.js
// URL    : /kelola
// JENIS  : Server Component
//
// PSEUDOCODE
// DashboardPage()
//   user = await requireAdmin()
//   events = events where owner_id = user.id (admin melihat semua) order by created_at desc
//   return (
//     <>
//       <header> <h1>Acara Saya</h1> <Link href="/kelola/acara/baru">+ Acara Baru</Link> </header>
//       {events.length === 0 && <p>Belum ada acara.</p>}
//       <ul> {events.map(e => <li key={e.id}>
//              <Link href={`/kelola/acara/${e.id}`}>{e.title}</Link> · /u/{e.slug} · {e.visibility}
//            </li>)} </ul>
//     </>
//   )
// =============================================================

import Link from "next/link";

export default async function DashboardPage() {
  // TODO
  return (
    <>
      <h1 className="text-2xl font-semibold">Acara Saya</h1>
      <Link href="/kelola/acara/baru">+ Acara Baru</Link>
    </>
  );
}
