// =============================================================
// FILE   : src/hooks/useHitungMundur.js
// JENIS  : Custom Hook React
// DIPAKAI: HitungMundur undangan (modul 1)
//
// KONSEP REACT
// - setInterval di dalam useEffect + clearInterval di cleanup.
// - Hydration: server tidak tahu jam di HP tamu. Jika render angka detik
//   langsung, HTML server ≠ HTML client → warning "hydration mismatch".
//   Solusi: state awal null → tampilkan placeholder, baru hitung setelah mount.
//
// PSEUDOCODE
// import { useEffect, useState } from "react"
//
// export function useHitungMundur(targetIso)
//   [left, setLeft] = useState(null)
//   useEffect(() => {
//     tick = () => setLeft(Math.max(0, new Date(targetIso) - Date.now()))
//     tick()
//     id = setInterval(tick, 1000)
//     return () => clearInterval(id)
//   }, [targetIso])
//
//   jika left === null → return null
//   return {
//     done: left === 0,
//     hari:  Math.floor(left / 86400000),
//     jam:   Math.floor(left / 3600000) % 24,
//     menit: Math.floor(left / 60000) % 60,
//     detik: Math.floor(left / 1000) % 60,
//   }
// =============================================================

export function useHitungMundur(targetIso) {
  // TODO
  return null;
}
