import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefcf8',
          100: '#d8f9ee',
          200: '#b4f0df',
          300: '#7fe1c3',
          400: '#46caa3',
          500: '#23ac86',
          600: '#178a6b',
          700: '#136d56',
          800: '#115847',
          900: '#104a3d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
