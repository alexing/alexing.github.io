// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0e0e10',
        foreground: '#d1d5db',      // soft white
        accent: '#86efac',          // soft pastel green
        accentBlue: '#93c5fd',      // dusty pastel blue
        subtle: '#9ca3af',          // footer gray
        accentSoft: '#93f5c2',      // brighter mint for special callouts
      },
    },
  },
  plugins: [],
}
