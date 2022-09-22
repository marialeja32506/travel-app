const { theme } = require("tailwindcss/defaultConfig");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        rounded: ['"Montserrat"', ...theme.fontFamily.sans],
      },
    
      
      height: {
        49: "13rem",
        50: "22rem",
        17: "5rem",
        81: "21rem",
        82: "22rem",
        97: "26rem",
        100: "30rem",
        107: "33rem",
        108: "35rem",
        112: "36rem",
        128: "38rem",
        130: "39rem",
        144: "44rem",
        150: "47rem",
        160: "50rem",
        165: "60rem",
        170: "70rem",
        180: "80rem",
        190: "100rem",
        195: "110rem",
        200: "136rem",
        220: "150rem",
        300: "335rem",
        350: "346rem",
        400: "540rem",
      },
      fontSize: {
        m: ["16px"],
        xxl: ["40px", "44px"],
      },
      width: {
        70: "17rem",
        82: "21rem",
        112: "28rem",
        128: "32rem",
        132: "40rem",
      },
      margin: {
        112: "180rem",
      },
      borderRadius: {
        m: "6rem",
      },
    },
    colors: {
      primaryBlue: "#00224f",
      primaryGreen: "#0EE7C5",
      secondaryBlue: "#001d3d",
      primaryMarron: "#42210B",
      primarySlate: "#999999",
      white: colors.white,
      transparent: "transparent",
      current: "currentColor",
      gray: "colors.trueGray",
      ...colors,
    },
    fontFamily: {
      sans: ['"Open Sans"', ...theme.fontFamily.sans],
      rounded: ['"Montserrat"', ...theme.fontFamily.sans],
    },
    screens: {
      mobile: { min: "300px", max: "739px" },
      tablet: { min: "740px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px" },
    },
    stroke: {
      strokeBlue: "#00224f",
    },
  },
  plugins: [],
};
