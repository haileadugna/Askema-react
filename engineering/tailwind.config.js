/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#ff6363',
      secondary: {
        100: '#e2e2d5',
        200: '#888883',
      },
    },
  },
  plugins: [],
}

