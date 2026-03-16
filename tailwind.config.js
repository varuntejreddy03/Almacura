/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0C0F',
          deep: '#0F1318',
          card: '#141920',
          border: '#1E2730',
          teal: '#2E8B8B',
          tealDark: '#1A5F5F',
          tealLight: '#5BBFBF',
          gold: '#E8952A',
          goldLight: '#F5B563',
          green: '#4A7C59',
          white: '#F0F4F7',
          muted: '#8A9BAE',
          dim: '#4A5568',
        }
      },
      fontFamily: {
        cormorant: ["Playfair Display", "serif"],
        dm: ["Jost", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
      },
    },
  },
  plugins: [],
}
