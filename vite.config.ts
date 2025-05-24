
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ssr } from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr({ prerender: true }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Remove manual chunks configuration that conflicts with SSR
    rollupOptions: {
      output: {
        // Only apply manual chunks for client build, not SSR
        ...(process.env.VITE_SSR !== 'true' && {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['lucide-react']
          }
        })
      }
    }
  }
}));
