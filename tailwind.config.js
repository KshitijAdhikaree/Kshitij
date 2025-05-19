/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  devtool: "source-map",
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "gradient-bg": "gradientBG 8s ease infinite",
        "text-color-fade": "textColorFade 8s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundImage:
              "linear-gradient(270deg, #F8EDED, #FF8225, #B43F3F, #173B45)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundImage:
              "linear-gradient(270deg, #FF8225, #B43F3F, #173B45, #F8EDED)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            backgroundImage:
              "linear-gradient(270deg, #F8EDED, #FF8225, #B43F3F, #173B45)",
          },
        },
        textColorFade: {
          "0%, 100%": { color: "#173B45" },
          "25%": { color: "#B43F3F" },
          "50%": { color: "#FF8225" },
          "75%": { color: "#F8EDED" },
        },
      },
      backgroundSize: {
        200: "200% 200%",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px,#1b1b1b 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 4px,#f5f5f5 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
};
