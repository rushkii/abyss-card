/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      genshin: ["var(--genshin-font)", "genshin"],
      khaenriah: ["var(--khaenriah-font)", "khaenriah"],
      teyvat: ["var(--teyvat-font)", "teyvat"],
      lato: ["var(--lato-font)", "Lato"]
    },
    screens: {
      "sm": "320px",
      "md": "640px",
      "lg": "768px",
      "2lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {},
  },
  plugins: [],
}
