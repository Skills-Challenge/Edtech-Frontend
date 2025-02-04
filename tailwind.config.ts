import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary:"var(--primary)",
        darkPrimary:"var(--primary-dark)",
        body:"var(--body)",
        highlight:"var(--highlight)",
        active:"var(--active)",
        teritiary:"var(--teritiary)",
        text:"var(--text)",
        border:"var(--border)",
        text_dark:"var(--text-dark)",
        headings:"var(--heading)",  
        subheading:"var(--subheading)",
      },
      fontFamily:{
        workSans:["Work Sans","sans serif"]
      },
      screens: {
        "2xsm": "375px",
        xsm: "425px",
        xmd:"882px",
        xlg:"1124px",
        "3xl": "2000px",
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
