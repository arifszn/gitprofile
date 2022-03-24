import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/GitProfile.jsx'),
      name: 'GitProfile',
      fileName: (format) => `gitprofile.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
