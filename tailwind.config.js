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
          white: '#FFFFFF',
          ice: '#F0F7FF',
          light: '#F7FBFF',
          teal: '#0B6E6E',
          blue: '#1A8FBF',
          gold: '#C8903A',
          navy: '#0D2137',
          text: '#3D5166',
          muted: '#5A7184',
          border: '#E2EEF5',
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
