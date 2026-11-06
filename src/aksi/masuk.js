"use server";
// =============================================================
// FILE   : src/aksi/masuk.js
// JENIS  : Server Actions (login/logout admin & petugas)
// DOKUMEN: 01-fondasi.md "Auth & otorisasi"
//
// PSEUDOCODE
// loginAdmin(prevState, formData)
//   { email, password } = validasi
//   rateLimit(`login:${email}`, { limit: 5, windowMs: 15 menit })
//   user = users where email
//   jika !user atau !(await verifySecret(password, user.password_hash))
//     return { error: "Email atau password salah" }   // pesan sama → tidak bocorkan email terdaftar
//   await createAdminSession(user.id)
//   redirect(formData.get("next") || "/kelola")
//
// logoutAdmin()
//   (await cookies()).delete("admin_session"); redirect("/masuk")
//
// loginStaff(prevState, formData)           // halaman /e/[slug]/masuk
//   { slug, pin } = validasi pinSchema
//   rateLimit(`pin:${slug}:${ip}`, { limit: 5, windowMs: 5 menit })   // PIN pendek → wajib dibatasi
//   event = getEventBySlug(slug)
//   staffList = event_staff where event_id AND active
//   staff = cari yang verifySecret(pin, s.pin_hash) benar
//   jika !staff → return { error: "PIN salah" }
//   await createStaffSession(staff.id, event.id)
//   redirect(`/e/${slug}/pindai`)
// =============================================================

export async function loginAdmin(prevState, formData) {
  return { error: "TODO: loginAdmin" };
}

export async function logoutAdmin() {
  // TODO
}

export async function loginStaff(prevState, formData) {
  return { error: "TODO: loginStaff" };
}
