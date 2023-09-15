/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-green": "#3FB6D3",
        white: "#ffffff",
        "light-gray": "#24223e",
        gray: "#7f76b3",
        "dark-gray": "#7b73ae",
        black: "#000000",
      },
      gradient: {},
      borderRadius: {
        xxs: "4px",
        xs: "9px",
        sm: "15px",
        md: "20px",
        lg: "25px",
        xl: "35px",
        xxl: "60px",
        full: "100%",
      },
      fontFamily: {
        sans: ["Noto sans", "serif"],
      },
      backgroundColor: {
        "gradient-green":
          "linear-gradient(45deg, #4BE88E, #00C99F, #00A9A2, #008796, #4F7F9D)",
      },
    },
  },
  plugins: [],
};
