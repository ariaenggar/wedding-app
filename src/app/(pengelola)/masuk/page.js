// =============================================================
// FILE   : src/app/(pengelola)/masuk/page.js
// URL    : /masuk?next=/kelola/...
// JENIS  : Server Component + FormMasukPengelola (Client)
// DOKUMEN: 01-fondasi.md "Login admin (email/password)"
//
// PSEUDOCODE
// LoginPage({ searchParams })
//   { next } = await searchParams
//   jika await getAdmin() → redirect(next ?? "/kelola")
//   return <main> <h1>Masuk Admin</h1> <FormMasukPengelola next={next} /> </main>
//
// FormMasukPengelola ("use client"):
//   [state, formAction, pending] = useActionState(loginAdmin, null)
//   <form action={formAction}> email, password, hidden next, error, tombol </form>
// =============================================================

import FormMasukPengelola from "@/komponen/pengelola/FormMasukPengelola";

export default async function LoginPage({ searchParams }) {
  const { next } = await searchParams;
  // TODO: redirect jika sudah login
  return (
    <main className="mx-auto max-w-sm p-8">
      <h1 className="mb-4 text-2xl font-semibold">Masuk Admin</h1>
      <FormMasukPengelola next={next} />
    </main>
  );
}
