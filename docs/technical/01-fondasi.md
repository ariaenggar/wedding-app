# Fondasi Bersama

## Setup proyek
- [ ] Install & konfigurasi: `drizzle-orm`, `drizzle-kit`, driver Postgres, `zod`, `nanoid`
- [ ] File `.env` (DB URL, storage key, realtime key, `TOKEN_SECRET`) + `.env.example`
- [ ] Setup migrasi DB (`drizzle-kit generate/migrate`)
- [ ] Layout dasar + design tokens Tailwind (warna, font tema)
- [ ] Error/loading/not-found pages

## Skema database inti

```
users            id, email, password_hash, name, role(owner|admin), created_at
events           id, owner_id, slug(unique), title, groom_name, bride_name,
                 visibility(public|private), theme_id, timezone,
                 album_mode(instant|reveal), album_reveal_at,
                 settings(jsonb), created_at
event_sessions   id, event_id, type(akad|resepsi), starts_at, ends_at,
                 venue_name, address, lat, lng, maps_url, stream_url
guests           id, event_id, name, phone, email, category(vip|keluarga|umum),
                 max_pax, table_no, invite_token(unique), qr_token(unique),
                 qr_revoked_at, created_at
event_staff      id, event_id, name, pin_hash, role(usher), active
```

- [ ] Tabel + index (`events.slug`, `guests.invite_token`, `guests.qr_token`, `guests.event_id`)
- [ ] Seed data contoh untuk development

## Auth & otorisasi
- [ ] Login admin (email/password), session cookie httpOnly
- [ ] Login petugas via PIN per event (session terbatas ke 1 event, durasi pendek)
- [ ] `proxy.js`: redirect `/kelola/*` & `/e/*/pindai` jika belum login
- [ ] Helper `requireEventAccess(eventId, user)` — cek kepemilikan di setiap Server Action (jangan hanya andalkan proxy)

## Identitas tamu
- [ ] Generate `invite_token` (nanoid 16–21 karakter) per tamu
- [ ] Saat buka `/u/[slug]?g=token` → validasi → set cookie `guest_session` (signed) → dipakai modul kamera/album/undian
- [ ] Untuk event publik: tamu tanpa token boleh masuk dengan input nama (buat record guest anonim)

## Storage media
- [ ] `pustaka/storage.js`: generate **signed upload URL** (upload langsung dari browser ke storage, tidak lewat server Next — hindari batas body size serverless)
- [ ] Bucket privat + signed read URL (atau public CDN jika album publik)
- [ ] Kompresi gambar di client sebelum upload (`browser-image-compression` atau canvas → WebP/JPEG, maks ~2000px)
- [ ] Generate thumbnail (client-side saat upload, atau image transform dari storage provider)
- [ ] Batas ukuran: foto ≤ 10 MB, video ≤ 100 MB / ≤ 60 detik

## Real-time
- [ ] `pustaka/kirim-langsung.js`: wrapper subscribe/publish per channel `event:{id}:{topic}`
- [ ] Topik: `checkin`, `media`, `draw`
- [ ] Ganti `BroadcastChannel` di prototipe dengan channel real-time lintas perangkat
- [ ] Reconnect otomatis + fallback polling 10 detik

## Dashboard admin (kerangka)
- [ ] CRUD event (judul, slug, pengantin, visibilitas, tema)
- [ ] CRUD sesi acara (akad/resepsi)
- [ ] Navigasi ke tiap modul
