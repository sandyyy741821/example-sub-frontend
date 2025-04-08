import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://sub-mainfrontendnet.netlify.app',
    },
    port: 443,
    host: '0.0.0.0', 
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'D:/Internship/server-github-services/sub-frontend/example.com+2-key.pem')),  
    //   cert: fs.readFileSync(path.resolve(__dirname, 'D:/Internship/server-github-services/sub-frontend/example.com+2-cert.pem')),
    // },
    strictPort: true,
  },
});
