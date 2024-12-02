/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#023047',
        'primary-light': '#03527a',
        'primary-dark': '#',
        'secondary': '#FB8500',
        'secondary-light': '',
        'secondary-dark': '',
        'background': '',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
