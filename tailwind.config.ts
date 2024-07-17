import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      fontSize: {
        '40px': '2.5rem',
        '20px': '1.25rem',
        '16px': '1rem',
        '14px': '0.875rem',
        '11px': '0.6875rem',
        '9px': '0.5625rem',
      },
      colors: {
        white: '#FFFFFF',
        black: '#12121B',
        blue: '#BAC9E5',
        pink: '#E3C6D1',
        darkPink: '#C0A4AF',
        primary: '#FFFFFF',
        secondary: '#12121B',
      },
      backgroundImage: {
        'pink-radial': 'radial-gradient(600px at 50% 50%, rgba(227, 198, 209, 0.15), transparent 80%)',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
  },
  plugins: [],
};
export default config;
