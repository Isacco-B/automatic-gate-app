/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bgDark: "#0f172a",
        bgLight: "rgb(249 250 251)",
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
        dark: {
          border: "hsl(var(--border-dark))",
          input: "hsl(var(--input-dark))",
          ring: "hsl(var(--ring-dark))",
          background: "hsl(var(--background-dark))",
          foreground: "hsl(var(--foreground-dark))",
          primary: {
            DEFAULT: "hsl(var(--primary-dark))",
            foreground: "hsl(var(--primary-foreground-dark))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary-dark))",
            foreground: "hsl(var(--secondary-foreground-dark))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive-dark))",
            foreground: "hsl(var(--destructive-foreground-dark))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted-dark))",
            foreground: "hsl(var(--muted-foreground-dark))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent-dark))",
            foreground: "hsl(var(--accent-foreground-dark))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover-dark))",
            foreground: "hsl(var(--popover-foreground-dark))",
          },
          card: {
            DEFAULT: "hsl(var(--card-dark))",
            foreground: "hsl(var(--card-foreground-dark))",
          },
        },
      },
    },
  },
  plugins: [],
};
