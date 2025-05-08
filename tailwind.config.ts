import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "oklch(.769 .188 70.08)",
        second: {
          100: "#f5edd7",
          200: "#f9ce8e",
          300: "oklch(.987 .022 95.277)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
