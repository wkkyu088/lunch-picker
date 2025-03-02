/** @type {import('tailwindcss').Config} */

const px0To10 = Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`${i}`, `${i}px`]))
const px0To100 = Object.fromEntries(Array.from({ length: 101 }, (_, i) => [`${i}`, `${i}px`]))
const px0To500 = Object.fromEntries(Array.from({ length: 500 }, (_, i) => [`${i}`, `${i}px`]))
const px0To1000 = Object.fromEntries(Array.from({ length: 1000 }, (_, i) => [`${i}`, `${i}px`]))
const z0To100 = Object.fromEntries(Array.from({ length: 101 }, (_, i) => [`${i}`, `${i}`]))

export default {
    content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: px0To100,
            borderWidth: px0To10,
            borderRadius: px0To100,
            lineHeight: px0To100,
            width: px0To1000,
            height: px0To1000,
            minWidth: px0To1000,
            minHeight: px0To1000,
            maxWidth: px0To1000,
            maxHeight: px0To1000,
            spacing: px0To500,
            zIndex: z0To100,
            fontFamily: {
                sans: ['Pretendard-Regular', 'sans-serif'],
                sejong: ['SejongGeulggot', 'sans-serif'],
                money: ['Moneygraphy-Rounded', 'sans-serif'],
            },
            colors: {
                BLACK: '#121212',
                DARK_GRAY: '#1E1E1E',
                GRAY: '#2E2E2E',
                MIDDLE_GRAY: '#6E6E6E',
                LIGHT_GRAY: '#E1E1E1',
                WHITE: '#F1F1F1',
                PRIMARY: '#3b82f6',
                PRIMARY_HOVER: '#2563EB',
                PRIMARY_ACTIVE: '#1E40AF',
                PRIMARY_INACTIVE: '#7B91B3',
            },
            boxShadow: {
                pn: '0px 0px 10px rgba(0,0,0,0.1)',
            },
        },
    },
    plugins: [],
    darkMode: 'selector',
}
