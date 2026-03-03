import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        surface: 'var(--surface)',
        accent: 'var(--accent)',
        'text-main': 'var(--text-main)',
        'transformative-teal': 'var(--transformative-teal)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
