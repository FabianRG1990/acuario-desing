import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        abyss: "#061826",
        ink: "#0B2235",
        tide: "#103349",
        shoal: "#1B4767",
        foam: "#F5F1E8",
        sand: "#E8DCC4",
        dune: "#C8B896",
        lagoon: "#5EC4D1",
        bioluminescent: "#7FE3D6",
        kelp: "#4A6B5C",
        coral: "#D87060",
        urchin: "#3A2A4D",
      },
      fontFamily: {
        // Principal: Times New Roman en TODO el contenido textual + botones + navbar.
        display: ["'Times New Roman'", "Times", "serif"],
        sans: ["'Times New Roman'", "Times", "serif"],
        mono: ["'Times New Roman'", "Times", "serif"],
        button: ["'Times New Roman'", "Times", "serif"],
        // Secundaria de títulos: Fraunces italic light (palabras más opacas).
        editorial: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        // Geist Sans ya es geométrica y bien dibujada — el tightening
        // agresivo sólo perjudica la legibilidad. Neutralizamos `tight`
        // y dejamos `tighter` apenas perceptible para displays masivos.
        tighter: "-0.005em",
        tight: "0em",
        normal: "0.01em",
        eyebrow: "0.22em",
      },
      borderRadius: {
        squircle: "2rem",
        "squircle-sm": "1.25rem",
      },
      boxShadow: {
        diffusion:
          "0 30px 80px -30px rgba(6, 24, 38, 0.45), 0 8px 24px -12px rgba(6, 24, 38, 0.25)",
        innerLight: "inset 0 1px 0 rgba(245, 241, 232, 0.08)",
        ring: "inset 0 0 0 1px rgba(245, 241, 232, 0.07)",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.32, 0.72, 0, 1)",
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        caustic: {
          "0%, 100%": {
            transform: "translate3d(0,0,0) scale(1)",
            opacity: "0.55",
          },
          "50%": {
            transform: "translate3d(2%,-1%,0) scale(1.04)",
            opacity: "0.75",
          },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rise": {
          "0%": { transform: "translateY(120%) scale(0.6)", opacity: "0" },
          "20%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120%) scale(1)", opacity: "0" },
        },
        godray: {
          "0%, 100%": { opacity: "0.55", transform: "translate3d(-50%, 0, 0) scaleY(1)" },
          "50%": { opacity: "1", transform: "translate3d(-50%, 0, 0) scaleY(1.04)" },
        },
        sediment: {
          "0%": { transform: "translate3d(0, 0, 0)", opacity: "0" },
          "8%": { opacity: "0.55" },
          "92%": { opacity: "0.35" },
          "100%": { transform: "translate3d(0, 60vh, 0)", opacity: "0" },
        },
      },
      animation: {
        caustic: "caustic 14s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee-x 50s linear infinite",
        rise: "rise 9s linear infinite",
        godray: "godray 14s ease-in-out infinite",
        sediment: "sediment 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
