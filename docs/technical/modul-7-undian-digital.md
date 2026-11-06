# Modul 7 — Undian Digital (Doorprize)

## Database
```
prizes        id, event_id, name, image, quantity, sort_order
draws         id, event_id, prize_id, guest_id, status(drawn|claimed|void), drawn_at
draw_entries  (opsional) event_id, guest_id — jika peserta harus "join" manual
```

## Pekerjaan
- [ ] Admin: CRUD hadiah, aturan kelayakan (semua tamu / hanya yang check-in / yang join)
- [ ] **Logika pengundian di server** (Server Action `drawWinner(prizeId)`):
  - ambil kandidat eligible yang belum pernah menang
  - pilih acak dengan `crypto.randomInt` (bukan `Math.random`)
  - simpan dalam transaksi + lock agar tidak ada dua pemenang untuk 1 slot hadiah
- [ ] Layar pengundian `/e/[slug]/draw` (proyektor): pilih hadiah → animasi slot/roda yang **berhenti di hasil dari server** (animasi hanya visual)
- [ ] Publish real-time `draw` → HP pemenang
- [ ] Halaman peserta `/e/[slug]/undian`: status "menunggu" / "Anda menang! {hadiah}" + kode klaim; getar + suara
- [ ] Klaim hadiah: petugas scan/konfirmasi kode → status `claimed`
- [ ] Tombol "undi ulang" (void) jika pemenang tidak hadir
- [ ] Riwayat pemenang + export
