/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    fontFamily: {
      sans: ['Roboto Mono', 'monospace'],
    },
    colors: {
      ...colors
    },

    extend: {
      height: {
        screen: '100dvh'
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}