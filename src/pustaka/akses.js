// =============================================================
// FILE   : src/pustaka/akses.js
// JENIS  : Utilitas server-only (sesi admin & petugas)
// DOKUMEN: 01-fondasi.md "Auth & otorisasi"
//
// KONSEP
// - Next 16: cookies() dari "next/headers" itu ASYNC → const store = await cookies()
// - Cookie hanya bisa DI-SET di Server Action / Route Handler / proxy,
//   TIDAK bisa di-set saat Server Component sedang render.
// - Proxy hanya "pagar luar". Setiap Server Action tetap WAJIB cek akses
//   sendiri (requireEventAccess), karena action bisa dipanggil langsung.
//
// PSEUDOCODE
// import "server-only"
// import { cookies } from "next/headers"
// import { redirect } from "next/navigation"
// import { scrypt, randomBytes, timingSafeEqual } from "node:crypto"
// import { sign, verify } from "./token"
//
// hashSecret(plain)                 → "salt:hash" (scrypt). Dipakai password & PIN
// verifySecret(plain, stored)       → bandingkan dengan timingSafeEqual
//
// ---- ADMIN ----
// createAdminSession(userId)
//   payload = JSON { uid: userId, exp: now + 7 hari }
//   (await cookies()).set("admin_session", sign(base64url(payload)),
//        { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 7 hari })
//
// getAdmin()
//   raw = cookie "admin_session" → verify → parse JSON
//   jika null / exp lewat → return null
//   return user dari DB (id, name, role)
//
// requireAdmin()
//   user = await getAdmin(); jika null → redirect("/masuk"); return user
//
// requireEventAccess(eventId)
//   user = await requireAdmin()
//   event = DB events where id = eventId
//   jika !event atau (event.owner_id !== user.id && user.role !== "admin") → throw Error("Forbidden")
//   return { user, event }
//
// ---- PETUGAS (PIN) ----
// createStaffSession(staffId, eventId)
//   cookie "staff_session" = sign({ sid, eid, exp: now + 12 jam }), path: "/e"
//
// getStaff(eventId)
//   baca & verify cookie; pastikan payload.eid === eventId dan staff masih active
//
// logout(name)   → (await cookies()).delete(name)
// =============================================================

export async function hashSecret(plain) {
  throw new Error("TODO: hashSecret");
}

export async function verifySecret(plain, stored) {
  throw new Error("TODO: verifySecret");
}

export async function createAdminSession(userId) {
  throw new Error("TODO: createAdminSession");
}

export async function getAdmin() {
  // TODO: baca cookie admin_session
  return null;
}

export async function requireAdmin() {
  throw new Error("TODO: requireAdmin");
}

export async function requireEventAccess(eventId) {
  throw new Error("TODO: requireEventAccess");
}

export async function createStaffSession(staffId, eventId) {
  throw new Error("TODO: createStaffSession");
}

export async function getStaff(eventId) {
  // TODO: baca cookie staff_session
  return null;
}
