"use client";
// =============================================================
// FILE   : src/komponen/pengelola/ImporTamu.js
// JENIS  : Client Component (baca CSV/Excel di browser)
// DOKUMEN: modul-1 "import CSV/Excel (papaparse / xlsx)"
//
// KONSEP
// - File dibaca & di-parse di BROWSER, lalu hanya data bersih (array
//   objek) yang dikirim ke Server Action importGuests. Server tetap
//   memvalidasi ulang tiap baris.
// - Tampilkan preview sebelum menyimpan → admin bisa cek kolom.
//
// PERSIAPAN: npm i papaparse   (Excel: npm i xlsx)
//
// PSEUDOCODE
// props: { eventId }
// [rows, setRows] = useState([])
// [result, setResult] = useState(null)
// [isPending, startTransition] = useTransition()
//
// onFile(e)
//   file = e.target.files[0]
//   jika .csv  → Papa.parse(file, { header: true, skipEmptyLines: true,
//                   complete: (r) => setRows(normalize(r.data)) })
//   jika .xlsx → XLSX.read(await file.arrayBuffer()) → sheet_to_json → setRows(normalize(...))
//
// normalize(data)  → peta header bebas ke kolom kita:
//   { name: r.nama ?? r.Nama, phone: r.hp ?? r.whatsapp, category: r.kategori ?? "umum",
//     max_pax: Number(r.pax ?? 1), table_no: r.meja }
//
// save = () => startTransition(async () => setResult(await importGuests(eventId, rows)))
//
// return (
//   <section>
//     <input type="file" accept=".csv,.xlsx" onChange={onFile} />
//     <a href="/template-tamu.csv" download>Unduh template</a>
//     {rows.length > 0 && <> preview 10 baris pertama dalam tabel
//        <button onClick={save} disabled={isPending}>Simpan {rows.length} tamu</button> </>}
//     {result && <p>{result.inserted} tersimpan, {result.errors.length} gagal</p>}
//   </section>
// )
// =============================================================

export default function ImporTamu({ eventId }) {
  // TODO
  return null;
}
