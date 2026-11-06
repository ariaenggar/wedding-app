# Modul 5 — Live Photo Wall

## Pekerjaan
- [ ] Halaman `/e/[slug]/wall` (fullscreen, dibuka di laptop yang terhubung TV): akses via link rahasia/token display
- [ ] Load awal N foto `approved` terbaru + subscribe real-time `media`
- [ ] Queue tampilan: foto baru diprioritaskan, lalu rotasi foto lama secara acak
- [ ] Preload gambar berikutnya agar transisi mulus; gunakan thumbnail ukuran layar (≈1920px), bukan file asli
- [ ] Layout: tunggal / grid / polaroid; transisi CSS (fade/slide/ken-burns)
- [ ] Overlay: nama pengirim, ucapan terbaru (dari `wishes`), QR ajakan upload
- [ ] Pengaturan (di `events.settings`): durasi slide, layout, moderasi on/off
- [ ] **Moderasi**: jika aktif, media masuk `pending` → admin approve dari HP (halaman moderasi real-time, swipe approve/tolak)
- [ ] Ketahanan: wake lock (`navigator.wakeLock`), auto-reconnect, auto-reload jika error, sembunyikan kursor
- [ ] Opsional: sambutan nama tamu saat check-in (subscribe `checkin`)
