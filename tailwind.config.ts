import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chinese-green": "#cde26d",
        "mauve": "#d0b4f9",
        "smoky-black": "#0c0c0c",
        "light-black": "#1b1b1b",
        "naples-yellow": "#f5d657",
        "mandarin": "#f57552",
        "ivory-white": "#F4F1E1"
      },
    },
  },
  plugins: [],
} satisfies Config;
