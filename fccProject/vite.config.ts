import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',                 //changes the default path used in build process
  build: {
    outDir: 'dist-react',     //changed default build directory to stop conflict with electron.
  },
  server: {
    port: 5123,
    strictPort: true,         //warns if the port is unavailable
  }
})
