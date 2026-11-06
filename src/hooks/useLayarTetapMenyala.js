// =============================================================
// FILE   : src/hooks/useLayarTetapMenyala.js
// JENIS  : Custom Hook React
// DIPAKAI: layar sambutan /e/[slug]/sambutan (laptop/TV tidak boleh tidur)
//
// PSEUDOCODE
// import { useEffect } from "react"
//
// export function useLayarTetapMenyala()
//   useEffect(() => {
//     let lock = null
//     request = async () => {
//       try { lock = await navigator.wakeLock?.request("screen") } catch {}
//     }
//     request()
//     // wake lock lepas otomatis saat tab disembunyikan → minta lagi saat kembali
//     onVisible = () => { if (document.visibilityState === "visible") request() }
//     document.addEventListener("visibilitychange", onVisible)
//     return () => { document.removeEventListener("visibilitychange", onVisible); lock?.release() }
//   }, [])
// =============================================================

export function useLayarTetapMenyala() {
  // TODO
}
