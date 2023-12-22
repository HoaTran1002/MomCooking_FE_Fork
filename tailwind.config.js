/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        menu_animation: {
          '0%': {   transform: 'translateX(-100%)'},
          '100%': { transform: 'translate(0)' },
        }
      },
      animation:{
        menu_animation:'menu_animation 0.2s linear'
      }
    },
  },
  plugins: [
    
  ],
}

