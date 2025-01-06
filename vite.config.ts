import { defineConfig, UserConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // for working inside Docker
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      host: 'localhost',
      port: 5173,
    },
    watch: { // for Docker on WSL2 only
      usePolling: true,
    }
  },
  plugins: [preact()],
  // for Vitest
  test: {
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
  }
} as UserConfig)