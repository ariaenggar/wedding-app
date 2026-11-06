// =============================================================
// FILE   : src/pustaka/format.js
// JENIS  : Fungsi murni (boleh dipakai di server MAUPUN client)
// DOKUMEN: modul-1 "Lokasi & waktu", "Tambah ke kalender", "Peta"
//
// KONSEP
// - Fungsi murni = input sama → output sama, tanpa efek samping.
//   Paling mudah dites (Vitest) dan aman di-import di mana saja.
//
// PSEUDOCODE
// formatTanggal(date, timeZone = "Asia/Jakarta")
//   return new Intl.DateTimeFormat("id-ID", { dateStyle: "full", timeZone }).format(date)
//   → "Sabtu, 12 Desember 2026"
//
// formatJam(date, timeZone)        → Intl "HH.mm" + " WIB"
//
// googleCalendarUrl({ title, start, end, location, details })
//   ubah start/end ke format UTC "YYYYMMDDTHHmmssZ"
//   return "https://calendar.google.com/calendar/render?action=TEMPLATE"
//          + "&text=" + encode(title) + "&dates=" + s + "/" + e
//          + "&location=" + encode(location) + "&details=" + encode(details)
//
// buildIcs({ uid, title, start, end, location, url })
//   return baris-baris teks dipisah "\r\n":
//     BEGIN:VCALENDAR / VERSION:2.0 / PRODID:-//wedding-system//ID
//     BEGIN:VEVENT / UID / DTSTAMP / DTSTART / DTEND / SUMMARY / LOCATION / URL
//     END:VEVENT / END:VCALENDAR
//
// mapsDeepLink(lat, lng)           → `https://maps.google.com/?q=${lat},${lng}`
// mapsEmbedUrl(lat, lng)           → `https://maps.google.com/maps?q=${lat},${lng}&output=embed`
//
// waLink(phone, text)
//   normalisasi: "0812..." → "62812...", buang karakter non-angka
//   return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
//
// toCsv(rows[], columns[])         → header + baris, escape tanda kutip & koma
// =============================================================

export function formatTanggal(date, timeZone = "Asia/Jakarta") {
  // TODO
  return String(date);
}

export function formatJam(date, timeZone = "Asia/Jakarta") {
  // TODO
  return String(date);
}

export function googleCalendarUrl(input) {
  throw new Error("TODO: googleCalendarUrl");
}

export function buildIcs(input) {
  throw new Error("TODO: buildIcs");
}

export function mapsDeepLink(lat, lng) {
  throw new Error("TODO: mapsDeepLink");
}

export function mapsEmbedUrl(lat, lng) {
  throw new Error("TODO: mapsEmbedUrl");
}

export function waLink(phone, text) {
  throw new Error("TODO: waLink");
}

export function toCsv(rows, columns) {
  throw new Error("TODO: toCsv");
}
