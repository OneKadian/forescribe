/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ["Inter", "Sans Serif"],
        title: ["Inter", "Sans Serif"],
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "3.75rem",
          },
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        mini: [
          "0.75rem",
          {
            lineHeight: "1.5rem",
          },
        ],
      },
      colors: {
        black: {
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
          500: "#000000",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          DEFAULT: "#000000",
        },
        white: {
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FAFAFA",
          400: "#FAFAFA",
          500: "#F7F7F7",
          600: "#C7C7C7",
          700: "#949494",
          800: "#636363",
          900: "#303030",
          DEFAULT: "#FFFFFF",
        },
        purpleCustom: "#8B3DFF",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FCFCFC",
          400: "#FAFAFA",
          500: "#FAFAFA",
          600: "#E3E3E3",
          700: "#C7C7C7",
          800: "#A6A6A6",
          900: "#787878",
          950: "#595959",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#FFF9F0",
          100: "#FFF5E5",
          200: "#FFEBCC",
          300: "#FFDEAD",
          400: "#FFD494",
          500: "#FFC56E",
          600: "#FFA929",
          700: "#EB8D00",
          800: "#C77700",
          900: "#8A5300",
          950: "#663D00",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        tertiary: "#495E8E",
        badge: "#F1F5F9",
        badgeText: "#475569",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
