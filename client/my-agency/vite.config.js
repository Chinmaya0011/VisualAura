import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define base dynamically based on the environment
export default defineConfig({
  plugins: [react()],
  base :'/', // Set BASE_URL via environment variable or default to '/'
})
