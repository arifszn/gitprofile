import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // If you are deploying to https://<USERNAME>.github.io/, set base to '/'.
  // If you are deploying to https://<USERNAME>.github.io/<REPO>/, for example your repository is at https://github.com/<USERNAME>/<REPO>, then set base to '/<REPO>/'.
  base: '/gitprofile/',
  plugins: [react()],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.jsx'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
    },
  },
});
