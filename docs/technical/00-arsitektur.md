# Keputusan Arsitektur (perlu diputuskan dulu)

| Kebutuhan | Rekomendasi | Alternatif |
|---|---|---|
| Database | **PostgreSQL** (Supabase / Neon) | MySQL |
| ORM | **Drizzle ORM** (ringan, cocok JS) | Prisma |
| Storage foto/video | **Supabase Storage** atau **Cloudflare R2** (S3-compatible, tanpa biaya egress) | AWS S3 |
| Real-time (undian, photo wall, check-in) | **Supabase Realtime** (Postgres changes / broadcast) | Pusher, Ably, SSE sendiri (jika self-host server Node, bukan serverless) |
| Auth admin & petugas | **Auth.js** atau Supabase Auth (email/password), petugas pakai PIN | Clerk |
| Identitas tamu | **Tanpa login** — token unik di link undangan (`/u/[slug]?g=<token>`) disimpan di cookie | — |
| Hosting | Vercel (Next) + Supabase | VPS + Docker (jika butuh WebSocket sendiri) |
| Validasi | **Zod** | — |

> Jika memakai Supabase, DB + Storage + Realtime + Auth cukup dari satu layanan — paling cepat untuk MVP.

## Struktur folder yang diusulkan

```
src/
  app/
    (tamu)/u/[slug]/                # undangan tamu (+ /tiket)
    (tamu)/e/[slug]/kamera/         # kamera sekali pakai        (nanti)
    (tamu)/e/[slug]/upload/         # upload via QR              (nanti)
    (tamu)/e/[slug]/album/          # shared album               (nanti)
    (tamu)/e/[slug]/undian/         # halaman peserta undian     (nanti)
    (layar)/e/[slug]/wall/          # live photo wall (TV)       (nanti)
    (layar)/e/[slug]/draw/          # layar pengundian           (nanti)
    (layar)/e/[slug]/sambutan/      # layar sambutan check-in
    (petugas)/e/[slug]/masuk/       # login PIN petugas
    (petugas)/e/[slug]/pindai/      # pemindai QR penerima tamu
    (pengelola)/masuk/              # login pengantin / penyelenggara
    (pengelola)/kelola/...          # dasbor pengantin / penyelenggara
    api/                            # route handlers (ics, tiket, ekspor, ...)
  aksi/                             # Server Actions
  hooks/                            # custom hook React (useHitungMundur, ...)
  komponen/                         # komponen React per modul
  pustaka/
    database/ (skema.js, index.js, isi-contoh.js)
    akses.js, sesi-tamu.js, data-acara.js, kirim-langsung.js,
    qr.js, token.js, validasi.js, format.js, tema.js
  proxy.js                          # proteksi /kelola & /e/[slug]/pindai
```

Nama dalam kurung `( )` adalah *route group*: hanya mengelompokkan folder dan tidak muncul di URL.
`(tamu)` = halaman di HP tamu, `(layar)` = layar besar/TV, `(petugas)` = penerima tamu, `(pengelola)` = pengantin/penyelenggara.
