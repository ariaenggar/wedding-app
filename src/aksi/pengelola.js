"use server";
// =============================================================
// FILE   : src/aksi/pengelola.js
// JENIS  : Server Actions untuk dashboard admin
// DOKUMEN: 01-fondasi.md "Dashboard admin", bagian "Admin" di modul-1 & modul-2
//
// POLA YANG SAMA UNTUK SEMUA FUNGSI DI FILE INI:
//   1. await requireEventAccess(eventId)   ← cek login + kepemilikan (WAJIB)
//   2. parseForm(schema, formData)         ← validasi Zod
//   3. query DB (insert/update/delete)
//   4. revalidatePath(`/kelola/acara/${eventId}/...`)  ← segarkan halaman
//   5. return { ok: true } atau { errors }
//
// ---- EVENT ----
// createEvent(prev, formData)    → requireAdmin; cek slug belum dipakai; insert; redirect ke halaman event
// updateEvent(prev, formData)    → update judul/slug/pengantin/visibility/tema/settings
//
// ---- SESI (akad/resepsi) ----
// upsertSession(prev, formData)  → insert jika tanpa id, update jika ada id
// deleteSession(eventId, sessionId)
//
// ---- KONTEN UNDANGAN ----
// saveInvitationContent(prev, formData)
//   kolom teks langsung; gambar berupa URL (untuk awal: taruh file di public/ atau link CDN)
//   bank_accounts = JSON.parse(formData.get("bank_accounts"))   // [{ bank, nomor, nama }]
//   (jika memakai "use cache" + cacheTag(`undangan:${slug}`) → updateTag(`undangan:${slug}`))
//
// ---- TAMU ----
// upsertGuest(prev, formData)    → generate invite_token & qr_token untuk tamu baru
// deleteGuest(eventId, guestId)
// importGuests(eventId, rows[])  → rows sudah di-parse di client (papaparse);
//                                  validasi tiap baris; insert batch; return { inserted, errors[] }
// regenerateQr(eventId, guestId) → qr_token baru (QR lama otomatis tidak valid lagi)
//
// ---- UCAPAN ----
// setWishHidden(eventId, wishId, hidden)
//
// ---- PETUGAS ----
// upsertStaff(prev, formData)   → pin_hash = await hashSecret(pin)
// toggleStaff(eventId, staffId, active)
// =============================================================

export async function createEvent(prevState, formData) {
  return { error: "TODO: createEvent" };
}
export async function updateEvent(prevState, formData) {
  return { error: "TODO: updateEvent" };
}
export async function upsertSession(prevState, formData) {
  return { error: "TODO: upsertSession" };
}
export async function deleteSession(eventId, sessionId) {}
export async function saveInvitationContent(prevState, formData) {
  return { error: "TODO: saveInvitationContent" };
}
export async function upsertGuest(prevState, formData) {
  return { error: "TODO: upsertGuest" };
}
export async function deleteGuest(eventId, guestId) {}
export async function importGuests(eventId, rows) {
  return { inserted: 0, errors: ["TODO: importGuests"] };
}
export async function regenerateQr(eventId, guestId) {}
export async function setWishHidden(eventId, wishId, hidden) {}
export async function upsertStaff(prevState, formData) {
  return { error: "TODO: upsertStaff" };
}
export async function toggleStaff(eventId, staffId, active) {}
