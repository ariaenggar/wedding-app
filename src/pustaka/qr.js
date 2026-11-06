// =============================================================
// FILE   : src/pustaka/qr.js
// JENIS  : Utilitas server-only (membuat & membaca isi QR)
// DOKUMEN: modul-2-checkin-qr.md "Token QR"
//
// PERSIAPAN: npm i qrcode
//
// FORMAT ISI QR CHECK-IN (tanpa data pribadi):
//   "WS1." + sign(qr_token)     → contoh: WS1.Vh3kP...x9.AbC123sig
//   prefix "WS1" = versi format, memudahkan ganti format di masa depan
//
// PSEUDOCODE
// import "server-only"
// import QRCode from "qrcode"
// import { sign, verify } from "./token"
//
// buildCheckinPayload(qrToken)    → `WS1.${sign(qrToken)}`
//
// parseCheckinPayload(text)
//   jika !text.startsWith("WS1.") → return null
//   return verify(text.slice(4))  // null jika signature palsu
//
// toDataUrl(text)                  → await QRCode.toDataURL(text, { margin: 1, width: 512 })
//                                    dipakai langsung di <img src=...>
// toPngBuffer(text)                → await QRCode.toBuffer(text, { width: 1024 })
//                                    dipakai Route Handler untuk tombol "unduh PNG"
// =============================================================

export function buildCheckinPayload(qrToken) {
  throw new Error("TODO: buildCheckinPayload");
}

export function parseCheckinPayload(text) {
  throw new Error("TODO: parseCheckinPayload");
}

export async function toDataUrl(text) {
  throw new Error("TODO: toDataUrl");
}

export async function toPngBuffer(text) {
  throw new Error("TODO: toPngBuffer");
}
