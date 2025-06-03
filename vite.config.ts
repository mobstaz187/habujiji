import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/habujiji/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});