# Wedding System — Dokumentasi Teknis

Rincian pekerjaan teknis untuk semua modul di [`milestones.txt`](../../milestones.txt), dipisah per file.

## Daftar Dokumen

| File | Isi |
|---|---|
| [00-arsitektur.md](00-arsitektur.md) | Keputusan stack & struktur folder (**putuskan dulu**) |
| [01-fondasi.md](01-fondasi.md) | Setup, skema DB inti, auth, identitas tamu, storage, real-time, dashboard |
| [modul-1-undangan-digital.md](modul-1-undangan-digital.md) | Undangan Digital |
| [modul-2-checkin-qr.md](modul-2-checkin-qr.md) | Check-in Tamu via QR (Private / Invitation-only) |
| [modul-3-kamera-sekali-pakai.md](modul-3-kamera-sekali-pakai.md) | Kamera Sekali Pakai Digital |
| [modul-4-berbagi-foto-qr.md](modul-4-berbagi-foto-qr.md) | Berbagi Foto via QR Code |
| [modul-5-live-photo-wall.md](modul-5-live-photo-wall.md) | Live Photo Wall |
| [modul-6-album-bersama.md](modul-6-album-bersama.md) | Album Kenangan Bersama |
| [modul-7-undian-digital.md](modul-7-undian-digital.md) | Undian Digital (Doorprize) |
| [99-non-fungsional.md](99-non-fungsional.md) | Keamanan, performa, pengujian, operasional |

## Kondisi Saat Ini

| Item | Status                                                                                                           |
|---|------------------------------------------------------------------------------------------------------------------|
| Framework | Next.js 16.4 (App Router, `src/app`), React 19.2 + React Compiler, JavaScript (bukan TS), Tailwind 4             |
| Backend / DB / storage | Belum ada                                                                                                        |
| `src/app/kamera` | Prototipe: `getUserMedia` + filter canvas, foto disimpan di state (hilang saat refresh)                          |
| `src/app/penerima-tamu` | Prototipe: input nama manual → `BroadcastChannel` (hanya jalan di **browser yang sama**, bukan lintas perangkat) |
| `src/app/penerima-tamu-layar` | Prototipe: layar sambutan yang mendengarkan `BroadcastChannel`                                                   |
| `index.html` | Mockup statis buku tamu (localStorage)                                                                           |

Catatan Next 16 yang relevan: `middleware.js` diganti `proxy.js`; `params`/`searchParams` berupa Promise (`await params`); gunakan Server Actions + `revalidatePath`/`updateTag` untuk mutasi. Baca `node_modules/next/dist/docs/` sebelum menulis kode.

## Ketergantungan Antar Modul

```
Fondasi ──► Modul 1 Undangan ──► Modul 2 Check-in QR ──┬─► Modul 4 Upload QR ──┬─► Modul 6 Album
                                                       │   Modul 3 Kamera ─────┤
                                                       │                       └─► Modul 5 Photo Wall
                                                       └─► Modul 7 Undian
```

## Urutan Sprint (usulan)

| Sprint | Isi |
|---|---|
| 1 | Keputusan stack, setup DB/ORM/storage/auth, skema inti, dashboard event & tamu (import CSV) |
| 2 | Undangan Digital: halaman tamu lengkap, tema, RSVP, ucapan, kalender, kirim WA |
| 3 | Check-in QR: token, tiket, scanner, layar sambutan real-time, dashboard kehadiran |
| 4 | Upload via QR + Kamera sekali pakai (kuota, filter, antrean offline) |
| 5 | Shared Album (reveal, moderasi, unduh ZIP) + Live Photo Wall |
| 6 | Undian Digital + hardening (security, performa, load test, uji perangkat) |
