# Modul 3 — Kamera Sekali Pakai Digital

## Database
- `media.source = 'camera'`
- `guest_camera_quota`: guest_id, shots_total, shots_used (atau hitung dari `media`)

## Pekerjaan (melanjutkan `src/app/kamera`)
- [ ] Pindahkan ke `/e/[slug]/kamera`, wajib `guest_session`
- [ ] Perbaikan prototipe: stop stream di cleanup `useEffect`, tangani izin ditolak, tombol ganti kamera depan/belakang, flash (`torch` via `ImageCapture`/track constraints jika didukung)
- [ ] Hasil canvas → `canvas.toBlob('image/jpeg', 0.85)` (bukan data URL) → alur upload Modul 4
- [ ] **Kuota jepretan**: cek & kurangi di server (Server Action atomik, `UPDATE ... WHERE shots_used < shots_total`), tampilkan sisa
- [ ] Filter film: preset `ctx.filter` + overlay grain (noise texture) + stempel tanggal ala kamera analog
- [ ] **Efek "cuci film"**: tamu tidak bisa melihat hasil sebelum `album_reveal_at`; hanya tampil counter "12/24 terpakai"
- [ ] Antrean upload offline (IndexedDB) agar jepretan tidak hilang saat sinyal putus
- [ ] UI full-screen ala kamera (shutter besar, haptic)
- [ ] Uji kompatibilitas: iOS Safari (wajib HTTPS, `playsInline`), Android Chrome
