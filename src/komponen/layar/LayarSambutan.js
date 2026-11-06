"use client";
// =============================================================
// FILE   : src/komponen/layar/LayarSambutan.js
// JENIS  : Client Component (subscribe "checkin" + antrean animasi)
// DOKUMEN: modul-2 "Antrean animasi jika banyak tamu masuk bersamaan"
//
// KONSEP REACT
// - Antrean di state: queue = [...]. Effect berjalan setiap `queue`
//   berubah: jika tidak ada yang sedang tampil, ambil item pertama,
//   tampilkan 4 detik, lalu buang dari antrean.
//
// PSEUDOCODE
// props: { eventId, title, couple }
// useLayarTetapMenyala()
// [queue, setQueue] = useState([])
// [showing, setShowing] = useState(null)
//
// useKanalLangsung(eventId, "checkin", (p) => setQueue(q => [...q, p]))
//
// useEffect(() => {
//   jika showing atau queue.length === 0 → return
//   [first, ...rest] = queue
//   setShowing(first); setQueue(rest)
//   t = setTimeout(() => setShowing(null), 4000)
//   return () => clearTimeout(t)
// }, [queue, showing])
//
// return (
//   <main className="h-dvh grid place-items-center text-center">
//     {showing
//       ? <div key={showing.at} className="animate-[zoomIn_0.6s]">
//           <p>Selamat Datang</p>
//           <h1 className="text-7xl">{showing.name}</h1>
//           {showing.table_no && <p>Meja {showing.table_no}</p>}
//         </div>
//       : <div><p>The Wedding of</p><h1>{couple}</h1></div>}
//   </main>
// )
// =============================================================

export default function LayarSambutan({ eventId, title, couple }) {
  // TODO
  return <p className="p-8">TODO: Layar sambutan</p>;
}
