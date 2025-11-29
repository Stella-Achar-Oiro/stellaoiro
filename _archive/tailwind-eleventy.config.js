/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
    "./src/_includes/**/*.{html,njk,md,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from PRD
        'brand-blue': '#2563EB',
        'brand-orange': '#FF6B35',
        'brand-green': '#10B981',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'border-gray': '#E5E7EB',
        'code-bg': '#F3F4F6',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'code': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      maxWidth: {
        'content': '800px',
        'site': '1200px',
      },
    },
  },
  plugins: [],
}
