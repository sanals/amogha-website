/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6a994e',
          DEFAULT: '#386641',
          dark: '#1a3521',
        },
        secondary: {
          light: '#f2cc8f',
          DEFAULT: '#bc6c25',
          dark: '#8a5a44',
        },
        neutral: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          medium: '#adb5bd',
          dark: '#343a40',
          darker: '#212529',
        },
        // Adding inspired colors
        ayurveda: {
          green: '#3a6a42', // Darker green
          gold: '#d9a94a', // Gold accent color
          sage: '#8ba888', // Lighter sage green
          earth: '#72543e', // Earth brown tone
          cream: '#f5f0e6', // Light background color
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Montserrat', 'Arial', 'sans-serif'], // For headings
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 