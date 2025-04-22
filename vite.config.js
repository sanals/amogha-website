import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  // Important for environment variables
  define: {
    // For compatibility with React components that still use process.env
    'process.env': Object.entries(process.env).reduce((env, [key, value]) => {
      if (key.startsWith('VITE_')) {
        env[key.replace('VITE_', '')] = value;
      }
      return env;
    }, {})
  }
}); 