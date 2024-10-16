import type { Config } from 'tailwindcss';

const size = Object.fromEntries(Array.from({ length: 100 }, (_, i) => [`${i + 96}`, `${(i + 96) / 4}rem`]));
const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'F5F6FB',
        foreground: 'var(--foreground)',
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
        full: '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
