/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-1': 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 23.55%, rgba(239, 239, 239, 0.50) 78.35%)',
        'card-3':"background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 23.55%, rgba(239, 239, 239, 0.50) 78.35%)"
       
      },
    },
  },
  plugins: [],
}
