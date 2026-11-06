// =============================================================
// FILE   : src/pustaka/validasi.js
// JENIS  : Skema Zod (validasi input), dipakai di semua Server Action
// DOKUMEN: 99-non-fungsional.md "Semua mutasi via Server Action dengan validasi Zod"
//
// PERSIAPAN: npm i zod
//
// KONSEP
// - Data dari form/browser TIDAK BOLEH dipercaya. Selalu parse di server.
// - schema.safeParse(data) → { success, data, error }
// - z.flattenError(error).fieldErrors → { nama: ["pesan"] } untuk ditampilkan di form
//
// PSEUDOCODE
// import { z } from "zod"
//
// rsvpSchema   = z.object({ status: z.enum(["hadir","tidak","ragu"]),
//                           pax: z.coerce.number().int().min(0).max(20),
//                           note: z.string().max(300).optional() })
// wishSchema   = z.object({ name: z.string().trim().min(1).max(60),
//                           message: z.string().trim().min(1).max(500) })
// guestSchema  = z.object({ name, phone (opsional, regex angka), email (opsional),
//                           category: enum, max_pax: 1..20, table_no (opsional) })
// eventSchema  = z.object({ title, slug: regex /^[a-z0-9-]{3,40}$/, groom_name,
//                           bride_name, visibility: enum, timezone })
// sessionSchema= z.object({ type: enum, starts_at: z.coerce.date(), ends_at, venue_name,
//                           address, lat?, lng?, maps_url?, stream_url? })
// pinSchema    = z.object({ pin: z.string().regex(/^\d{4,6}$/) })
//
// helper:
// parseForm(schema, formData)
//   result = schema.safeParse(Object.fromEntries(formData))
//   jika gagal → return { ok: false, errors: z.flattenError(result.error).fieldErrors }
//   return { ok: true, data: result.data }
// =============================================================

// TODO: export const rsvpSchema = z.object({...}) dst.

export function parseForm(schema, formData) {
  throw new Error("TODO: parseForm");
}
