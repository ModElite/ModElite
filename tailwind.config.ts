import type { Config } from 'tailwindcss';

const size = Object.fromEntries(Array.from({ length: 2000 }, (_, i) => [`${i}`, `${i / 4}rem`]));
const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      aspectRatio: {
        banner: '18 / 4',
      },
      colors: {
        background: 'F5F6FB',
        foreground: 'var(--foreground)',
        purple1: '#6E62E5',
        purple2: '#8E85EB',
        purple3: '#CFCBF6',
        purple4: '#EFEEFC',
        blue1: '#46A8E1',
        blue2: '#6FBBE8',
        blue3: '#C1E2F5',
        blue4: '#D6ECF8',
      },
      size: size,
      spacing: size,
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
