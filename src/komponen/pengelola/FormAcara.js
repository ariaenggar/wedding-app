"use client";
// =============================================================
// FILE   : src/komponen/pengelola/FormAcara.js
// JENIS  : Client Component (form buat/edit acara)
//
// KONSEP REACT
// - Satu komponen untuk "create" dan "edit": pilih action berdasarkan prop.
// - Slug otomatis dari nama pengantin: input "controlled" yang diisi
//   selama user belum mengedit slug secara manual.
//
// PSEUDOCODE
// props: { mode, event, themes }
// action = mode === "create" ? createEvent : updateEvent
// [state, formAction, pending] = useActionState(action, null)
// [groom, setGroom] = useState(event?.groom_name ?? "")
// [bride, setBride] = useState(event?.bride_name ?? "")
// [slug, setSlug]   = useState(event?.slug ?? "")
// [slugTouched, setSlugTouched] = useState(mode === "edit")
//
// autoSlug = slugify(`${groom}-${bride}`)   // huruf kecil, spasi → "-", buang karakter aneh
// slugValue = slugTouched ? slug : autoSlug
//
// return (
//   <form action={formAction} className="grid gap-3 max-w-xl">
//     {event && <input type="hidden" name="id" value={event.id} />}
//     title, groom_name (onChange setGroom), bride_name (onChange setBride)
//     <input name="slug" value={slugValue} onChange={e => { setSlugTouched(true); setSlug(e.target.value) }} />
//     <small>Link: /u/{slugValue}</small>
//     visibility (public/private), timezone, theme_id (select dari themes)//     {state?.errors && tampilkan per field}
//     <button disabled={pending}>Simpan</button>
//   </form>
// )
// =============================================================

export default function FormAcara({ mode = "create", event, themes = [] }) {
  // TODO
  return <p>TODO: form acara ({mode})</p>;
}
