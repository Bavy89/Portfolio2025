import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/bave-portfolio2025/",
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.pdf'],
  build: {
    assetsDir: 'assets'
  }
});