/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ['light', 'dark'], // Enable light and dark themes
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

