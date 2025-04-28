import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/items': 'http://localhost:18080',
      '/buy': 'http://localhost:18080',
      '/transactions': 'http://localhost:18080',
    },
  },
});