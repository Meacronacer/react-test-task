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
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.scrollbar-thin': {
          useScrollbarWidth: 'thin',
          scrollbarColor: 'white',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width:'8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#E5E7EB'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            borderRadius: '20px',
            border:'1px solid white'
          }
        }
      }

      addUtilities(newUtilities, ['responsive', "hover"])
    }
  ],
}

