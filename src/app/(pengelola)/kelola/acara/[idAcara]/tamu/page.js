// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/tamu/page.js
// URL    : /kelola/acara/<id>/tamu?q=andi&kategori=vip
// DOKUMEN: modul-1 "Manajemen tamu", "Generate link personal", "Kirim via WhatsApp"
//
// PSEUDOCODE
// TamuPage({ params, searchParams })
//   { idAcara } = await params ; { q, kategori } = await searchParams
//   { event } = await requireEventAccess(idAcara)
//   guests = guests where event_id + filter q/kategori, LEFT JOIN rsvps & checkins
//   return (
//     <>
//       <ImporTamu eventId={idAcara} />                 // CSV/Excel
//       <GuestForm eventId={idAcara} />                   // tambah satu tamu
//       <table>
//         <thead> Nama · Kategori · Pax · Meja · RSVP · Hadir · Aksi </thead>
//         {guests.map(g => {
//            link = `${APP_URL}/u/${event.slug}?g=${g.invite_token}`
//            pesan = `Kepada Yth. ${g.name}, kami mengundang Anda ... ${link}`
//            return <tr key={g.id}> ...
//              <a href={waLink(g.phone, pesan)} target="_blank">Kirim WA</a>
//              <CopyButton text={link} />
//              <form action={regenerateQr.bind(null, idAcara, g.id)}><button>Reset QR</button></form>
//              <form action={deleteGuest.bind(null, idAcara, g.id)}><button>Hapus</button></form>
//            </tr>
//         })}
//       </table>
//       <a href={`/api/ekspor/${idAcara}/tamu`}>Export CSV</a>
//     </>
//   )
// =============================================================

import ImporTamu from "@/komponen/pengelola/ImporTamu";

export default async function TamuPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return (
    <>
      <p>TODO: Daftar tamu {idAcara}</p>
      <ImporTamu eventId={idAcara} />
    </>
  );
}
