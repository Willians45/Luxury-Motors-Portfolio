/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#C4A661',
                    black: '#0D0D0D',
                    gray: '#1A1A1A',
                    light: '#F5F5F5',
                    white: '#FFFFFF',
                    text: '#1F1F1F',
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
