import localFont from 'next/font/local'
import { Lato } from 'next/font/google'


export const fontGenshin = localFont({
  src: "../assets/fonts/genshin.ttf",
  preload: true,
  display: "swap",
  variable: "--genshin-font"
})

export const fontKhaenriah = localFont({
  src: "../assets/fonts/Khaenriah-Regular.ttf",
  preload: true,
  display: "swap",
  variable: "--khaenriah-font"
})

export const fontTeyvat = localFont({
  src: "../assets/fonts/Teyvat-Regular.ttf",
  preload: true,
  display: "swap",
  variable: "--teyvat-font"
})

export const fontLato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--lato-font",
});
