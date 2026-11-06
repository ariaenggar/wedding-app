"use client";
// =============================================================
// FILE   : src/komponen/petugas/CariTamuManual.js
// JENIS  : Client Component (pencarian nama + check-in manual)
// DOKUMEN: modul-2 "Pencarian manual nama (fallback)", "Walk-in"
//
// KONSEP REACT
// - Debounce input: jangan panggil server setiap ketikan. Tunggu 300ms
//   setelah user berhenti mengetik (setTimeout + clearTimeout di cleanup).
// - useDeferredValue adalah alternatif bawaan React untuk kasus serupa.
//
// PSEUDOCODE
// props: { slug }
// [q, setQ] = useState(""); [rows, setRows] = useState([]); [msg, setMsg] = useState(null)
//
// useEffect(() => {
//   jika q.length < 2 → setRows([]); return
//   t = setTimeout(async () => setRows(await searchGuests(slug, q)), 300)
//   return () => clearTimeout(t)
// }, [q])
//
// doCheckIn = async (guest, pax) =>
//   res = await manualCheckIn(slug, guest.id, pax); setMsg(res)
//   setRows(rs => rs.map(r => r.id === guest.id ? { ...r, checkedIn: true } : r))
//
// return (
//   <section>
//     <input value={q} onChange={e => setQ(e.target.value)} placeholder="Cari nama tamu…" />
//     <ul>{rows.map(g => <li key={g.id}> {g.name} · {g.category} · meja {g.table_no}
//            {g.checkedIn ? "✓ sudah" : <button onClick={() => doCheckIn(g, 1)}>Check-in</button>}</li>)}</ul>
//     {q.length >= 2 && rows.length === 0 && <button onClick={() => walkIn(slug, q, 1)}>+ Tamu walk-in "{q}"</button>}
//   </section>
// )
// =============================================================

export default function CariTamuManual({ slug }) {
  // TODO
  return null;
}
