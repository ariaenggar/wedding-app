"use client";
// =============================================================
// FILE   : src/komponen/undangan/PemutarMusik.js
// JENIS  : Client Component
// DOKUMEN: modul-1 "Musik"
//
// KONSEP REACT
// - useRef untuk memegang elemen DOM <audio> (bukan state, karena
//   mengubahnya tidak perlu render ulang).
// - useEffect untuk mendengarkan event "undangan:play" dari Sampul.
//
// PSEUDOCODE
// props: { src }
// audioRef = useRef(null)
// [playing, setPlaying] = useState(false)
//
// useEffect(() => {
//   play = () => audioRef.current?.play().then(() => setPlaying(true)).catch(() => {})
//   window.addEventListener("undangan:play", play)
//   return () => window.removeEventListener("undangan:play", play)
// }, [])
//
// toggle() → playing ? audio.pause() : audio.play(); setPlaying(!playing)
//
// jika !src → return null
// return (
//   <>
//     <audio ref={audioRef} src={src} loop preload="none" />
//     <button className="fixed bottom-4 right-4 rounded-full ..." onClick={toggle}
//             aria-label={playing ? "Matikan musik" : "Putar musik"}>
//       {playing ? "🔊" : "🔇"}
//     </button>
//   </>
// )
// =============================================================

export default function PemutarMusik({ src }) {
  // TODO
  return null;
}
