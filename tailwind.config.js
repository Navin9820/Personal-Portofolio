/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070b14',
          900: '#0a0f1a',
          850: '#0d1320',
          800: '#111827',
          700: '#1e293b',
          600: '#334155',
        },
        accent: {
          cyan: '#22d3ee',
          blue: '#38bdf8',
          indigo: '#818cf8',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
