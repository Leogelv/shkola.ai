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
        primary: {
          500: 'var(--primary-500)',
        },
        secondary: {
          500: 'var(--secondary-500)',
        },
        decorative: {
          500: 'var(--decorative-500)',
        },
        accent: {
          500: 'var(--accent-500)',
        },
        success: {
          500: 'var(--success-500)',
        },
        warning: {
          500: 'var(--warning-500)',
        },
        info: {
          500: 'var(--info-500)',
        },
        danger: {
          500: 'var(--danger-500)',
        },
      },
      
    },
  },
  plugins: [],
}

export default config;
