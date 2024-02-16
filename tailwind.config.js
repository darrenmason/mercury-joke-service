/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      silver: '#dcdcdc',
      green: '#7bc06f',
      slate: '#656565',
      red: 'red',
      blue: '#2a7fbf',
      gray: '#eee',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
}
