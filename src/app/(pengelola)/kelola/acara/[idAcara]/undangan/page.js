// =============================================================
// FILE   : src/app/(pengelola)/kelola/acara/[idAcara]/undangan/page.js
// URL    : /kelola/acara/<id>/undangan
// DOKUMEN: modul-1 "Admin: Editor konten undangan", "Tema: Preview"
//
// PSEUDOCODE
// UndanganEditorPage({ params })
//   { idAcara } = await params ; { event } = await requireEventAccess(idAcara)
//   content = invitation_content where event_id (atau objek kosong)
//   themes  = semua themes
//   return (
//     <div className="grid lg:grid-cols-2 gap-6">
//       <InvitationEditor eventId={idAcara} content={content} themes={themes} />
//       <iframe src={`/u/${event.slug}`} className="h-[80dvh] w-[390px] border rounded-3xl" />  // preview HP
//     </div>
//   )
//
// InvitationEditor ("use client", src/komponen/pengelola/InvitationEditor.js):
//   - section: cover, foto pasangan, cerita, quote, musik, galeri, rekening, QRIS
//   - rekening: state array [{ bank, nomor, nama }] + tombol tambah/hapus baris
//       setAccounts(a => [...a, { bank: "", nomor: "", nama: "" }])
//       setAccounts(a => a.filter((_, i) => i !== idx))
//     kirim ke action sebagai <input type="hidden" name="bank_accounts" value={JSON.stringify(accounts)} />
//   - gambar: untuk awal cukup input URL (file di public/ atau link CDN);
//     upload ke storage dibuat nanti bersama modul foto
//   - useActionState(saveInvitationContent)
// =============================================================

export default async function UndanganEditorPage({ params }) {
  const { idAcara } = await params;
  // TODO
  return <p>TODO: Editor konten undangan {idAcara}</p>;
}
