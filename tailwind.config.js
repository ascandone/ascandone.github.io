const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('@tailwindcss/ui/colors')

module.exports = {
  purge: {
    content: ['src/**/*.jsx', 'src/**/*.js', 'src/**/*.tsx'],
  },
  theme: {
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      serif: ['Eb Garamond', ...defaultTheme.fontFamily.serif], // Vollkorn
      mono: ['Roboto mono', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...colors,
      'darker-gray': '#131b1b',
      'darkest-gray': '#121212',
    },
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/typography'), //
  ],
}
