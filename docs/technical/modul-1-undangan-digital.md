# Modul 1 — Undangan Digital

## Database
```
invitation_content  event_id, cover_image, couple_photos(jsonb), story, quote,
                    music_url, gallery(jsonb), bank_accounts(jsonb), qris_image
rsvps               id, guest_id, status(hadir|tidak|ragu), pax, note, updated_at
wishes              id, event_id, guest_id?, name, message, hidden, created_at
themes              id, name, config(jsonb: colors, fonts, layout variant)
```

## Halaman tamu `/u/[slug]`
- [ ] Server Component ambil event + konten + tamu (dari `?g=` token); `generateMetadata` untuk OG image (preview cantik saat dibagikan di WhatsApp)
- [ ] **Cover/landing**: "Kepada Yth. {nama tamu}", tombol "Buka Undangan" (sekaligus trigger musik — autoplay butuh interaksi user)
- [ ] **Nama & foto pengantin**: `next/image`, lazy load
- [ ] **Countdown**: client component, hitung dari `event_sessions.starts_at` dengan timezone event
- [ ] **Lokasi & waktu**: per sesi; format tanggal `Intl.DateTimeFormat('id-ID')`
- [ ] **Peta**: iframe Google Maps embed (tanpa API key) + tombol deep-link `https://maps.google.com/?q=lat,lng`
- [ ] **Tambah ke kalender**:
  - Link Google Calendar (`calendar.google.com/calendar/render?action=TEMPLATE&...`)
  - Route handler `GET /api/acara/[slug]/ics` → file `.ics` (`Content-Type: text/calendar`) untuk iOS/Outlook
- [ ] **Live streaming**: embed YouTube/IG Live dari `stream_url`, tampil hanya mendekati jam acara
- [ ] **Musik**: `<audio>` loop, tombol mute mengambang, state play/pause
- [ ] **Galeri foto & video**: grid + lightbox (mis. `yet-another-react-lightbox`), video pakai `<video preload="none">`
- [ ] **Amplop digital**: daftar rekening + tombol salin (`navigator.clipboard`), gambar QRIS + tombol unduh
- [ ] **RSVP**: form → Server Action `submitRsvp` (Zod, upsert per guest, `pax ≤ max_pax`); jika hadir & event private → tampilkan/kirim QR check-in (Modul 2)
- [ ] **Ucapan**: form → Server Action `postWish`; list dengan pagination/infinite scroll; rate limit sederhana (per guest/IP); anti-XSS (render sebagai teks, jangan `dangerouslySetInnerHTML`)
- [ ] Animasi scroll ringan (CSS / `IntersectionObserver`), uji di HP low-end

## Tema
- [ ] Tema = CSS variables (`--color-primary`, `--font-heading`, …) yang di-inject dari `themes.config`
- [ ] 2–3 tema awal + varian layout section
- [ ] Preview tema di dashboard

## Admin
- [ ] Editor konten undangan (form per section + upload foto)
- [ ] Manajemen tamu: CRUD, **import CSV/Excel** (`papaparse` / `xlsx`), kategori, max_pax, nomor meja
- [ ] Generate link personal per tamu + tombol "Kirim via WhatsApp" (`https://wa.me/<no>?text=<pesan+link>`)
- [ ] Rekap RSVP (hadir/tidak/belum jawab, total pax) + export CSV
- [ ] Moderasi ucapan (sembunyikan)
