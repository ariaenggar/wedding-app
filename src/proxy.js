// =============================================================
// FILE   : src/proxy.js
// JENIS  : Proxy Next 16 (dulu namanya middleware.js)
// DOKUMEN: 01-fondasi.md "proxy.js", node_modules/next/dist/docs/01-app/
//          03-api-reference/03-file-conventions/proxy.md
//
// KONSEP
// - Jalan SEBELUM halaman dirender. Cocok untuk redirect cepat.
// - Proxy cukup cek "ada cookie atau tidak" (murah). Verifikasi penuh
//   (signature, kepemilikan event) tetap dilakukan di page/action.
// - config.matcher membatasi path mana yang melewati proxy.
//
// PSEUDOCODE
// import { NextResponse } from "next/server"
//
// export function proxy(request)
//   path = request.nextUrl.pathname
//
//   jika path diawali "/kelola" dan !request.cookies.has("admin_session")
//     url = new URL("/masuk", request.url); url.searchParams.set("next", path)
//     return NextResponse.redirect(url)
//
//   cocok = path.match(/^\/e\/([^/]+)\/pindai/)
//   jika cocok dan !request.cookies.has("staff_session")
//     return NextResponse.redirect(new URL(`/e/${cocok[1]}/masuk`, request.url))
//
//   return NextResponse.next()
//
// export const config = { matcher: ["/kelola/:path*", "/e/:slug/pindai"] }
// =============================================================

import { NextResponse } from "next/server";

export function proxy(request) {
  // TODO: tambahkan pengecekan cookie sesuai pseudocode
  return NextResponse.next();
}

export const config = {
  matcher: ["/kelola/:path*", "/e/:slug/pindai"],
};
