/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
    textColor: {
      "button-color-primary": "#1F2937",
      "button-color-secondary": "#1F2937",
      "button-hover-color-primary": "#1F2937",
      "button-hover-color-secondary": "#1F2937",
    },
    backgroundColor: {
      "button-background-color-primary": "#86EFAC",
      "button-background-color-secondary": "#86EFAC",
      "button-hover-background-color-primary": "rgb(74, 222, 128)",
      "button-hover-background-color-secondary": "rgb(74, 222, 128)",
    },
  },
};

export const plugins = [];
