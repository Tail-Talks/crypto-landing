/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
      },
      textFillColor: {
        "text-gradient": "linear-gradient(to right, #9B51E0, #3081ED)",
      },
    },
  },
  plugins: [],
}
