/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#334155',
        searchButton: '#34D399',
        pageBg: '#F3F4F6',
        searchPageText: '#006400',
        cardText: '#1F2937',
        cardPrice: '#14B8A6',
        cartBox: '#F59E0B',
      },
      height: {
        custom: '370px',
      },
      width: {
        custom: '220px',
        detailsBox: '744px',
      },
    },
  },
  plugins: [],
}
