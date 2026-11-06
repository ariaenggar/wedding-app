// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/petugas/page.js
// URL    : /kelola/acara/<id>/petugas
// DOKUMEN: modul-2 "Kelola akun/PIN petugas"
//
// PSEUDOCODE
// PetugasPage({ params })
//   { idAcara } = await params ; { event } = await requireEventAccess(idAcara)
//   staff = event_staff where event_id
//   return (
//     <>
//       <p>Link login petugas: {APP_URL}/e/{event.slug}/masuk</p>
//       <ul>{staff.map(s => <li key={s.id}> {s.name} · {s.active ? "aktif" : "nonaktif"}
//          <form action={toggleStaff.bind(null, idAcara, s.id, !s.active)}><button>…</button></form>
//       </li>)}</ul>
//       <StaffForm eventId={idAcara} />    // nama + PIN 4–6 digit (PIN hanya terlihat saat dibuat)
//     </>
//   )
// =============================================================

export default async function PetugasPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Petugas {idAcara}</p>;
}
