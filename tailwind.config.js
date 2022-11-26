/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main-bg': 'hsl(217, 54%, 11%)',
      'card-bg': 'hsl(216, 50%, 16%)',
      'outline-line': 'hsl(215, 32%, 27%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'white':'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
