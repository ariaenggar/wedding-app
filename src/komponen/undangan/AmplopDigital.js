"use client";
// =============================================================
// FILE   : src/komponen/undangan/AmplopDigital.js
// JENIS  : Client Component
// DOKUMEN: modul-1 "Amplop digital"
//
// PSEUDOCODE
// props: { accounts, qrisImage }     // accounts = [{ bank, nomor, nama }]
// [copied, setCopied] = useState(null)   // nomor yang baru disalin
//
// copy(nomor)
//   await navigator.clipboard.writeText(nomor)
//   setCopied(nomor); setTimeout(() => setCopied(null), 2000)
//
// return (
//   <section>
//     {accounts.map(a => (
//       <div key={a.nomor}>
//         <b>{a.bank}</b> <span>{a.nomor}</span> <span>a.n. {a.nama}</span>
//         <button onClick={() => copy(a.nomor)}>{copied === a.nomor ? "Tersalin ✓" : "Salin"}</button>
//       </div>
//     ))}
//     {qrisImage && <>
//        <img src={qrisImage} alt="QRIS" />
//        <a href={qrisImage} download="qris.png">Unduh QRIS</a>
//     </>}
//   </section>
// )
// =============================================================

export default function AmplopDigital({ accounts = [], qrisImage }) {
  // TODO
  return null;
}
