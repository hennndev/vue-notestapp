 // tailwind.config.js
 module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        'primary': '#1E201E'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }