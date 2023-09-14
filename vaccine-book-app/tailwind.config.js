/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      textColor: {
        'custom-blue': 'rgb(87, 192, 231)',
      },
      backgroundColor: {
        'custom-blue': 'rgb(87, 192, 231)',
      },
    },
  },
  plugins: [],
}

