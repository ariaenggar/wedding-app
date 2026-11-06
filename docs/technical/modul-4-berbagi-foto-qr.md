# Modul 4 — Berbagi Foto via QR Code

## Database
```
media   id, event_id, guest_id?, uploader_name, type(photo|video),
        storage_key, thumb_key, width, height, duration, size_bytes,
        source(camera|upload), group_tag (meja/sesi),
        status(pending|approved|hidden), created_at
```

## Pekerjaan
- [ ] Admin: generate QR event → URL `/e/[slug]/upload` (+ `?t=meja-5` opsional); tombol unduh PNG/PDF siap cetak (template kartu meja)
- [ ] Halaman upload: input nama (jika belum ada `guest_session`), `<input type="file" multiple accept="image/*,video/*">`
- [ ] Alur upload per file:
  1. validasi tipe & ukuran di client
  2. kompresi gambar + buat thumbnail
  3. Server Action `createUploadUrl` → signed URL (cek event aktif, kuota, rate limit)
  4. `PUT` langsung ke storage dengan progress bar
  5. Server Action `confirmUpload` → insert `media`, publish real-time `media`
- [ ] Retry otomatis untuk upload gagal (sinyal venue sering buruk)
- [ ] Validasi ulang di server (MIME via magic bytes / metadata storage), batas jumlah file per tamu
- [ ] Event private: wajib sudah check-in (cek `checkins`)
