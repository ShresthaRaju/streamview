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
          dark: "#282837",
          light: "#D9D9D9",
        },
        white: "#FEFEFE",
        black: "#111111",
        grayscale: {
          10: "#E1E1E2",
          50: "#7D7E83",
          70: "#4C4E55",
          80: "#34363E",
          100: "#02050F",
        },
      },
    },
  },
  plugins: [],
};
