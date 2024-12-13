/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['./src/**/*.{html,js}', 'index.html'],
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: {
          900: 'hsl(217,19%,35%)',
          700: 'hsl(214,17%,51%)',
          400: 'hsl(212,23%,69%)',
          200: 'hsl(210,46%,95%)',
        },
      },
    },
  },
  plugins: [],
};
