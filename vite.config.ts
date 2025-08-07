import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  resolve: {
    alias: {
      "react-dom": "react-dom",
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  build: {
    outDir: "dist",
    assetsDir: "", // 루트 디렉토리에 assets 폴더 생성하지 않음,
    target: "esnext",
    sourcemap: true, // 소스맵 활성화
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], // 주요 벤더 라이브러리 청크로 분리
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["jsuites"],
  },
});
