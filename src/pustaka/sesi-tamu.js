// =============================================================
// FILE   : src/pustaka/sesi-tamu.js
// JENIS  : Utilitas server-only (identitas tamu TANPA login)
// DOKUMEN: 00-arsitektur.md "Identitas tamu", 01-fondasi.md
//
// ALUR
//   Tamu buka /u/budi-ani?g=<invite_token>
//   → klik "Buka Undangan" → Server Action openInvitation() memanggil
//     setGuestSession() → cookie "guest_session" tersimpan
//   → halaman /u/budi-ani/tiket & /api/tiket/budi-ani membaca getGuestSession()
//     (tamu tidak perlu membawa ?g= lagi)
//
// PSEUDOCODE
// import "server-only"
// import { cookies } from "next/headers"
// import { sign, verify } from "./token"
//
// findGuestByToken(slug, inviteToken)
//   query guests JOIN events where events.slug = slug AND guests.invite_token = token
//   return guest atau null
//
// setGuestSession(guest)            // HANYA dari Server Action / Route Handler
//   value = sign(`${guest.id}:${guest.event_id}`)
//   (await cookies()).set("guest_session", value,
//       { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 hari })
//
// getGuestSession(eventId)
//   raw = (await cookies()).get("guest_session")?.value
//   data = verify(raw); jika null → return null
//   [guestId, evId] = data.split(":")
//   jika evId !== eventId → return null   // cookie milik acara lain
//   return guest dari DB (id, name, category, table_no, max_pax, qr_token)
// =============================================================

export async function findGuestByToken(slug, inviteToken) {
  // TODO
  return null;
}

export async function setGuestSession(guest) {
  throw new Error("TODO: setGuestSession");
}

export async function getGuestSession(eventId) {
  // TODO
  return null;
}
