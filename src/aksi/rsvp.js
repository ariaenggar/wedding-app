"use server";
// =============================================================
// FILE   : src/aksi/rsvp.js
// JENIS  : Server Action
// DOKUMEN: modul-1-undangan-digital.md "RSVP"
//
// KONSEP
// - Dipakai bersama useActionState di FormRsvp:
//     const [state, formAction, pending] = useActionState(submitRsvp, null)
//   → signature WAJIB (prevState, formData), return value jadi `state` berikutnya.
// - refresh() / revalidatePath() supaya halaman menampilkan data terbaru.
//
// PSEUDOCODE
// submitRsvp(prevState, formData)
//   slug = formData.get("slug")
//   event = await getEventBySlug(slug)
//   guest = await getGuestSession(event.id)
//   jika !guest → return { error: "Silakan buka undangan dari link Anda." }
//
//   parsed = parseForm(rsvpSchema, formData)
//   jika !parsed.ok → return { errors: parsed.errors }
//   { status, pax, note } = parsed.data
//
//   jika status === "hadir" dan pax > guest.max_pax
//     return { errors: { pax: [`Maksimal ${guest.max_pax} orang`] } }
//   jika status !== "hadir" → pax = 0
//
//   UPSERT rsvps (guest_id unik):
//     insert ... onConflictDoUpdate({ target: rsvps.guestId, set: { status, pax, note, updated_at: now } })
//
//   revalidatePath(`/u/${slug}`)
//   return {
//     ok: true,
//     showQr: status === "hadir" && event.visibility === "private",   // modul 2
//   }
// =============================================================

export async function submitRsvp(prevState, formData) {
  // TODO
  return { error: "Belum diimplementasi" };
}
