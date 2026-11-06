// =============================================================
// FILE   : src/pustaka/tema.js
// JENIS  : Fungsi murni (tema undangan → CSS variables)
// DOKUMEN: modul-1-undangan-digital.md "Tema"
//
// KONSEP
// - Tema disimpan di DB sebagai JSON. Kita ubah jadi object style
//   { "--color-primary": "#b08968", ... } lalu pasang di elemen pembungkus:
//     <div style={themeToStyle(theme)}> ... </div>
// - Di CSS/Tailwind cukup pakai var(--color-primary), mis. bg-(--color-primary)
//
// PSEUDOCODE
// DEFAULT_THEMES = {
//   klasik:  { colors: { primary: "#b08968", bg: "#fdf8f3", text: "#3d2c1e" },
//              fonts: { heading: "Playfair Display", body: "Inter" }, layout: "center" },
//   modern:  { ... },
//   rustic:  { ... },
// }
//
// themeToStyle(config)
//   c = { ...DEFAULT_THEMES.klasik, ...config }
//   return {
//     "--color-primary": c.colors.primary,
//     "--color-bg":      c.colors.bg,
//     "--color-text":    c.colors.text,
//     "--font-heading":  c.fonts.heading,
//     "--font-body":     c.fonts.body,
//   }
// =============================================================

export const DEFAULT_THEMES = {};

export function themeToStyle(config) {
  // TODO
  return {};
}
