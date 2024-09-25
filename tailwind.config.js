/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite DE Grund"', "sans-serif"],
        oswald: ['"Oswald"', "sans-serif"], // Add your font here
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      vsm: "400px",
      smx: "500px",
      sm: "640px",
      ms: "700px",
      md: "768px",
      lmd: "950px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1440px", // Custom screen size
    },
  },
  plugins: [],
};
