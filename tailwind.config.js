/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B0F',
          secondary: '#12121A',
          card: '#161622',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#1c1c2b',
        },
        accent: {
          purple: '#9B5CFF',
          'purple-glow': 'rgba(155, 92, 255, 0.35)',
          blue: '#5B8CFF',
          'blue-glow': 'rgba(91, 140, 255, 0.35)',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(155, 92, 255, 0.15), rgba(91, 140, 255, 0.08) 40%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

