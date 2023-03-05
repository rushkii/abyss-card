import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { fontGenshin, fontKhaenriah, fontTeyvat, fontLato } from '@/data/fonts'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --genshin-font: ${fontGenshin.style.fontFamily};
          --khaenriah-font: ${fontKhaenriah.style.fontFamily};
          --teyvat-font: ${fontTeyvat.style.fontFamily};
          --lato-font: ${fontLato.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
