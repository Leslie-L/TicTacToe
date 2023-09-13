/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(26 43 51)',
        secondary: 'rgb(30 54 64)',
        bntGray:'rgb(169 190 201)',
        bntYellow:'rgb(242 178 54)',
        bntBlue:'rgb(46 196 190)',
        
      },
    },
  },
  plugins: [],
}

