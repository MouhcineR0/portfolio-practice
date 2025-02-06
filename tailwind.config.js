/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      Heebo: ["Heebo", "sans-serif"]
    },
    screens: {
      'ssm': '550px',
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}