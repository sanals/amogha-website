import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  // Use the minimal entry point
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}); 