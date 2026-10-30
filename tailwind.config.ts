import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Vazirmatn Variable"', 'Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe7ff',
          200: '#bfd3ff',
          300: '#93b4ff',
          400: '#5f8bfb',
          500: '#3a63f3',
          600: '#2445e0',
          700: '#1d36c4',
          800: '#1d2f9e',
          900: '#1e2d7c',
          950: '#151c4b',
        },
        sky2: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(36, 69, 224, 0.25)',
        card: '0 1px 2px rgba(16,24,40,.04), 0 4px 16px -4px rgba(16,24,40,.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2445e0 0%, #3a8bf5 55%, #22d3ee 100%)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
