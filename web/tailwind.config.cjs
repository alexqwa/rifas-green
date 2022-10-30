/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      borderRadius: {
        lift: "0.3125rem",
      },

      colors: {
        "rifas-blue": "#4863f7",
        "rifas-border-line": "#29292e",
      },
    },
  },
  plugins: [],
}
