/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        realestate: {
          light: '#f5f9ff',
          DEFAULT: '#c7d2fe',
          dark: '#4f46e5',
        },
      },
    },
  },
  plugins: [],
}
