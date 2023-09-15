/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-green": "#3FB6D3",
        white: "#ffffff",
        "white-blue": "#EDFAFE",
        "white-green": "F0FBF8",
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
        'sans': ['Noto sans', 'serif'],
      },
      backgroundImage: {
        "gradient-green":
          "linear-gradient(45deg, #4BE88E, #00C99F, #00A9A2, #008796, #4F7F9D)",
        "gradient-text":
          "linear-gradient(100deg, #000000 0%, #29CFAE 40%, #42C6B9 50%, #62BFC2 60%, #3ECDB3 90%, #36ACEA 100%)",
      },
    },
  },
  plugins: [],
};
