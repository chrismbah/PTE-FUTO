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
    },
    fontFamily: {
      dmSans: ['Dm Sans', 'sans-serif'],
      inter: ['Inter', 'serif'],
      poppins: ['Poppins', 'serif']
    },
    screens: {
      'xss': '368px',

      'ss': '450px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '890px',
      // => @media (min-width: 768px) { ... }

      // 'xmd': '890px',

      'lg': '1057px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xss: '0.6rem',
      ss: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      md: '1.15rem',
      xl: '1.25rem',
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