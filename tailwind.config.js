/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "portfolioPrimary": "#0098D0",
        "portfolioSecondary": "#0056B8",
        "portfolioTextDark": "#2a2a2a",
        "portfolioTextLight": "#656560",
        "portfolioStroke": "#CAD0D8",
        "portfolioWhite": "#ffffff",
        "portfolioHover": '#0056B8',
        // Dark theme colors
        "portfolioDarkPrimary": "#0056B8",
        "portfolioDarkSecondary": "#003366",
        "portfolioDarkTextDark": "#ffffff",
        "portfolioDarkTextLight": "#cccccc",
        "portfolioDarkStroke": "#444444",
        "portfolioDarkBackground": "#1a1a1a",
        "portfolioDarkHover": '#003366',
      },
    },
  },
  plugins: [],
};
