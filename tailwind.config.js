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
        "dysto-dark": "#0d0208", // Primary Background
        "dysto-dark-2": "#110f15", // Secondary Background
        "dysto-light": "#f0f4f8", // Primary Text
        "dysto-gray": "#a7b4c5", // Secondary Text
        "dysto-accent": "#00ffff", // Electric Blue
        "dysto-pink": "#ff0099", // Hot Pink/Magenta
        "dysto-green": "#66ff00", // Neon Green
        "dysto-purple": "#9900ff", // Deep Purple
        "dysto-neutral": "#2a2a2a", // Neutral Gray
        "dysto-red": "#ff3333",
        "dysto-yellow": "#facc15",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // Add this line
  ],
};
