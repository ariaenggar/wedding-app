"use client";
// =============================================================
// FILE   : src/komponen/undangan/HitungMundur.js
// JENIS  : Client Component
// DOKUMEN: modul-1 "HitungMundur"
//
// KONSEP REACT
// - Logika timer ada di custom hook useHitungMundur (src/hooks/useHitungMundur.js).
//   Komponen ini HANYA mengurus tampilan → pemisahan "logika" vs "UI".
// - Merender list: [..].map(item => <div key={...}>) — `key` wajib unik.
//
// PSEUDOCODE
// props: { targetIso }
// t = useHitungMundur(targetIso)
// jika t === null → return <div className="h-20" />      // placeholder, cegah hydration mismatch
// jika t.done     → return <p>Acara sedang/sudah berlangsung 🎉</p>
// boxes = [["Hari", t.hari], ["Jam", t.jam], ["Menit", t.menit], ["Detik", t.detik]]
// return (
//   <div className="grid grid-cols-4 gap-2">
//     {boxes.map(([label, value]) => (
//       <div key={label}> <b>{String(value).padStart(2, "0")}</b> <span>{label}</span> </div>
//     ))}
//   </div>
// )
// =============================================================

export default function HitungMundur({ targetIso }) {
  // TODO
  return null;
}
