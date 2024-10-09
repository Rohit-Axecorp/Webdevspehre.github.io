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
        center: true, // Centers the container by default
        padding: '1rem', // Optional: Adds padding to the container
        screens: {
          DEFAULT: '100%', // Use full width by default
          lg: '1670px', // Set 1670px for large screens and above
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
