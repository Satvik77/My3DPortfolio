import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default {
  build: {
    chunkSizeWarningLimit: 1200, // Set a different size limit (in kilobytes) for the warning
  },
};
