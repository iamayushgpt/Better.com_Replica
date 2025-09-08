/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004733",
        secondary: "#017848",
        background: "var(--background)",
        foreground: "var(--foreground)",
        successBackground: "#F0F7F1",
        mainBg: "#FFFDFA",
        textSecondary: "#565D5A",
        accentSecondary: "#DFE0DC",
        accentPrimary: "#004733",
      },
      lineHeight: {
        heading: "1.2",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        myfont: ["MyFont", "sans-serif"],
      },
      padding: {
        base: "3rem",
      },
      margin: {
        base: "3.5rem",
        lg: "2.5rem",
        sm: "0.5rem",
      },
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
