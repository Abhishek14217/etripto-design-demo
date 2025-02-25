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
        navyBlue: "#122986",
        primaryCyan: "#02EDD6",
        steelGray: "#6E7699",
        sunflower: "#FEBB01",
        lightGray: "#FAFAFA",
        neutralGray: "#A1A3A1",
        softGray: "#F0F0F0",
        dustyGray: "#BAB5B5",
        grayDark: "#A9A9A9",
        blueDark: "#0E1E2C",
        mintLight: "#F2FFFE",
        deepIndigo: "#566294",
        softBlue: "#F5F8FF",
      },
      fontSize: {
        fontDeskLargest: "1.25rem",
        fontDeskLarge: "1rem",
        fontDesk: "0.875rem",
        fontDeskSmall: "0.75rem",
        fontDeskSmallest: "0.5rem",
      },
      spacing: {
        sectionGap: "3rem",
        gapLargest: "1.5rem",
        gapLarge: "1.25rem",
        gap: "1rem",
        gapMed: "0.75rem",
        gapSmall: "0.5rem",
        gapSmallest: "0.25rem",
      },
      boxShadow: {
        "custom-hover": "0px 0px 15px 12px rgba(10, 102, 194, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
