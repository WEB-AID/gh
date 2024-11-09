import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'inner-orange': 'inset 0 0 10px rgba(255, 165, 0, 0.5)',
            },
            animation: {
                'spin-pause': 'spinPause 2s linear infinite',
            },
            keyframes: {
                spinPause: {
                    '0%': { transform: 'rotate(0deg)' },
                    '50%': { transform: 'rotate(360deg)' },
                    '75%': { transform: 'rotate(360deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            width: {
                '100vh': '100vh',
                '90vh': '90vh',
                '80vh': '80vh',
                '70vh': '70vh',
                '60vh': '60vh',
                '50vh': '50vh',
                '45vh': '45vh',
                '40vh': '40vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '20vh': '20vh',
                '10vh': '10vh',
            },
            height: {
                '100vh': '100vh',
                '90vh': '90vh',
                '80vh': '80vh',
                '70vh': '70vh',
                '60vh': '60vh',
                '50vh': '50vh',
                '45vh': '45vh',
                '40vh': '40vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '20vh': '20vh',
                '10vh': '10vh',
            },
        },
    },
    plugins: [],
}
export default config
