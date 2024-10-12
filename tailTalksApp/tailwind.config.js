/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
        "color-nft-base":
          "linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)",
        "color-nft-base-reverse":
          "linear-gradient(266.49deg, #9B51E0 2.84%, #3081ED 99.18%)",
        "background-nft-base":
          "linear-gradient(276.5deg, #2C1344 7.86%, #4F297E 83.78%)",
      },
      textFillColor: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
      },
      screens: {
        xs: "360px",
        // => @media (min-width: 375px)
        sm: "640px",
        // => @media (min-width: 640px)

        md: "768px",
        // => @media (min-width: 768px)

        lg: "1024px",
        // => @media (min-width: 1024px)

        xl: "1440px",
        // => @media (min-width: 1440px)

        "2xl": "1536px",
        // => @media (min-width: 1536px)
        "3xl": "2560px",
        "4xl": "3200px",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
      },

      spacing: {
        0: "0",
        2: "0.5rem", //8px
        3: "0.625rem", //10px
        4: "1rem", //16px
        5: "1.25rem", //20px
        6: "1.5rem", //24px
        7: "1.875rem", //30px
        9: "2.19rem", //35px
        10: "2.5rem", //40px
        11: "2.81rem", //45px
        12: "3.13rem", //50px
        15: "3.69rem", //59px
        16: "3.94rem", //63px
        20: "4.4rem", //70px
        22: "5.31rem", //85px
        24: "6rem", //96px
        28: "6.35rem", //101,6px
        30: "7.5rem", //120px
        34: "9.13rem", //146px
        36: "9.5rem", //152px
        42: "10.6rem", //170px
        48: "11.81rem", //189px
        52: "12.06rem", //193px
        56: "13.94rem", //223px
        62: "19.5rem", //312px
        64: "22.13rem", //354px
      },
      borderRadius: {
        sm: "15px",
        md: "20px",
        lg: "40px",
        xl: "50px",
      },
    },
  },
  plugins: [],
}
