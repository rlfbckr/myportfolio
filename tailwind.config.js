/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio-custom/.vitepress/theme/**/*.{js,ts,jsx,tsx,vue}",
    "./portfolio-custom/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

