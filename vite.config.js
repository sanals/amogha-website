import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Manual code splitting
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'react-icons'],
          'utils-vendor': ['react-intersection-observer'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Generate CSS sourcemaps in development
    cssCodeSplit: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    // Chunk size warnings at 1MB instead of default 500KB
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 8080,
  },
  // Environment variables
  define: {
    'process.env.VITE_APP_TITLE': JSON.stringify('AMOGHA The Ayur Hub'),
    'process.env.VITE_API_BASE': JSON.stringify(process.env.VITE_API_BASE || ''),
  },
}); 