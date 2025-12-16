import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#0E0E0E",
        surface: "#121212",
        zinc400: "#A1A1AA",
        "prism-yellow": "#F3E68F",
        "neon-pink": "#EFA9B6",
        cyan: "#4AF2EA"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(244, 235, 159, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
