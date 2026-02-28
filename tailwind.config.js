/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'window-in': 'windowIn 0.3s ease-out forwards',
      },
      keyframes: {
        windowIn: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}