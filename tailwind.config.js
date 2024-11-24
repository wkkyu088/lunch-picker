/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
