// =============================================================
// FILE   : src/app/(petugas)/e/[slug]/masuk/page.js
// URL    : /e/budi-ani/masuk
// JENIS  : Server Component + FormPinPetugas (Client)
// DOKUMEN: 01-fondasi.md "Login petugas via PIN", modul-2 "Login PIN petugas"
//
// PSEUDOCODE
// StaffLoginPage({ params })
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   jika await getStaff(event.id) → redirect(`/e/${slug}/pindai`)   // sudah login
//   return (
//     <main> <h1>Penerima Tamu — {event.title}</h1>
//            <FormPinPetugas slug={slug} /> </main>
//   )
//
// FormPinPetugas ("use client"):
//   [state, formAction, pending] = useActionState(loginStaff, null)
//   input PIN: type="password" inputMode="numeric" pattern="\d*" maxLength={6} autoComplete="off"
//   (bonus: keypad angka besar ala ATM, isi input lewat state)
// =============================================================

import FormPinPetugas from "@/komponen/petugas/FormPinPetugas";

export default async function StaffLoginPage({ params }) {
  const { slug } = await params;
  // TODO
  return (
    <main className="p-8">
      <FormPinPetugas slug={slug} />
    </main>
  );
}
