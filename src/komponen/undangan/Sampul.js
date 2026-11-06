"use client";
// =============================================================
// FILE   : src/komponen/undangan/Sampul.js
// JENIS  : Client Component ("use client" → boleh pakai state & onClick)
// DOKUMEN: modul-1 "Sampul/landing"
//
// KONSEP REACT
// - useState untuk menyimpan "sudah dibuka atau belum".
// - Prop `children`: isi undangan dirender di server lalu "dititipkan"
//   ke komponen client ini. Komponen client hanya memutuskan kapan menampilkannya.
// - Browser melarang audio autoplay sebelum ada interaksi user → tombol
//   "Buka Undangan" sekaligus memicu musik (lewat custom event / context).
// - useTransition: menjalankan Server Action tanpa membekukan UI.
//
// PSEUDOCODE
// props: { guestName, slug, token, coupleNames, coverImage, children }
//
// [opened, setOpened] = useState(false)
// [isPending, startTransition] = useTransition()
//
// handleOpen()
//   setOpened(true)
//   window.dispatchEvent(new Event("undangan:play"))   // didengar PemutarMusik
//   jika token → startTransition(() => openInvitation(slug, token))  // set cookie guest_session
//   window.scrollTo({ top: 0 })
//
// jika !opened → return (
//   <section className="fixed inset-0 grid place-items-center"> foto cover,
//     "The Wedding of", coupleNames,
//     guestName && <p>Kepada Yth. <b>{guestName}</b></p>,
//     <button onClick={handleOpen}>Buka Undangan</button>
//   </section>
// )
// return <>{children}</>
// =============================================================

export default function Sampul({ guestName, slug, token, coupleNames, coverImage, children }) {
  // TODO
  return <>{children}</>;
}
