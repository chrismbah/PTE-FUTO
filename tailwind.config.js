/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      'green1': '#00875a',
      'green2': '#21875a',
      'green3':'#1c3f21',
      'green4':'#03875b',
      'green5': '#03ab73',
      'yellow1': '#ecd504'
    },
    fontFamily: {
      dmSans: ['Dm Sans', 'sans-serif'],
      inter: ['Inter', 'serif'],
      poppins: ['Poppins', 'serif'],
      satisfy: ['Satisfy', 'serif']
    },
    screens: {
      'xxss': '300px',

      'xss': '368px',

      'ss': '450px',

      'sss': "545px",

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'xsm': '750px',

      'md': '890px',
      // => @media (min-width: 768px) { ... }
      'mmd': '980px',

      'xmd': '1010px',

      'lg': '1057px',
      // => @media (min-width: 1024px) { ... }
      'xlg': '1150px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xll': '1350px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1700px'
    },
    fontSize: {
      sss: '0.5rem',
      xss: '0.6rem',
      ss: '0.7rem',
      sm: '0.8rem',
      xs: '0.9rem',
      base: '1rem',
      md: '1.15rem',
      lg: '1.20rem',
      xl: '1.25rem',
      xll: '1.4rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}