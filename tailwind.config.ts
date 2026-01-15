import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd8a5',
          300: '#f8bc6d',
          400: '#f59e33',
          500: '#f2850b',
          600: '#e36a06',
          700: '#bc4f09',
          800: '#963f0f',
          900: '#793510',
        },
        coffee: {
          50: '#faf7f4',
          100: '#f4ede6',
          200: '#e8d9cc',
          300: '#d9bfa8',
          400: '#c79f7d',
          500: '#b8855a',
          600: '#a96f4a',
          700: '#8c583e',
          800: '#724838',
          900: '#5e3d32',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
