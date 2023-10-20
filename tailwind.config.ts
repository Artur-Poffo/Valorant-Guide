import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': {
          100: '#ece8e1',
          200: '#d6d0c9',
          300: '#c0b9b1',
          400: '#a9a29a',
          500: '#7a736b',
          600: '#928b83',
        },
  
        'brand-gray': {
          400: '#808982',
          500: '#383e3a',
          600: '#292929',
          700: '#0f1923',
          800: '#111111',
          900: '#000000',
        },
  
        'brand-red': {
          500: '#ff4655'
        }
      },
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
