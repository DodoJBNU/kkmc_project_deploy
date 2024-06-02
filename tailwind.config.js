/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      minWidth: {
        120: "30rem",
        128: "32rem",
        160: "40rem",
        256: "64rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "kkmc-gray": "#555555",
        "underbar-blue": "008EDC",
        "input-bg": "#e6e6e6",
        "input-border": "#d3d3d3",
        "black-40": "rgba(0, 0, 0, 0.4)",
      },

      screens: {
        "under-mobile": { max: "359px" },
        mobile: "360px",
        "under-foldable": { max: "522px", min: "410" },
        foldable: "523px",
        sm: "640px",
        "under-tablet": { max: "767px", min: "695px" },
        tablet: "768px",
        md: "768px",
        "under-large": { max: "1023px", min: "865px" },
        lg: "1024px",
        "under-xl": { max: "1279px", min: "1024px" },
        xl: "1280px",
        "2xl": { min: "1536px" },
        "zero-to-tablet": { max: "768px", min: "0px" },
      },
    },
  },
  plugins: [],
};
