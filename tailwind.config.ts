import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
            screens: {
                'lg': '1280px',
            },
        extend: {
            // https://uicolors.app/create
            colors: {
                primary: {
                    DEFAULT: '#aaaaaa',
                    '50': '#fafafa',
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#aaaaaa',
                    '600': '#8d8d8d',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                    '950': '#121212'
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
