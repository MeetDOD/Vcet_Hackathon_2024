/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'chakra': ['Chakra Petch', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'zilla': ['Zilla Slab', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}