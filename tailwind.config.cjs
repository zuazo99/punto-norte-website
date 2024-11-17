const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        start: "'Press Start 2P'",
        anton: ["'Anton'"],
        brush: "'Good Brush'"
      },
      colors: {
        primary: "#f59e0b",
        secondary: "#14b8a6",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      animation: {
        float: 'float linear 2.5s infinite alternate'
      },
      letterSpacing: {
        superwide: '0.2em'
      },
      keyframes: {
        float: {
            '0%': {
              transform: 'translate3d(0, 0, 0)'
            },
            '100%': {
              transform: 'translate3d(0, 30px, 0)'
          }
        }
      }
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('@tailwindcss/typography'), require("tailwindcss-fluid-type")],
};
