import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-caveat)", "cursive"],
        doodle: ["var(--font-architects)", "cursive"],
        accent: ["var(--font-kalam)", "cursive"],
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
