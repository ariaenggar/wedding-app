// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/sesi/page.js
// URL    : /kelola/acara/<id>/sesi
// DOKUMEN: 01-fondasi.md "CRUD sesi acara (akad/resepsi)"
//
// KONSEP
// - <form action={serverAction}> TANPA useActionState juga boleh untuk
//   form sederhana (mis. tombol hapus). Gunakan .bind untuk mengikat argumen:
//     <form action={deleteSession.bind(null, idAcara, s.id)}><button>Hapus</button></form>
//
// PSEUDOCODE
// SesiPage({ params })
//   { idAcara } = await params ; await requireEventAccess(idAcara)
//   sessions = event_sessions where event_id order by starts_at
//   return (
//     <>
//       {sessions.map(s => <div key={s.id}>
//          <SessionForm eventId={idAcara} session={s} />                 // edit
//          <form action={deleteSession.bind(null, idAcara, s.id)}><button>Hapus</button></form>
//       </div>)}
//       <h2>Tambah Sesi</h2> <SessionForm eventId={idAcara} />
//     </>
//   )
//
// SessionForm ("use client", src/komponen/pengelola/SessionForm.js):
//   useActionState(upsertSession) ; field: type, starts_at, ends_at (datetime-local),
//   venue_name, address, lat, lng, maps_url, stream_url
// =============================================================

export default async function SesiPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Sesi acara {idAcara}</p>;
}
