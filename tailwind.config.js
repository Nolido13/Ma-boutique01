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
        'primary': '#00ff01',
        'primary-dark': '#00cc01',
        'primary-light': '#33ff34',
        'primary-deep': '#006600',
        'primary-deep-dark': '#004d00',
        'secondary': '#ffffff',
        'tertiary': '#ff5a00',
        'tertiary-dark': '#e04e00',
        'tertiary-light': '#ff7a33',
        'cream': '#fef9f0',
        'cream-dark': '#f5ede0',
        'beige': '#faf5eb',
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