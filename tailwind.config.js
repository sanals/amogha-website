/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3dd6b5',
          DEFAULT: '#07b498',
          dark: '#047a63',
        },
        secondary: {
          light: '#c06fc0',
          DEFAULT: '#9c3f9a',
          dark: '#6b2a6a',
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