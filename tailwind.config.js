/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [require("tailwindcss-rtl")],
  theme: {
    // IMPORTANT: some of these colors are hard coded also in variables.scss
    // If you want to change theme, change in both files
    colors: {
      transparent: "#00000000",
      default: "#b6b6b6",
      white: "#fff",
      black: "#0C0D0F",
      info: "#0984e3",
      success: "#029F85",
      warning: "#ff9f43",
      danger: "#d63031",
      alpha: {
        white: "#ffffff1a",
        red: "#ff000025",
        green: "#029F8533",
      },
      primary: {
        light: "#EFC245",
        main: "#E0AF2E",
        dark: "#C08F0E",
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: "#f4f4f4",
        "dark-gray": "#2d3134",
      },
      text: {
        primary: "#333333",
        secondary: "#A19F9E",
        transparent: "#00000000",
      },
      gray: {
        100: "#f4f4f4",
        200: "#e8e8e8",
        300: "#dadada",
        400: "#cccccc",
        500: "#bbbbbb",
        600: "#aaaaaa",
        700: "#999999",
        800: "#888888",
        900: "#777777",
        A100: "#666666",
        A200: "#555555",
        A300: "#444444",
        A400: "#333333",
        A500: "#222222",
        A600: "#1a1a1a",
      },
    },
  },
};
