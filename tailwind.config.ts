import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          buttonBg: "#FFB703",
          buttonBorder: "#FB8500",
          h1Text: "#023047",
        },
        dark: {
          buttonBg: "#8ECae6",
          buttonBorder: "#FF5A36",
          h1Text: "#219EBC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
