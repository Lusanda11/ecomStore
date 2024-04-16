// ****************** tailwind_config_JS *********************


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: 'Cinzel',
        titleFont: 'Josefin Sans'
      }
    },
  },
  plugins: [],
}
