"use client";
// =============================================================
// FILE   : src/komponen/pengelola/FormMasukPengelola.js
// JENIS  : Client Component + Server Action loginAdmin
//
// PSEUDOCODE
// props: { next }
// [state, formAction, pending] = useActionState(loginAdmin, null)
// return (
//   <form action={formAction} className="flex flex-col gap-3">
//     {next && <input type="hidden" name="next" value={next} />}
//     <input name="email" type="email" autoComplete="email" required />
//     <input name="password" type="password" autoComplete="current-password" required />
//     {state?.error && <p className="text-red-600">{state.error}</p>}
//     <button disabled={pending}>{pending ? "Memeriksa…" : "Masuk"}</button>
//   </form>
// )
// =============================================================

export default function FormMasukPengelola({ next }) {
  // TODO
  return <p>TODO: form login admin</p>;
}
