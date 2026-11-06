// =============================================================
// FILE   : src/app/(tamu)/u/[slug]/page.js
// URL    : /u/budi-ani?g=<invite_token>
// JENIS  : Server Component (default App Router, TANPA "use client")
// DOKUMEN: modul-1-undangan-digital.md "Halaman tamu"
//
// KONSEP
// - Folder "(tamu)" = route group: hanya untuk mengelompokkan, TIDAK
//   muncul di URL.
// - Folder "[slug]" = dynamic segment → nilainya ada di props `params`.
// - Next 16: params & searchParams adalah Promise → WAJIB di-await.
// - Server Component boleh async & langsung ambil data (tanpa useEffect/fetch).
// - Bagian yang butuh interaksi (klik, state, timer) dipisah ke Client
//   Component di src/komponen/undangan/*. Server Component boleh
//   merender Client Component, dan mengoper data lewat props (harus
//   bisa di-serialize: string/number/array/object biasa, bukan fungsi/Date*).
//   *Date sebaiknya dikirim sebagai string ISO.
//
// PSEUDOCODE
// generateMetadata({ params })                    // untuk preview cantik di WhatsApp
//   { slug } = await params
//   event = await getEventBySlug(slug)
//   return { title: event.title,
//            description: `Undangan pernikahan ${groom} & ${bride}`,
//            openGraph: { images: [cover_image] } }
//
// UndanganPage({ params, searchParams })
//   { slug } = await params ; { g } = await searchParams
//   event  = await getEventBySlug(slug)            // notFound() otomatis jika tidak ada
//   inv    = await getInvitation(event.id)          // { content, theme, sessions }
//   guest  = g ? await findGuestByToken(slug, g) : await getGuestSession(event.id)
//   rsvp   = guest ? rsvp milik guest : null
//   wishes = 20 ucapan terbaru (hidden = false)
//
//   return (
//     <div style={themeToStyle(inv.theme)}>
//       <Sampul guestName={guest?.name} slug={slug} token={g} coupleNames=... coverImage=...>
//         {/* children = isi undangan, baru tampil setelah "Buka Undangan" */}
//         <PemutarMusik src={inv.content.music_url} />
//         <section> nama & foto pengantin (next/image) </section>
//         <HitungMundur targetIso={sesiPertama.starts_at.toISOString()} />
//         <JadwalAcara sessions={inv.sessions} timeZone={event.timezone} />
//         {sessions.map(s => <PetaLokasi lat lng venue />)}
//         <TambahKeKalender slug title start end location />
//         <SiaranLangsung url={stream_url} startsAt=... />
//         <Galeri items={inv.content.gallery} />
//         <AmplopDigital accounts={bank_accounts} qrisImage={qris_image} />
//         {guest && <FormRsvp slug maxPax={guest.max_pax} initial={rsvp} />}
//         {guest && rsvp?.status === "hadir" && event.visibility === "private"
//            && <QrCheckin slug={slug} qrToken={guest.qr_token} />}
//         <FormUcapan slug defaultName={guest?.name} />
//         <DaftarUcapan slug initialItems={wishes} />
//       </Sampul>
//     </div>
//   )
// =============================================================

import { getEventBySlug } from "@/pustaka/data-acara";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  // TODO: ambil event & kembalikan title/description/openGraph
  return { title: `Undangan ${slug}` };
}

export default async function UndanganPage({ params, searchParams }) {
  const { slug } = await params;
  const { g } = await searchParams;
  const event = await getEventBySlug(slug);

  // TODO: ketik implementasi sesuai pseudocode di atas
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">TODO: Undangan {event.title}</h1>
      <p>Token tamu: {g ?? "(tidak ada)"}</p>
    </main>
  );
}
