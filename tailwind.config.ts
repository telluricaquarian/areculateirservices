import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        'pixel-square': ['var(--font-geist-pixel-square)'],
        'pixel-grid': ['var(--font-geist-pixel-grid)'],
        'pixel-circle': ['var(--font-geist-pixel-circle)'],
        'pixel-triangle': ['var(--font-geist-pixel-triangle)'],
        'pixel-line': ['var(--font-geist-pixel-line)'],
      },
    },
  },
  plugins: [],
}

export default config
