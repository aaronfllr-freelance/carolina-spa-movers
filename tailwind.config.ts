import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            // https://uicolors.app/create
            colors: {
                primary: {
                    DEFAULT: '#a3c7e5', // Default relaxing blue
                    '50': '#f0f7fc', // Lightest blue
                    '100': '#e2effa',
                    '200': '#baddf4',
                    '300': '#91cbef',
                    '400': '#69b9ea',
                    '500': '#40a6e4', // Default relaxing blue
                    '600': '#2a86b6',
                    '700': '#216a8f',
                    '800': '#184d68',
                    '900': '#0e3142', // Darkest blue
                    '950': '#081b24' // Near black blue
                    },
                secondary: { 
                    DEFAULT: '#e2a55f',
                    '50': '#fff8f0',
                    '100': '#ffedd9',
                    '200': '#ffdbb2',
                    '300': '#ffc88b',
                    '400': '#ffb564',
                    '500': '#e2a55f', // Original color
                    '600': '#cc8f48',
                    '700': '#b67832',
                    '800': '#9f621c',
                    '900': '#874c07',
                    '950': '#603500'
                }
            },
            animation: {
            'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
