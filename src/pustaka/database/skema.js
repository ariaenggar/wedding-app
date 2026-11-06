// =============================================================
// FILE   : src/pustaka/database/skema.js
// JENIS  : Definisi tabel Drizzle ORM (sumber kebenaran struktur DB)
// DOKUMEN: 01-fondasi.md + "## Database" di modul-1 & modul-2
//          (tabel modul lain ditambahkan saat modulnya dikerjakan)
//
// KONSEP
// - Setiap tabel = pgTable("nama", { kolom... }, (t) => [index...])
// - Setelah diubah: npm run db:generate → npm run db:migrate
//
// PSEUDOCODE — import dari "drizzle-orm/pg-core":
//   pgTable, pgEnum, uuid, text, integer, boolean, doublePrecision,
//   timestamp, jsonb, uniqueIndex, index
//
// ENUM
//   roleEnum        = owner | admin
//   visibilityEnum  = public | private
//   sessionTypeEnum = akad | resepsi
//   categoryEnum    = vip | keluarga | umum
//   rsvpStatusEnum  = hadir | tidak | ragu
//   checkinMethod   = qr | manual | walkin
//
// ---- FONDASI ----
// users          id(uuid pk), email(unique), password_hash, name, role, created_at
// events         id, owner_id → users.id, slug(UNIQUE INDEX), title, groom_name,
//                bride_name, visibility, theme_id, timezone("Asia/Jakarta"),
//                settings(jsonb, default {}), created_at
//                (kolom album_mode/album_reveal_at ditambah nanti saat modul album)
// event_sessions id, event_id, type, starts_at, ends_at, venue_name, address,
//                lat, lng, maps_url, stream_url
// guests         id, event_id(INDEX), name, phone, email, category, max_pax(default 1),
//                table_no, invite_token(UNIQUE), qr_token(UNIQUE), qr_revoked_at,
//                needs_approval(bool, untuk walk-in), created_at
// event_staff    id, event_id, name, pin_hash, role("usher"), active
//
// ---- MODUL 1 UNDANGAN ----
// themes             id, name, config(jsonb: { colors, fonts, layout })
// invitation_content event_id(pk), cover_image, couple_photos(jsonb), story, quote,
//                    music_url, gallery(jsonb), bank_accounts(jsonb), qris_image
// rsvps              id, guest_id(UNIQUE → 1 tamu 1 rsvp, dipakai upsert),
//                    status, pax, note, updated_at
// wishes             id, event_id, guest_id(nullable), name, message, hidden, created_at
//
// ---- MODUL 2 CHECK-IN ----
// checkins   id, event_id, guest_id(UNIQUE), pax_arrived, staff_id, device_info,
//            method, created_at
//
// CONTOH SATU TABEL (ketik sendiri sisanya dengan pola yang sama):
//   export const events = pgTable("events", {
//     id: uuid("id").primaryKey().defaultRandom(),
//     ownerId: uuid("owner_id").notNull().references(() => users.id),
//     slug: text("slug").notNull(),
//     title: text("title").notNull(),
//     visibility: visibilityEnum("visibility").notNull().default("private"),
//     settings: jsonb("settings").notNull().default({}),
//     createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
//   }, (t) => [uniqueIndex("events_slug_idx").on(t.slug)])
// =============================================================

// TODO: export const users = pgTable(...), events = ..., dst.
export {};
