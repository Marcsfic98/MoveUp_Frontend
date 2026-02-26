/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        neonPulse: {
          "0%, 100%": {
            boxShadow: "0 4px 20px -5px rgba(0,175,250,0.6)",
            borderColor: "rgba(0,175,250,1)",
          },
          "50%": {
            boxShadow: "0 4px 35px 2px rgba(0,175,250,0.9)",
            borderColor: "rgba(0,255,255,1)",
          },
        },
      },
      animation: { "neon-pulse": "neonPulse 1.2s ease-in-out infinite" },
    },
  },
}
