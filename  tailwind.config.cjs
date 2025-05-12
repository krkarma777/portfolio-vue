export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    safelist: [
        'dark:bg-primary',
        'dark:text-white',
        'bg-white',
        'text-black',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F1117',
                accent: '#00C7B1',
            },
        },
    },
    plugins: [],
}
