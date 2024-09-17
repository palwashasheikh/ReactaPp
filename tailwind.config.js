module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueish: {
          50: '#06627C',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          80: '#06627C',  // Added 80% opacity version
        },
        orangeish: {
          50: '#FFF4E0',
          100: '#FFE8B3',
          200: '#FFDB80',
          300: '#FFCE4D',
          400: '#FFBF26',
          500: '#FFAB10', // Primary shade
          600: '#E6950E',
          700: '#CC7F0C',
          800: '#B26A0A',
          900: '#8A5107',
        },
      }
    },
  },
  plugins: [],
}
