import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [
    // Agar motionCanvas.default hai toh safe access ke liye:
    (typeof motionCanvas === 'function' ? motionCanvas : (motionCanvas as any).default)({
      project: ['./src/project.ts'],
    }),
  ],
});