import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output directory so existing deploy config keeps working.
    outDir: 'build',
  },
});
