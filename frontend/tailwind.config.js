/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#182567',
        customBlue2: '#252AC7',
        customBlue3: '#18508B',
        customPurple: '#AF6AF0',
        customPurpleDark: '#582692',
        customOrange: '#F5AF64',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  plugins: [],
}
