import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: './tailwind.config.js', // explicitly provide config path if needed
    }),
  ],
})
