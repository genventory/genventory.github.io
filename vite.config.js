import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Ensure this directory matches what's expected in the deployment script
  },
  base: "/genventory/",
  plugins: [react()],
})
