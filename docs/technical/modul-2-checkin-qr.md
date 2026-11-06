# Modul 2 — Check-in Tamu via QR (Private / Invitation-only)

*(Modul 3–7 bergantung pada status check-in.)*

## Database
```
checkins   id, event_id, guest_id, pax_arrived, staff_id, device_info,
           method(qr|manual|walkin), created_at
           UNIQUE(guest_id)  -- cegah check-in ganda (atau cek kuota pax)
```

## Token QR
- [ ] Isi QR = URL/teks berisi `qr_token` acak (≥ 128-bit) **+ HMAC signature** (`TOKEN_SECRET`) → verifikasi tanpa query jika signature salah
- [ ] Tidak menyimpan data pribadi di QR
- [ ] Revoke/regenerate: set `qr_revoked_at`, buat token baru

## Sisi tamu
- [ ] Generate QR di server (`qrcode` npm) → tampil di halaman undangan setelah RSVP "hadir" (event private)
- [ ] Tombol simpan QR sebagai gambar (PNG) + halaman `/u/[slug]/tiket` yang bisa dibuka offline (minimal: gambar tersimpan)
- [ ] Kirim QR via WhatsApp (link ke halaman tiket); email opsional (Resend/SMTP)

## Sisi petugas `/e/[slug]/pindai`
- [ ] Login PIN petugas
- [ ] Scanner kamera: `BarcodeDetector` API bila tersedia, fallback `@zxing/browser` atau `html5-qrcode` (Safari iOS belum dukung BarcodeDetector)
- [ ] Server Action `checkIn(qrPayload, paxArrived)` dalam **transaksi DB**:
  1. verifikasi signature → `TIDAK VALID`
  2. token milik event lain → `BUKAN ACARA INI`
  3. sudah check-in / pax melebihi kuota → `SUDAH CHECK-IN` + jam sebelumnya
  4. insert `checkins` → `VALID` (nama, kategori, meja, max_pax)
- [ ] UI hasil: warna besar (hijau/kuning/merah) + suara/getar (`navigator.vibrate`)
- [ ] Debounce scan (abaikan QR sama dalam 3 detik)
- [ ] Pencarian manual nama (fallback) → check-in `method=manual`
- [ ] Walk-in (opsional): buat guest baru dengan flag butuh persetujuan admin
- [ ] Mode offline (opsional): cache daftar tamu di IndexedDB, antrean check-in, sinkron saat online (resolusi konflik: server menang)
- [ ] Publish event real-time `checkin` → layar sambutan

## Layar sambutan `/e/[slug]/sambutan`
- [ ] Refactor `penerima-tamu-layar` agar subscribe ke real-time (bukan BroadcastChannel)
- [ ] Antrean animasi jika banyak tamu masuk bersamaan

## Admin
- [ ] Toggle visibilitas event public/private
- [ ] Dashboard kehadiran real-time (hadir vs diundang, per kategori, total pax)
- [ ] Log check-in + export CSV/Excel
- [ ] Kelola akun/PIN petugas
