/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#FAF8F5',
        paper: '#FFFFFF',
        beige: '#F4EFE6',
        ink: '#22201C',
        gold: '#C9A24B',
        'gold-light': '#E4CE94',
        bronze: '#8C6A3F',
        moss: '#5C6B54',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        script: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(60, 45, 15, 0.25)',
        card: '0 10px 40px -12px rgba(60, 45, 15, 0.18)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E4CE94 0%, #C9A24B 50%, #8C6A3F 100%)',
        'sheen': 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
