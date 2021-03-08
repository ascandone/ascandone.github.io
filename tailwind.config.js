const defaultTheme = require('tailwindcss/defaultTheme')

const colors = require('@tailwindcss/ui/colors')

const generateGradients = (step) =>
  Object.fromEntries(
    Array.from({ length: 360 / step }, (_, i) => i * step).map((n) => [
      `gradient-${n}`,
      `linear-gradient(${n}deg, var(--gradient-color-stops))`,
    ]),
  )

module.exports = {
  purge: {
    content: ['src/**/*.jsx', 'src/**/*.js', 'src/**/*.tsx', 'src/**/*.ts'],
  },
  theme: {
    backgroundImage: generateGradients(15),
    fontFamily: {
      sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      serif: ['Eb Garamond', ...defaultTheme.fontFamily.serif], // Vollkorn
      mono: ['Roboto mono', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...colors,
      'dark-gray': '#3a3a3c',
      'darker-gray': '#131b1b',
      'darkest-gray': '#121212',
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
