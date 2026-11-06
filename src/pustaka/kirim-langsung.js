// =============================================================
// FILE   : src/pustaka/kirim-langsung.js
// JENIS  : Utilitas real-time (sisi SERVER untuk publish)
// DOKUMEN: 01-fondasi.md "Real-time"
//
// KONSEP
// - Nama channel: `event:${eventId}:${topic}`. Saat ini hanya topic "checkin"
//   (modul lain nanti menambah "media", "draw").
// - Server mem-publish (broadcast), browser men-subscribe (lihat src/hooks/useKanalLangsung.js)
// - Ini pengganti BroadcastChannel di prototipe penerima-tamu (yang hanya
//   jalan di browser yang sama).
//
// PSEUDOCODE
// import "server-only"
// import { createClient } from "@supabase/supabase-js"
//
// channelName(eventId, topic)      → `event:${eventId}:${topic}`
//
// publish(eventId, topic, payload)
//   ch = supabaseAdmin.channel(channelName(eventId, topic))
//   await ch.send({ type: "broadcast", event: topic, payload })
//   supabaseAdmin.removeChannel(ch)
//   // JANGAN masukkan data pribadi (no HP/email) ke payload — semua subscriber bisa baca
//
// Contoh payload:
//   checkin → { name, category, table_no, pax, at }
// =============================================================

export function channelName(eventId, topic) {
  return `event:${eventId}:${topic}`;
}

export async function publish(eventId, topic, payload) {
  // TODO: kirim broadcast via Supabase Realtime
}
