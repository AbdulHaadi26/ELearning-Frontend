/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      colors: {
        gradient: {
          100: '#6a89cc',
          200: '#0a3d62',
        }
      }
    },
  },
  plugins: [],
}