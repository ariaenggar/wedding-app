"use client";
// =============================================================
// FILE   : src/komponen/petugas/FormPinPetugas.js
// JENIS  : Client Component + Server Action loginStaff
//
// PSEUDOCODE
// props: { slug }
// [state, formAction, pending] = useActionState(loginStaff, null)
// return (
//   <form action={formAction}>
//     <input type="hidden" name="slug" value={slug} />
//     <input name="pin" type="password" inputMode="numeric" maxLength={6} required autoFocus />
//     {state?.error && <p className="text-red-600">{state.error}</p>}
//     <button disabled={pending}>Masuk</button>
//   </form>
// )
// =============================================================

export default function FormPinPetugas({ slug }) {
  // TODO
  return <p>TODO: form PIN petugas</p>;
}
