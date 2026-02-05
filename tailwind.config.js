/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Kozelsky - Style élégant gastronomique
        primary: {
          50: '#fdfcfa',
          100: '#f9f6f1',
          200: '#f5f0e8',  // Beige clair principal
          300: '#ebe3d6',
          400: '#d9cebe',
          500: '#c4b5a0',
          600: '#a99a82',
          700: '#8a7d68',
          800: '#6e6454',
          900: '#524a3f',
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',  // Noir texte
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4a853',  // Doré principal
          600: '#b8912e',
          700: '#92710a',
          800: '#78590a',
          900: '#5c4409',
        },
        // Couleurs utilitaires
        cream: '#f5f0e8',
        gold: '#d4a853',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-kozelsky': 'linear-gradient(135deg, #f5f0e8 0%, #ebe3d6 100%)',
      },
    },
  },
  plugins: [],
}
