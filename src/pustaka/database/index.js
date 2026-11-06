// =============================================================
// FILE   : src/pustaka/database/index.js
// JENIS  : Modul server-only (koneksi database)
// DOKUMEN: docs/technical/01-fondasi.md
//
// KONSEP
// - File ini HANYA boleh di-import dari kode server (Server Component,
//   Server Action, Route Handler). Jangan import dari file "use client".
// - Di mode dev, Next me-reload modul berkali-kali → simpan koneksi di
//   globalThis supaya tidak membuka ratusan koneksi.
//
// PSEUDOCODE
// 1. import "server-only"            // error saat build jika ter-import di client
// 2. import postgres from "postgres"
//    import { drizzle } from "drizzle-orm/postgres-js"
//    import * as schema from "./skema"
// 3. client = globalThis.__pg ?? postgres(process.env.DATABASE_URL, { max: 10 })
//    jika NODE_ENV !== "production" → globalThis.__pg = client
// 4. export const db = drizzle(client, { schema })
//
// CONTOH PEMAKAIAN NANTI
//   import { eq } from "drizzle-orm"
//   const event = await db.query.events.findFirst({ where: eq(events.slug, slug) })
// =============================================================

// TODO: ganti stub ini dengan koneksi drizzle sungguhan
export const db = null;
