/** @type {import('tailwindcss').Config} */
module.exports = {
  purge : {
    content: [
    "./src/*.{html,js}",
    "./index.html"
  ],
  options:{
    safelist:[
      'hovGrow',
      'listtitleContainer',
      'listContainer',
      'listTitle',
      'todo',
      'listTitleText',
      'makeTask',
      'listBtn',
      'iconBtn',
    ]
  },
},
  theme: {
    extend: {
      flexGrow: {
        2:'2',
        3:'3',
        4:'4'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hovGrow': {
          '@apply transform transition-transform ease-in-out hover:scale-101': '',
        },
        '.listtitleContainer': {
          '@apply w-full p-2 overflow-y-auto': '',
        },
        '.listContainer': {
          '@apply w-full p-2 flex grow-4 flex-col gap-2 overflow-y-auto justify-start': '',
        },
        '.listTitle': {
          '@apply sticky top-0 z-10 bg-white': '',
        },
        '.todo': {
          '@apply flex justify-between items-center p-1 rounded shadow shadow-black hovGrow hover:scale-102 hover:shadow-blue-300 sm:hover:scale-101 md:p-2.5': '',
        },
        '.listTitleText': {
          '@apply break-words h-fit  w-full text-4xl p-1 pb-2 border-b border-black mb-2 overflow-y-scroll sm:p-2 sm:pb-4 sm:text-5xl': '',
        },
        '.makeTask': {
          '@apply w-full bg-neutral-400 placeholder-black text-black hovGrow rounded p-1': '',
        },
        '.listBtn': {
          '@apply w-full h-fit py-1.5 break-words border border-black/50 sm:hover:bg-[#a3a3a3]': '',
        },
        '.iconBtn':{
          '@aplly w-8 h-1/2 flex justify-center': '',
        },
        '.iconHolder':{
          '@apply flex flex-col gap-2 grow items-end': '',
        }
      };
      addUtilities(newUtilities);
    },],
  }

