/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "button-color-primary": "text-gray-800",
        "button-color-secondary": "text-gray-800",
        "button-hover-color-primary": "text-gray-800",
        "button-hover-color-secondary": "text-gray-800",
      },
      backgroundColor: {
        "button-background-color-primary": "bg-green-300",
        "button-background-color-secondary": "bg-green-300",
        "button-hover-background-color-primary": "bg-green-500",
        "button-hover-background-color-secondary": "bg-green-500",
      },
    },
  },
  plugins: [],
};
