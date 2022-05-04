module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
      brand: {
        300:'#9960FF',
        500:'#5257e6'
      }
    },
    borderRadius: {
      md: '4px',
    }
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}