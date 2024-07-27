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
