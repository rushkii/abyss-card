import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { fontGenshin, fontKhaenriah, fontTeyvat, fontLato } from '@/data/fonts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>Abyss Card</title>
        <meta name="description" content="A Genshin Impact community website that fetches a player's profile and displays it in a customized card design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --genshin-font: ${fontGenshin.style.fontFamily};
          --khaenriah-font: ${fontKhaenriah.style.fontFamily};
          --teyvat-font: ${fontTeyvat.style.fontFamily};
          --lato-font: ${fontLato.style.fontFamily};
        }
      `}</style>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
