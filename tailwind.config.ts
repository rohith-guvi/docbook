import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./docs/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "#111827"
      }
    }
  },
  plugins: []
};

export default config;
