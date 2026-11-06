// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/baru/page.js
// URL    : /kelola/acara/baru
// JENIS  : Server Component + FormAcara (Client)
// DOKUMEN: 01-fondasi.md "CRUD event"
//
// PSEUDOCODE
// NewEventPage()
//   await requireAdmin()
//   themes = semua themes
//   return <> <h1>Acara Baru</h1> <FormAcara action="create" themes={themes} /> </>
//
// FormAcara dipakai juga untuk edit (lihat events/[idAcara]/page.js).
// =============================================================

import FormAcara from "@/komponen/pengelola/FormAcara";

export default async function NewEventPage() {
  // TODO
  return (
    <>
      <h1 className="text-2xl font-semibold">Acara Baru</h1>
      <FormAcara mode="create" themes={[]} />
    </>
  );
}
