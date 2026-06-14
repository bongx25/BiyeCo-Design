/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          ivory: '#fbf8f1',
          cream: '#f4ede4',
          gold: '#cba052',
          goldLight: '#e5c98d',
          navy: '#4A3671',
          charcoal: '#334155',
          champagne: '#f7f2eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Alex Brush', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'luxury-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
