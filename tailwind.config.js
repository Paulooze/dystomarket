// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Important: Include your app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  darkMode: "class", // Important for dark mode
  theme: {
    extend: {
      colors: {
        "dysto-dark": "#121212", // Very dark gray (almost black) - Main background
        "dysto-dark-2": "#1f2937", // Slightly lighter dark gray - for cards, panels
        "dysto-gray": "#4b5563", // Medium gray - for secondary text, borders
        "dysto-light-gray": "#d1d5db", // Light gray - for less prominent text
        "dysto-white": "#ffffff", // Pure white - for main text
        "dysto-green": "#16a34a", // Green - for positive price changes, buttons
        "dysto-red": "#dc2626", // Red - for negative price changes
        "dysto-accent": "#06b6d4", // Cyan/Blue - for accents, links (from Moana image)
        // Add more shades as needed (e.g., dysto-green-dark, dysto-red-light)
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // Add this line
  ],
};
