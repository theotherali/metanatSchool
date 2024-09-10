/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "colors": {
        "lightishBlue": {
          50: "#EBF1FF",
          100: "#D6E2FF",
          200: "#ADC6FF",
          300: "#85A9FF",
          400: "#6190FF",
          500: "#3772FF",
          600: "#004BFA",
          700: "#0037B8",
          800: "#00257A",
          900: "#00123D",
          950: "#00091F"
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        EstedadThin: "Estedad Thin",
        EstedadLight: "Estedad Light",
        EstedadMedium: "Estedad Medium",
        EstedadBold: "Estedad Bold",
        MikhakWoff2one: "Mikhak-woff2-1",
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      // backgroundImage: {
      //   "home-mobile": "url('../images/headerBgMobile.webp')",
      //   "home-desktop": "url('../images/headerBgDesktop.webp')",
      // },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};