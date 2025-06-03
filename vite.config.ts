import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/liveball/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});