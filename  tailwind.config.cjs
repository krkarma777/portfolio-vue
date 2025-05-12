/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F1117',
                accent: '#00C7B1',
            },
            fontFamily: {
                sans: ['"Pretendard Variable"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
