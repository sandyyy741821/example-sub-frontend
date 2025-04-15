import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://13.51.101.168:5000',
    },
    host: '0.0.0.0', 
    strictPort: true,
  },
});
