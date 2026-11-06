"use client";
// =============================================================
// FILE   : src/komponen/undangan/FormUcapan.js
// JENIS  : Client Component + Server Action
// DOKUMEN: modul-1 "Ucapan"
//
// KONSEP REACT
// - Pola sama dengan FormRsvp (useActionState).
// - Reset form setelah sukses: useRef ke <form> lalu formRef.current.reset()
//   di dalam useEffect yang bergantung pada `state`.
//
// PSEUDOCODE
// props: { slug, defaultName }
// [state, formAction, pending] = useActionState(postWish, null)
// formRef = useRef(null)
// useEffect(() => { if (state?.ok) formRef.current?.reset() }, [state])
//
// return (
//   <form ref={formRef} action={formAction}>
//     <input type="hidden" name="slug" value={slug} />
//     <input name="name" defaultValue={defaultName} required maxLength={60} />
//     <textarea name="message" required maxLength={500} />
//     {state?.error && <p>{state.error}</p>}
//     <button disabled={pending}>Kirim Ucapan</button>
//   </form>
// )
// =============================================================

export default function FormUcapan({ slug, defaultName }) {
  // TODO
  return null;
}
