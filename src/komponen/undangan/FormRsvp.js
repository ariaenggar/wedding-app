"use client";
// =============================================================
// FILE   : src/komponen/undangan/FormRsvp.js
// JENIS  : Client Component + Server Action
// DOKUMEN: modul-1 "RSVP"
//
// KONSEP REACT 19
// - useActionState(action, initialState) → [state, formAction, pending]
//   * <form action={formAction}> → submit TANPA e.preventDefault, tanpa fetch
//   * state  = nilai return terakhir dari submitRsvp (errors / ok)
//   * pending = true selama server memproses → matikan tombol
// - Input "controlled" (value + onChange) vs "uncontrolled" (defaultValue).
//   Di sini cukup uncontrolled; hanya `status` yang dikontrol karena
//   menentukan apakah input pax ditampilkan.
// - Data tambahan ke action lewat <input type="hidden" name="slug" />.
//
// PSEUDOCODE
// props: { slug, maxPax, initial }   // initial = rsvp tersimpan atau null
// [state, formAction, pending] = useActionState(submitRsvp, null)
// [status, setStatus] = useState(initial?.status ?? "hadir")
//
// return (
//   <form action={formAction}>
//     <input type="hidden" name="slug" value={slug} />
//     {["hadir","tidak","ragu"].map(s =>
//        <label key={s}><input type="radio" name="status" value={s}
//               checked={status === s} onChange={() => setStatus(s)} /> {label}</label>)}
//     {status === "hadir" &&
//        <select name="pax" defaultValue={initial?.pax ?? 1}>
//          {1..maxPax → <option>}
//        </select>}
//     {state?.errors?.pax && <p className="text-red-600">{state.errors.pax[0]}</p>}
//     <textarea name="note" defaultValue={initial?.note} maxLength={300} />
//     <button disabled={pending}>{pending ? "Menyimpan…" : "Kirim Konfirmasi"}</button>
//     {state?.ok && <p>Terima kasih atas konfirmasinya!</p>}
//     {state?.showQr && <a href={`/u/${slug}/tiket`}>Lihat QR Check-in</a>}
//   </form>
// )
// =============================================================

export default function FormRsvp({ slug, maxPax = 1, initial }) {
  // TODO
  return null;
}
