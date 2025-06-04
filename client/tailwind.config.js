

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class', // or 'media' if you want OS-based
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       // your customizations here
//     },
//   },
//   plugins: [],
// }

export default {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, etc. here if needed
    },
  },
  plugins: [],
};