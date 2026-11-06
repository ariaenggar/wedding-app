// =============================================================
// FILE   : src/pustaka/data-acara.js
// JENIS  : Query DB server-only yang dipakai banyak halaman
//
// KONSEP
// - React cache(): jika generateMetadata() dan page() sama-sama memanggil
//   getEventBySlug(slug) dalam satu request, query hanya jalan SEKALI.
//
// PSEUDOCODE
// import "server-only"
// import { cache } from "react"
// import { notFound } from "next/navigation"
//
// getEventBySlug = cache(async (slug) => {
//   event = db.query.events.findFirst({ where: slug, with: { sessions: true } })
//   jika !event → notFound()        // otomatis render not-found.js
//   return event
// })
//
// getInvitation = cache(async (eventId) => {
//   return { content, theme, sessions } untuk halaman undangan
// })
// =============================================================

export async function getEventBySlug(slug) {
  // TODO: ganti dengan query DB
  return { id: "dev", slug, title: "Contoh Acara", visibility: "private" };
}

export async function getInvitation(eventId) {
  // TODO
  return null;
}
