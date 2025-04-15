import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': '',
    },
    port: 443,
    host: '0.0.0.0', 
    strictPort: true,
  },
});
