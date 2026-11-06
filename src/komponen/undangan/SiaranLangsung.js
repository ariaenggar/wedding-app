"use client";
// =============================================================
// FILE   : src/komponen/undangan/SiaranLangsung.js
// JENIS  : Client Component (butuh jam HP tamu)
// DOKUMEN: modul-1 "Live streaming"
//
// PSEUDOCODE
// props: { url, startsAtIso }
// [show, setShow] = useState(false)
// useEffect(() => {
//   cek = () => setShow(Date.now() > new Date(startsAtIso) - 60 menit)
//   cek(); id = setInterval(cek, 60_000); return () => clearInterval(id)
// }, [startsAtIso])
//
// jika !url → return null
// jika !show → return <p>Live streaming akan tersedia 1 jam sebelum acara.</p>
//
// embed = ubah link YouTube "watch?v=ID" / "youtu.be/ID" → "https://www.youtube.com/embed/ID"
// jika bisa di-embed → <iframe src={embed} allowFullScreen className="aspect-video w-full" />
// selain itu (IG Live dsb.) → <a href={url} target="_blank">Tonton Live</a>
// =============================================================

export default function SiaranLangsung({ url, startsAtIso }) {
  // TODO
  return null;
}
