"use client";
// =============================================================
// FILE   : src/komponen/undangan/DaftarUcapan.js
// JENIS  : Client Component (infinite scroll)
// DOKUMEN: modul-1 "Ucapan: list dengan pagination/infinite scroll"
//
// KONSEP REACT
// - initialItems dikirim dari server (render pertama cepat & SEO).
//   Halaman berikutnya diambil lewat Server Action loadWishes().
// - Update state berbasis nilai sebelumnya: setItems(prev => [...prev, ...baru])
// - IntersectionObserver: deteksi elemen "sentinel" di bawah list
//   terlihat → muat halaman berikutnya.
//
// PSEUDOCODE
// props: { slug, initialItems, initialCursor }
// [items, setItems]   = useState(initialItems)
// [cursor, setCursor] = useState(initialCursor)
// [loading, setLoading] = useState(false)
// sentinelRef = useRef(null)
//
// loadMore = async () =>
//   jika loading atau !cursor → return
//   setLoading(true)
//   { items: baru, nextCursor } = await loadWishes(slug, cursor)
//   setItems(prev => [...prev, ...baru]); setCursor(nextCursor); setLoading(false)
//
// useEffect(() => {
//   obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) loadMore() })
//   if (sentinelRef.current) obs.observe(sentinelRef.current)
//   return () => obs.disconnect()
// }, [cursor])
//
// return (
//   <ul>
//     {items.map(w => <li key={w.id}><b>{w.name}</b><p>{w.message}</p></li>)}
//     <div ref={sentinelRef} />
//     {loading && <p>Memuat…</p>}
//   </ul>
// )
// Catatan: {w.message} otomatis di-escape oleh React → aman dari XSS.
// =============================================================

export default function DaftarUcapan({ slug, initialItems = [], initialCursor = null }) {
  // TODO
  return null;
}
