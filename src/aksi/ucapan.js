"use server";
// =============================================================
// FILE   : src/aksi/ucapan.js
// JENIS  : Server Actions
// DOKUMEN: modul-1-undangan-digital.md "Ucapan"
//
// PSEUDOCODE
// postWish(prevState, formData)
//   slug = formData.get("slug"); event = await getEventBySlug(slug)
//   guest = await getGuestSession(event.id)          // boleh null untuk event publik
//   parsed = parseForm(wishSchema, formData); jika gagal → return { errors }
//   { ok } = rateLimit(`wish:${guest?.id ?? await clientIp()}`, { limit: 3, windowMs: 60_000 })
//   jika !ok → return { error: "Terlalu banyak ucapan, tunggu sebentar." }
//   insert wishes { event_id, guest_id: guest?.id, name, message }
//   revalidatePath(`/u/${slug}`)
//   return { ok: true }
//   // ANTI-XSS: simpan teks apa adanya, render dengan {wish.message} (React
//   // otomatis escape). JANGAN pakai dangerouslySetInnerHTML.
//
// loadWishes(slug, cursor)                            // untuk tombol "muat lagi"
//   event = getEventBySlug(slug)
//   rows = select id, name, message, created_at from wishes
//          where event_id = event.id AND hidden = false
//            AND (cursor ? created_at < cursor : true)
//          order by created_at desc limit 20
//   return { items: rows, nextCursor: rows.length === 20 ? rows.at(-1).created_at : null }
// =============================================================

export async function postWish(prevState, formData) {
  // TODO
  return { error: "Belum diimplementasi" };
}

export async function loadWishes(slug, cursor) {
  // TODO
  return { items: [], nextCursor: null };
}
