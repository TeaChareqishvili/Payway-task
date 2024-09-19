/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto-400", "Roboto-500", "Roboto-600"],
      },
    },
  },
  plugins: [],
};
