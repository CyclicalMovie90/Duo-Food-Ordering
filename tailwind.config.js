/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f7ff',
          100: '#b3e6ff',
          200: '#80d5ff',
          300: '#4dc4ff',
          400: '#1ab3ff',
          500: '#0099e6',
          600: '#0077b3',
          700: '#005580',
          800: '#00334d',
          900: '#00121a',
        },
        'secondary': {
          50: '#fff2e6',
          100: '#ffd9b3',
          200: '#ffc080',
          300: '#ffa64d',
          400: '#ff8d1a',
          500: '#e67300',
          600: '#b35900',
          700: '#804000',
          800: '#4d2600',
          900: '#1a0d00',
        },
        'accent': {
          50: '#f2ffe6',
          100: '#d9ffb3',
          200: '#bfff80',
          300: '#a6ff4d',
          400: '#8dff1a',
          500: '#73e600',
          600: '#59b300',
          700: '#408000',
          800: '#264d00',
          900: '#0d1a00',
        }
      }
    },
  },
  plugins: [],
}