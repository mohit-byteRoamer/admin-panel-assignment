import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'primary': '#399797',
        "primary-dark": "#004d53",
        "primary-light": "#f4f7fc",
        "mulberry-pink": "#c34d85",
        "olive-green": "#afbb19",
        "olive-green-light": "#eaefd9",
        "deep-teal": "#004d55",
        "deep-teal-light": "#b8d6d8",
        'gray-light': '#f6f6f6',
        'gray-light-dark': '#9A9A9A',
        'gray-dim': '#f0f5f9',
      },
      fontSize: {
        xxs: '0.7rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
