/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-white': 'rgba(255, 255, 255, 1)',
        'card-gray': '#1E1E1E',
        'hover-card-gray': '#1C1C1C',
        'card-red': '#FF001D',
        'hover-card-red': '#DD001D',
        'social': '#F5F5F5',
        'header-border': '#282828',
        'body': '#141414',
      },screens: {
        'xs': '350px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

