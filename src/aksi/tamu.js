"use server";
// =============================================================
// FILE   : src/aksi/tamu.js
// JENIS  : Server Actions ("use server" di baris pertama)
// DOKUMEN: 01-fondasi.md "Identitas tamu"
//
// KONSEP
// - Semua export di file "use server" = fungsi yang jalan di SERVER tapi
//   bisa dipanggil dari Client Component (Next membuatkan endpoint otomatis).
// - Karena bisa dipanggil siapa saja, SELALU validasi input di sini.
// - Server Action boleh set cookie (Server Component tidak boleh).
//
// PSEUDOCODE
// openInvitation(slug, inviteToken)        // dipanggil tombol "Buka Undangan"
//   guest = await findGuestByToken(slug, inviteToken)
//   jika !guest → return { ok: false }
//   await setGuestSession(guest)
//   return { ok: true }
// =============================================================

export async function openInvitation(slug, inviteToken) {
  // TODO
  return { ok: false };
}
