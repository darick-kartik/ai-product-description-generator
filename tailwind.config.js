/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        card: "#0F172A",
        border: "#1E293B",

        primary: "#6366F1",
        accent: "#06B6D4",
        success: "#22C55E",

        text: "#F8FAFC",
        muted: "#94A3B8"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.35)",
        cyan: "0 0 30px rgba(6,182,212,0.25)"
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(99,102,241,0.25), transparent 45%), radial-gradient(circle at bottom right, rgba(6,182,212,0.18), transparent 40%)"
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        shine: "shine 3s linear infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        grid: "grid 18s linear infinite"
      },

      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-12px)"
          },
          "100%": {
            transform: "translateY(0px)"
          }
        },

        glow: {
          from: {
            boxShadow: "0 0 20px rgba(99,102,241,.25)"
          },
          to: {
            boxShadow: "0 0 45px rgba(99,102,241,.55)"
          }
        },

        shine: {
          from: {
            backgroundPosition: "-200% center"
          },
          to: {
            backgroundPosition: "200% center"
          }
        },

        pulseSlow: {
          "0%,100%": {
            opacity: "1"
          },
          "50%": {
            opacity: ".7"
          }
        },

        grid: {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "100px 100px"
          }
        }
      },

      backdropBlur: {
        xs: "2px"
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem"
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  },
  plugins: []
};