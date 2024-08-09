/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
        'colorNFTBase':
          'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
        'colorNFTBase-reverse':
          'linear-gradient(266.49deg, #9B51E0 2.84%, #3081ED 99.18%)',
      },
      textFillColor: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
      },
      screens: {
        'xs': '360px',
        // => @media (min-width: 375px)
        'sm': '640px',
        // => @media (min-width: 640px)

        'md': '768px',
        // => @media (min-width: 768px)

        'lg': '1024px',
        // => @media (min-width: 1024px) 

        'xl': '1440px',
        // => @media (min-width: 1440px) 

        '2xl': '1536px',
        // => @media (min-width: 1536px) 
        '3xl': '2560px',
        '4xl': '3200px'
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        '16': '16px',
        '18': '18px',
        '25': '25px',
        '30': '30px',
        "35": "35px",
        '40': '40px',
        '50': '50px'
      },

      spacing: {
        "0": "0",
        "4": "1rem", //16px
        "5": "1.25rem", //20px
        "6": "1.5rem", //24px
        "7": "1.875rem",	//30px
        "10": "2.5rem", //40px
        "11": "2.81rem", //45px
        "24": "6rem", //96px
        "36": "9.5rem", //152px
        "48": "11.81rem", //189px
      },
    },
  },
  plugins: [],
}

