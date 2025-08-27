import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sleek Cream and Orange Color Palette
        'cream-white': '#fefefe',
        'cream-light': '#fafafa',
        'cream-warm': '#f8f8f8',
        'orange-primary': '#ff6b35',
        'orange-secondary': '#ff8c42',
        'orange-accent': '#ffa726',
        'orange-dark': '#e65100',
        'text-dark': '#1a1a1a',
        'text-dark-secondary': '#4a4a4a',
        'text-dark-muted': '#6b6b6b',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'serif': ['Playfair Display', 'Source Serif Pro', 'Georgia', 'serif'],
        'sans': ['Outfit', 'Albert Sans', 'Inter', 'system-ui', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(20px)' },
          '75%': { transform: 'translateY(-15px) translateX(5px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;