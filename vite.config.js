import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            algorithm: "brotliCompress",
            threshold: 1025,
            verbose: true,
        }),
    ],
    build: {
        minify: "terser",
        terserOptions: { compress: { drop_console: true } },
    },
    base: "/project-starter-template/",
});
