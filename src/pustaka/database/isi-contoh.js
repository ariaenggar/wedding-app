// =============================================================
// FILE   : src/pustaka/database/isi-contoh.js
// JENIS  : Script Node biasa (dijalankan manual: npm run db:seed)
// TUJUAN : Isi data contoh untuk development
//
// PSEUDOCODE
// 1. import db, tabel-tabel dari ./skema, generateToken dari ../token, hashSecret dari ../akses
// 2. hapus data lama (anak dulu): checkins, rsvps, wishes, guests,
//    event_sessions, event_staff, invitation_content, events, users
// 3. insert user admin   { email: "admin@contoh.id", password_hash: hash("rahasia123") }
// 4. insert event        { slug: "budi-ani", title: "The Wedding of Budi & Ani",
//                          visibility: "private" }
// 5. insert 2 sesi       akad (08.00–10.00), resepsi (11.00–14.00)
// 6. insert konten undangan (cerita, quote, 2 rekening, galeri dari /public)
// 7. insert ~20 tamu     invite_token & qr_token = generateToken()
// 8. insert 1 petugas    { name: "Meja Depan", pin_hash: hash("1234") }
// 9. console.log link contoh: `${APP_URL}/u/budi-ani?g=${tamu[0].invite_token}`
//    dan link petugas: `${APP_URL}/e/budi-ani/masuk` (PIN 1234)
// 10. process.exit(0)
// =============================================================

// TODO: tulis script seed
