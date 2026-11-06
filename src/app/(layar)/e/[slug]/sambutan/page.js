// =============================================================
// FILE   : src/app/(layar)/e/[slug]/sambutan/page.js
// URL    : /e/budi-ani/sambutan?k=<display_key>
// JENIS  : Server Component → LayarSambutan (Client)
// DOKUMEN: modul-2 "Layar sambutan"
//
// KONSEP
// - Pengganti prototipe src/app/penerima-tamu-layar (BroadcastChannel)
//   dengan real-time lintas perangkat.
//
// PSEUDOCODE
// WelcomePage({ params, searchParams })
//   { slug } = await params ; { k } = await searchParams
//   event = await getEventBySlug(slug)
//   jika k !== event.settings.displayKey → notFound()
//   return <LayarSambutan eventId={event.id} title={event.title}
//                         couple={`${event.groom_name} & ${event.bride_name}`} />
// =============================================================

import LayarSambutan from "@/komponen/layar/LayarSambutan";

export default async function WelcomePage({ params }) {
  const { slug } = await params;
  // TODO
  return <LayarSambutan eventId={slug} title="TODO" couple="" />;
}
