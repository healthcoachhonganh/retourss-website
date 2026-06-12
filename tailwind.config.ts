import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F9F6EC",
        oat: "#E8DDC7",
        clay: "#9B7658",
        earth: "#6F523C",
        olive: "#7B8354",
        moss: "#3F5A42",
        forest: "#21382A",
        ink: "#1F251E"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(33, 56, 42, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
