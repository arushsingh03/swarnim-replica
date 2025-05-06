import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        abtBold: ['AmericanABT-Bold', 'sans-serif'],
        abtItalic: ['AmericanABT-Italic', 'sans-serif'],
        abtRoman: ['AmericanABT-Roman', 'sans-serif'],
        montserrat: ['Montserrat-Variable', 'sans-serif'],
        montserratItalic: ['Montserrat-Italic-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;  