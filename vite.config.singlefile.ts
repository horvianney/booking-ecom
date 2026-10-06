import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

// Build spécial : tout le site (JS, CSS, polices, images) est compilé
// dans UN SEUL index.html — la personne qui le reçoit n'a qu'à
// double-cliquer dessus pour voir la page, sans serveur ni hébergement.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: "dist-single",
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
