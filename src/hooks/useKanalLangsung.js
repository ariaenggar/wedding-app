// =============================================================
// FILE   : src/hooks/useKanalLangsung.js
// JENIS  : Custom Hook React (hanya untuk Client Component)
// DOKUMEN: 01-fondasi.md "Real-time"
//
// KONSEP REACT
// - Custom hook = fungsi berawalan "use" yang memakai hook lain.
//   Tujuannya: logika subscribe/unsubscribe ditulis SEKALI, dipakai di
//   layar sambutan (LayarSambutan) dan dashboard kehadiran (KehadiranLangsung).
// - useEffect(setup, [deps]) → setup jalan setelah render; fungsi yang
//   di-return = cleanup (jalan saat unmount / deps berubah). WAJIB
//   unsubscribe di cleanup supaya tidak dobel listener.
// - useEffectEvent (React 19.2): membungkus onMessage supaya selalu memakai
//   versi terbaru TANPA membuat effect re-subscribe setiap render.
//
// PSEUDOCODE
// "use client" tidak perlu di file hook; cukup komponen pemakainya yang "use client".
// import { useEffect, useEffectEvent, useState } from "react"
// import { createClient } from "@supabase/supabase-js"
// supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)  // sekali, di luar hook
//
// export function useKanalLangsung(eventId, topic, onMessage, { pollMs, onPoll } = {})
//   [status, setStatus] = useState("connecting")    // connecting | live | offline
//   handle = useEffectEvent((payload) => onMessage(payload))
//
//   useEffect(() => {
//     ch = supabase.channel(`event:${eventId}:${topic}`)
//       .on("broadcast", { event: topic }, ({ payload }) => handle(payload))
//       .subscribe((s) => setStatus(s === "SUBSCRIBED" ? "live" : "offline"))
//
//     // fallback polling 10 detik jika koneksi realtime mati
//     timer = onPoll ? setInterval(() => { if (status !== "live") onPoll() }, pollMs ?? 10000) : null
//
//     return () => { supabase.removeChannel(ch); clearInterval(timer) }
//   }, [eventId, topic])
//
//   return status
//
// CONTOH PAKAI
//   const status = useKanalLangsung(event.id, "checkin", (p) => setQueue((q) => [...q, p]))
// =============================================================

export function useKanalLangsung(eventId, topic, onMessage, options = {}) {
  // TODO
  return "offline";
}
