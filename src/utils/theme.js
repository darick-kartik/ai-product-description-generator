export const theme = {
  colors: {
    background: "#020617",
    card: "#0F172A",
    border: "#1E293B",

    primary: "#6366F1",
    accent: "#06B6D4",
    success: "#22C55E",
    danger: "#EF4444",
    warning: "#F59E0B",

    text: "#F8FAFC",
    muted: "#94A3B8",
  },

  gradients: {
    primary:
      "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)",

    glow:
      "radial-gradient(circle at center, rgba(99,102,241,0.25), transparent 70%)",
  },

  shadows: {
    glow: "0 0 40px rgba(99,102,241,0.35)",
    card: "0 20px 60px rgba(0,0,0,0.35)",
  },

  radius: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    full: "9999px",
  },

  animation: {
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
  },
};

export default theme;