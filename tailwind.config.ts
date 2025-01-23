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
        primary:"var(--primary)",
        darkPrimary:"var(--primary-dark)",
        body:"var(--body)",
        highlight:"var(--highlight)",
        active:"var(--active)",
        teritiary:"var(--teritiary)"
      },
      fontFamily:{
        workSans:["Work Sans","sans serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
