import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  format: ['esm'],
  outDir: 'build',
  clean: true,
  dts: true,
  minify: true,
  sourcemap: true,
  shims: true,
  target: 'esnext',
});