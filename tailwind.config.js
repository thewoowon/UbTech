/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"",
  
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { },
  },
  plugins: [require('@tailwindcss/typography')],
}
