/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hover_color:'#FF6283',
        primary:'#FF385C',
        logo:'#4F46E5',
      }
    },
  },
  plugins: [],
}

