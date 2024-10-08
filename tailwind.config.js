/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#685CF0",
        secondary: "#F1F0FF ",
        tertiary: "##141720",
        success: "#00C566",
        error: "#E53935",
        warning: "#FACC15",
        line: {
          DEFAULT: "#E9EBED",
          dark: "#282837",
          light: "#D9D9D9",
        },
        white: "#FEFEFE",
        black: {
          DEFAULT: "#111111",
          3: "#8C8E98",
        },
        grayscale: {
          10: "#E1E1E2",
          30: "#B0B0B3",
          50: "#7D7E83",
          70: "#4C4E55",
          80: "#34363E",
          80: "#1B1D26",
          100: "#02050F",
        },
      },
      fontSize: {
        xxs: ["10px", "18px"],
      },
    },
  },
  plugins: [],
};
