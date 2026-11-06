"use client";
// =============================================================
// FILE   : src/komponen/undangan/Galeri.js
// JENIS  : Client Component
// DOKUMEN: modul-1 "Galeri foto & video"
//
// KONSEP REACT
// - State `index` = foto mana yang sedang dibuka (null = lightbox tertutup).
// - Boleh pakai library: npm i yet-another-react-lightbox
//
// PSEUDOCODE
// props: { items }   // [{ type: "photo"|"video", src, thumb, width, height }]
// [index, setIndex] = useState(null)
//
// return (
//   <>
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
//       {items.map((it, i) => it.type === "video"
//         ? <video key={it.src} src={it.src} poster={it.thumb} preload="none" controls />
//         : <button key={it.src} onClick={() => setIndex(i)}>
//             <Image src={it.thumb ?? it.src} alt="" width={400} height={400} className="object-cover" />
//           </button>)}
//     </div>
//     <Lightbox open={index !== null} index={index ?? 0} close={() => setIndex(null)}
//               slides={items.filter(photo).map(it => ({ src: it.src }))} />
//   </>
// )
// =============================================================

export default function Galeri({ items = [] }) {
  // TODO
  return null;
}
