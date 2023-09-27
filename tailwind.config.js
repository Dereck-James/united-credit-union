/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '108': '50.5rem',
        '100': '27.5rem'
      },
      backgroundColor: {
        'sky': '#00488c',
        'footer': '#999999',
        'grayBlack': '#666666',
        'f_white': '#eee'
      },
      colors: {
        'sky': '#00488c'
      },
      borderColor: {
        'grayHip': '#50485b'
      }
    },
  },
  plugins: [],
}

