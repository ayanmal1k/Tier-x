import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0052ff",
          active: "#003ecc",
          disabled: "#a8b8cc",
        },
        ink: "#0a0b0d",
        body: {
          DEFAULT: "#5b616e",
          strong: "#0a0b0d",
        },
        muted: {
          DEFAULT: "#7c828a",
          soft: "#a8acb3",
        },
        hairline: {
          DEFAULT: "#dee1e6",
          soft: "#eef0f3",
        },
        canvas: "#ffffff",
        surface: {
          soft: "#f7f7f7",
          card: "#ffffff",
          strong: "#eef0f3",
          dark: "#0a0b0d",
          "dark-elevated": "#16181c",
        },
        on: {
          primary: "#ffffff",
          dark: "#ffffff",
          "dark-soft": "#a8acb3",
        },
        semantic: {
          up: "#05b169",
          down: "#cf202f",
        },
        "accent-yellow": "#f4b000",
        platinum: "#e5e7eb",
        gold: "#d4a853",
      },
      fontFamily: {
        display: ["Sora", "Space Grotesk", "Inter Tight", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        sans: ["Inter", "Manrope", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Inter", "monospace"],
        headline: ["Sora", "Space Grotesk", "Inter Tight", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-mega": ["80px", { lineHeight: "1", letterSpacing: "-2px", fontWeight: "400" }],
        "display-xl": ["64px", { lineHeight: "1", letterSpacing: "-1.6px", fontWeight: "400" }],
        "display-lg": ["52px", { lineHeight: "1", letterSpacing: "-1.3px", fontWeight: "400" }],
        "display-md": ["44px", { lineHeight: "1.09", letterSpacing: "-1px", fontWeight: "400" }],
        "display-sm": ["36px", { lineHeight: "1.11", letterSpacing: "-0.5px", fontWeight: "400" }],
        "title-lg": ["32px", { lineHeight: "1.13", letterSpacing: "-0.4px", fontWeight: "400" }],
        "title-md": ["18px", { lineHeight: "1.33", letterSpacing: "0", fontWeight: "600" }],
        "title-sm": ["16px", { lineHeight: "1.25", letterSpacing: "0", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "body-strong": ["16px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "caption": ["13px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "caption-strong": ["12px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" }],
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "100px",
        full: "9999px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "96px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-delay": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-delay": "float 3s ease-in-out 1.5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
