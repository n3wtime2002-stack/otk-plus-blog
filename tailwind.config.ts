import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#070707",
          900: "#0d0d0f",
          850: "#151517",
          800: "#1b1b1f"
        },
        amberplus: "#ffae36"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 174, 54, 0.22)",
        soft: "0 20px 70px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at 50% 0%, rgba(255, 174, 54, 0.2), transparent 34%)",
        "steel-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
