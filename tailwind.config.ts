import type { Config } from 'tailwindcss';

// Theme-aware colors read CSS variables (see app/globals.css) so dark mode
// swaps the palette without a `dark:` variant on every class.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
const scale = (name: string, steps: number[]) => Object.fromEntries(steps.map((s) => [s, v(`${name}-${s}`)]));

const config: Config = {
  darkMode: 'class',
  // Hover styles only on devices that can hover, so taps on phones don't leave cards stuck in hover.
  future: { hoverOnlyWhenSupported: true },
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Vazirmatn Variable"', 'Vazirmatn', 'system-ui', 'sans-serif'],
        display: ['"Markazi Text"', '"Vazirmatn Variable"', 'serif'],
      },
      colors: {
        brand: scale('brand', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]),
        slate: scale('slate', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        paper: v('paper'),
        ink: v('ink'),
        body: v('body'),
        rule: v('rule'),
        tint: v('tint'),
        marker: '#7EE6F5',
        // Fixed deep blue for solid blocks (footer, CTA) in both themes.
        navy: '#15237A',
        sky2: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      // Nothing meant to be read goes below 13px: Persian letterforms read small.
      fontSize: { xs: ['0.8125rem', { lineHeight: '1.25rem' }] },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
