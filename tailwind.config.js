/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "xs":"450px",
      "sm":"600px",
      "md":"768px",
      "lg":"1080px",
      "xl":"1440px",
      "2xl":"1500px",
    },
    extend: {
      colors: {
        'color-bg': '#50C0BA',
        'grayColor': '#DAD9D8 ',
        'colorPrimary': '#1b8dbf',
        'hero-bg': '#314252',
        'base-color': '#e8e7e3',
      },
      backgroundImage: {
        'hero-pattern':
          "h-[80vh] w-full bg-gradient-to-b from-black via-black to-transparent bg-fixed bg-cover bg-center bg-no-repeat, url('../assets/hero2.jpg')"
        },
      transitionProperty: {
        'transition': 'all 400ms ease',
      },
      logoFont:{
      "font-family": "'Dancing Script', cursive",
  
      },
    },
  },
  plugins: [],
}

// sm:
// @media (min-width: 640px) { ... }	
// md:
// @media (min-width: 768px) { ... }	
// lg:
// @media (min-width: 1024px) { ... }	
// xl:
// @media (min-width: 1280px) { ... }	
// 2xl:
// @media (min-width: 1536px) { ..