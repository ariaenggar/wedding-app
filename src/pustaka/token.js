// =============================================================
// FILE   : src/pustaka/token.js
// JENIS  : Utilitas server-only (token acak + tanda tangan HMAC)
// DOKUMEN: 01-fondasi.md "Identitas tamu", modul-2 "Token QR"
//
// KONSEP
// - Token tamu harus TIDAK BISA DITEBAK → pakai crypto, bukan Math.random
// - HMAC = "stempel" rahasia: siapa pun bisa membaca isinya, tapi hanya
//   server (yang tahu TOKEN_SECRET) yang bisa membuat stempel yang valid
//
// PSEUDOCODE
// import "server-only"
// import { createHmac, timingSafeEqual } from "node:crypto"
// import { nanoid } from "nanoid"
//
// generateToken(length = 21)
//   return nanoid(length)                    // ~126 bit, aman untuk invite_token/qr_token
//
// sign(value)
//   sig = createHmac("sha256", TOKEN_SECRET).update(value).digest("base64url")
//   return `${value}.${sig}`
//
// verify(signedValue)
//   pisahkan di titik TERAKHIR → [value, sig]
//   expected = sign(value) bagian sig
//   jika panjang beda atau !timingSafeEqual(Buffer(sig), Buffer(expected)) → return null
//   return value
//
// Catatan: timingSafeEqual mencegah serangan "timing attack" (membandingkan
// string biasa dengan === bisa membocorkan berapa karakter yang sudah benar).
// =============================================================

export function generateToken(length = 21) {
  // TODO
  throw new Error("TODO: generateToken");
}

export function sign(value) {
  // TODO
  throw new Error("TODO: sign");
}

export function verify(signedValue) {
  // TODO
  throw new Error("TODO: verify");
}
