"use server";
// =============================================================
// FILE   : src/aksi/checkin.js
// JENIS  : Server Actions (petugas penerima tamu)
// DOKUMEN: modul-2-checkin-qr.md "Sisi petugas"
//
// PSEUDOCODE
// checkIn(slug, qrText, paxArrived)
//   event = getEventBySlug(slug)
//   staff = await getStaff(event.id); jika !staff → return { result: "UNAUTHORIZED" }
//
//   1. qrToken = parseCheckinPayload(qrText)
//      jika null → return { result: "TIDAK_VALID" }            // tanpa query DB
//   2. guest = guests where qr_token = qrToken AND qr_revoked_at IS NULL
//      jika !guest → return { result: "TIDAK_VALID" }
//      jika guest.event_id !== event.id → return { result: "BUKAN_ACARA_INI" }
//   3. dalam db.transaction:
//        existing = checkins where guest_id
//        jika existing → return { result: "SUDAH_CHECKIN", at: existing.created_at, guest }
//        jika paxArrived > guest.max_pax → return { result: "PAX_LEBIH", max: guest.max_pax }
//   4.   insert checkins { event_id, guest_id, pax_arrived, staff_id, method: "qr", device_info }
//        (UNIQUE(guest_id) jadi pengaman terakhir jika 2 petugas scan bersamaan
//         → tangkap error unique violation → anggap SUDAH_CHECKIN)
//   publish(event.id, "checkin", { name, category, table_no, pax: paxArrived })
//   return { result: "VALID", guest: { name, category, table_no, max_pax } }
//
// searchGuests(slug, q)                   // pencarian manual
//   staff wajib; q minimal 2 huruf
//   return 20 tamu where name ILIKE %q% (+ status sudah check-in atau belum)
//   JANGAN kembalikan phone/email
//
// manualCheckIn(slug, guestId, paxArrived) → sama seperti langkah 3–4, method: "manual"
//
// walkIn(slug, name, paxArrived)           // opsional
//   insert guest { needs_approval: true, category: "umum" } lalu check-in method "walkin"
// =============================================================

export async function checkIn(slug, qrText, paxArrived) {
  return { result: "TODO" };
}

export async function searchGuests(slug, q) {
  return [];
}

export async function manualCheckIn(slug, guestId, paxArrived) {
  return { result: "TODO" };
}

export async function walkIn(slug, name, paxArrived) {
  return { result: "TODO" };
}
