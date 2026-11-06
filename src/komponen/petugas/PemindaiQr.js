"use client";
// =============================================================
// FILE   : src/komponen/petugas/PemindaiQr.js
// JENIS  : Client Component (kamera + deteksi QR)
// DOKUMEN: modul-2 "PemindaiQr kamera", "UI hasil", "Debounce scan"
//
// KONSEP REACT
// - Loop deteksi memakai requestAnimationFrame di dalam useEffect;
//   cleanup membatalkan loop (cancelAnimationFrame) + stop kamera.
// - Debounce dengan useRef (lastRef = { text, at }) — bukan state,
//   karena tidak perlu render ulang.
// - Dynamic import: library fallback hanya diunduh jika dibutuhkan
//   → const { BrowserQRCodeReader } = await import("@zxing/browser")
//
// PSEUDOCODE
// props: { slug }
// videoRef = useRef(null); lastRef = useRef({ text: "", at: 0 })
// [result, setResult] = useState(null)   // { result: "VALID"|"SUDAH_CHECKIN"|..., guest, at }
// [pax, setPax] = useState(1)
// [busy, setBusy] = useState(false)
//
// handleText = async (text) =>
//   now = Date.now()
//   jika text === lastRef.current.text && now - lastRef.current.at < 3000 → return   // debounce
//   lastRef.current = { text, at: now }
//   setBusy(true)
//   res = await checkIn(slug, text, pax)
//   setResult(res); setBusy(false)
//   feedback(res.result)
//
// feedback(r)
//   VALID         → navigator.vibrate?.(100);           bunyi "ding"
//   SUDAH_CHECKIN → navigator.vibrate?.([100,50,100]);   bunyi "dong"
//   lainnya       → navigator.vibrate?.(400);            bunyi "buzz"
//
// useEffect(() => {
//   stream = await getUserMedia({ video: { facingMode: "environment" } }); video.srcObject = stream
//   jika "BarcodeDetector" in window:
//     detector = new BarcodeDetector({ formats: ["qr_code"] })
//     loop = async () => { codes = await detector.detect(video); if (codes[0]) handleText(codes[0].rawValue); raf = requestAnimationFrame(loop) }
//   selain itu (iOS Safari):
//     reader = new BrowserQRCodeReader(); controls = await reader.decodeFromVideoElement(video, (r) => r && handleText(r.getText()))
//   return () => { cancelAnimationFrame(raf); controls?.stop(); stream.getTracks().forEach(t => t.stop()) }
// }, [])
//
// WARNA = { VALID: "bg-green-600", SUDAH_CHECKIN: "bg-yellow-500", default: "bg-red-600" }
// return (
//   <section>
//     <video ref={videoRef} playsInline muted className="w-full aspect-square object-cover" />
//     <label>Jumlah datang <input type="number" min={1} value={pax} onChange=... /></label>
//     {result && <div className={`${WARNA[result.result] ?? WARNA.default} text-white text-3xl p-6`}>
//        {judul hasil} {result.guest?.name} · {result.guest?.category} · Meja {result.guest?.table_no}
//        {result.result === "SUDAH_CHECKIN" && `pukul ${formatJam(result.at)}`}
//     </div>}
//   </section>
// )
// =============================================================

export default function PemindaiQr({ slug }) {
  // TODO
  return <p>TODO: PemindaiQr QR</p>;
}
