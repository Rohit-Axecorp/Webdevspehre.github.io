/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Centers the container on the page
        padding: '1rem', // Adds consistent padding
        screens: {
          DEFAULT: '100%', // Full width for smaller screens by default
          sm: '100%',      // Full width for small screens
          md: '100%',      // Full width for medium screens
          lg: '1200px',    // Set 1200px for screens up to 1536px
          xl: '1400px',    // Set 1400px for screens up to 1920px
          '2xl': '1400px', // Set 1400px for extra-large screens (1920px and up)
        },
      },      
      fontFamily: {
        sans: ['Gilroy', 'Arial', 'sans-serif'], // Default sans-serif font stack
        // Add other font families if needed
      },
    },
  },
  plugins: [],
};
