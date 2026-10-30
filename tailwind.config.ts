import type { Config } from 'tailwindcss';

// Theme-aware colors read CSS variables (see app/globals.css) so dark mode
// swaps the palette without a `dark:` variant on every class.
// Spec and rationale: docs/design-system.md
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;
const scale = (name: string, steps: number[]) => Object.fromEntries(steps.map((s) => [s, v(`${name}-${s}`)]));
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Estedad Variable"', 'Tahoma', 'system-ui', 'sans-serif'],
        // Kept as an alias so existing `font-display` headings use the Persian face.
        display: ['"Estedad Variable"', 'Tahoma', 'system-ui', 'sans-serif'],
        // The language being learned (also applied automatically via [lang]).
        latin: ['"Literata Variable"', 'Georgia', 'serif'],
        naskh: ['"Markazi Text"', '"Estedad Variable"', 'serif'],
      },
      // Major third from a 16px base; Persian needs taller lines than Latin.
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.7' }],
        sm: ['0.875rem', { lineHeight: '1.8' }],
        base: ['1rem', { lineHeight: '1.9' }],
        lg: ['1.125rem', { lineHeight: '1.85' }],
        xl: ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.375rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.15' }],
      },
      // In dark mode one lapis can't be both a fill under white text and text on
      // dark paper, so brand text utilities read a lighter variable there.
      textColor: {
        brand: { 500: v('brand-text'), 600: v('brand-text') },
      },
      colors: {
        brand: { ...scale('brand', steps), hover: v('brand-hover') },
        accent: scale('accent', steps),
        slate: scale('slate', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
        paper: v('paper'),
        tint: v('tint'),
        raised: v('raised'),
        rule: v('rule'),
        line: v('line'),
        ink: v('ink'),
        body: v('body'),
        muted: v('muted'),
        success: { DEFAULT: v('success'), soft: v('success-soft') },
        warning: { DEFAULT: v('warning'), soft: v('warning-soft') },
        danger: { DEFAULT: v('danger'), soft: v('danger-soft') },
        // Highlighter for words in the language being learned.
        marker: v('mark'),
        // Solid ink blocks (footer, CTA) stay deep lapis in both themes.
        navy: '#121B45',
        // Turquoise for fixed ink surfaces (hero stage, footer), same in both themes.
        turq: { DEFAULT: '#22C6DC', soft: '#5CDAE9' },
        sky2: { 300: v('accent-300'), 400: v('accent-400'), 500: v('accent-500') },
      },
      // Radius follows role; capped so containers never get bubbly.
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        '3xl': '14px',
      },
      boxShadow: {
        pop: '0 12px 32px -12px rgb(18 27 69 / 0.28), 0 2px 6px -2px rgb(18 27 69 / 0.12)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      transitionDuration: { 120: '120ms', 180: '180ms', 240: '240ms' },
      maxWidth: { prose: '68ch', page: '75rem' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};

export default config;
