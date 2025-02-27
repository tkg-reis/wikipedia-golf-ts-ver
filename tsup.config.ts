import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['backend/index.ts'],
    outDir: './dist/backend',
    format: ['cjs'],
    splitting: false, 
    treeshake : false,
    silent: true
  },
  {
    entry: ['popup/*.ts'],
    outDir: './dist/popup',
    format: ['cjs'],
    splitting: true,
    silent: true
  },
  {
    entry: ['content/*.ts'],
    outDir: './dist/content',
    format: ['cjs'],
    splitting: true,
    silent: true
  }
]);
