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
  },
  plugins: [],
};
