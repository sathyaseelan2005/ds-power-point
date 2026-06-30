/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#eaba0cff',
          hover: '#e0b205',
          light: '#fce373',
          lighter: '#fdf1b8',
          lightest: '#FCF5DF',
          bg: '#FEFDF4',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          lighter1: '#1B2F4D',
          lighter2: '#274C77',
          lighter3: '#3D6AA5',
          lightest: '#5A8CC7',
          dark: '#0D1B2A', // Map dark to DEFAULT to preserve existing classes
        },
        neutral: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          border: '#E8E8E8',
          text: {
            primary: '#0F172A',
            secondary: '#64748B',
          }
        },
        cream: '#FFFDF8',

        // Retaining old aliases briefly if any component misses an update, but we will migrate everything.
        primary: {
          gold: '#EDC023',
          navy: '#0B1F3A',
        },
        accent: {
          gold: '#EDC023',
        },
        secondary: {
          dark: '#1F2937',
        },
        background: '#FAFAFA',
        heading: '#0B1F3A',
        paragraph: '#64748B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
        'glow': 'none',
        'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 15px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
