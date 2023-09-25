/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      flexGrow: {
        2:'2',
        3:'3'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    
  ],
}

