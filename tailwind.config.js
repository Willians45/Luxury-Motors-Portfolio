/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#C4A661',
                    black: '#0D0D0D', // Deep black for dark mode
                    gray: '#1A1A1A',  // Dark gray for dark mode UI
                    light: '#F5F5F5', // Off-white for light mode bg
                    white: '#FFFFFF',
                    text: '#1F1F1F',  // Main text for light mode
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
