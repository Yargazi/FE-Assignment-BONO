/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-color": "#333333",
        "button-bg": "#111",
        "button-text": "#fff",
        "button-border": "rgba(25, 118, 210, 0.5)",
      },
      padding: {
        7.5: "30px",
      },
      screens: {
        xs: "400px",

        lg: "1024px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        "button-padding": "5px 15px",
      },
      borderRadius: {
        "button-radius": "2.25rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        3: "3px",
      },
      boxShadow: {
        "custom-normal": "-3px 5px 1px rgba(1, 1, 1, 1)",
        "custom-hover": "-1px 1px 3px rgba(1, 1, 1, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".box-inherit": {
            "box-sizing": "inherit",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
