/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#5c2e27',
        'primary-dark': '#4a251f',
        'primary-light': '#6e3a32',
        'secondary': '#ff5e08',
        'secondary-dark': '#e04e00',
        'secondary-light': '#ff7a3a',
        'tertiary': '#fdbd9e',
        'tertiary-dark': '#fca47a',
        'tertiary-light': '#fed5be',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}