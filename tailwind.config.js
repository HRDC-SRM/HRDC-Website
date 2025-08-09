/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "product-manrope": ["Manrope", "sans-serif"],
        "product-bungee": ["Bungee", "cursive"],
      },
      fontSize: {
        "product-xl": '1.6875rem',
        "product-sm": '0.8125rem',
      },
      colors: {
        "product-red": "#FF4E4E",
        "product-pink": "#FF008A",
        "product-orange": "#FF833E",
        "product-purple-dark": "#1BA94C",
        "product-purple-light": "#1BA94C",
        "product-teal": "#12C0AB",
        "product-yellow": "#FFB800",
        "product-blue": "#1BA94C",
        "product-brown": "#231C18",
        "product-dark": "#39424E",
        "product-dark-light": "#4A5568",
        "product-text-light": "#E2E8F0",
      },
    },
  },
  plugins: [],
};
