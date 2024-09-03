/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arrow': "url('/src/assets/Arrows.svg')",
      },
    },
  },
  plugins: [],
}

