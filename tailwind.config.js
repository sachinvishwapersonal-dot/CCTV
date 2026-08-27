/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        primary: '#0693e3',
        success: '#00d084',
        danger: '#cf2e2e',
        muted: '#abb8c3',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
