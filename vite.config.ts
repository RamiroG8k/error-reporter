/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ErrorReporter',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        format: 'esm',
        globals: {
          react: 'React'
        }
      }
    },
    sourcemap: true,
    target: 'ES2015'
  },
  plugins: [react(), dts()]
});
