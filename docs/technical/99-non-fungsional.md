# Non-fungsional & Kualitas

## Keamanan
- [ ] Semua mutasi via Server Action dengan validasi Zod + cek otorisasi
- [ ] Token tamu/QR tidak bisa ditebak; HMAC untuk QR
- [ ] Rate limiting (upload, ucapan, RSVP, scan) — mis. Upstash Ratelimit
- [ ] Bucket storage privat, signed URL berumur pendek
- [ ] Header keamanan (CSP, dsb.) di `next.config.mjs`
- [ ] Perlindungan data pribadi tamu (no HP/email) — jangan expose ke halaman publik; sesuai UU PDP

## Performa
- [ ] Halaman undangan: target LCP < 2.5 detik di 4G; gambar via `next/image`, font via `next/font`
- [ ] Caching konten undangan (`use cache` / `cacheTag`, invalidasi dengan `updateTag` saat admin edit)
- [ ] Index DB untuk query yang sering (media per event, guests per token)

## Pengujian
- [ ] Unit test logika inti (verifikasi QR, kuota jepretan, pengundian) — Vitest
- [ ] E2E alur utama (RSVP → QR → check-in → upload → album) — Playwright
- [ ] Uji perangkat nyata: iPhone Safari, Android Chrome murah, TV/proyektor
- [ ] Load test hari H: ~300–1000 tamu upload bersamaan

## Operasional
- [ ] Monitoring error (Sentry) + log
- [ ] Backup DB & storage
- [ ] Checklist hari H: koneksi internet venue, perangkat petugas, PIN, layar wall
- [ ] Kebijakan retensi media (mis. dihapus X bulan setelah acara)
