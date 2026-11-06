// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/ucapan/page.js
// URL    : /kelola/acara/<id>/ucapan
// DOKUMEN: modul-1 "Moderasi ucapan (sembunyikan)"
//
// PSEUDOCODE
// UcapanPage({ params })
//   { idAcara } = await params ; await requireEventAccess(idAcara)
//   wishes = wishes where event_id order by created_at desc
//   return (
//     <ul>
//       {wishes.map(w => <li key={w.id} className={w.hidden ? "opacity-50" : ""}>
//          <b>{w.name}</b> {w.message}
//          <form action={setWishHidden.bind(null, idAcara, w.id, !w.hidden)}>
//            <button>{w.hidden ? "Tampilkan" : "Sembunyikan"}</button>
//          </form>
//       </li>)}
//     </ul>
//   )
// =============================================================

export default async function UcapanPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Moderasi ucapan {idAcara}</p>;
}
