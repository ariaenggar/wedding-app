# Modul 6 — Album Kenangan Bersama

## Pekerjaan
- [ ] Halaman `/e/[slug]/album`:
  - mode `instant`: tampil langsung
  - mode `reveal`: sebelum `album_reveal_at` tampilkan countdown; pengecekan **di server** (jangan kirim URL media sebelum waktunya)
- [ ] Grid masonry + lightbox, infinite scroll (cursor pagination berdasarkan `created_at,id`)
- [ ] Filter: pengirim, sesi/meja, jenis (foto/video); urut terbaru/terlama
- [ ] Signed read URL berumur pendek untuk bucket privat
- [ ] Privasi album: publik / link rahasia / PIN (simpan hash PIN di `events.settings`)
- [ ] Admin: moderasi (hide/hapus — hapus juga file di storage), set mode & waktu reveal
- [ ] **Unduh semua (ZIP)** untuk pengantin: job background (karena bisa ribuan file) — gunakan queue/cron (mis. Vercel Cron / Supabase Edge Function) → hasil ZIP di storage → link unduh dikirim/ditampilkan
- [ ] Unduh satuan dari lightbox
