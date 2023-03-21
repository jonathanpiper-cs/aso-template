import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://ui.contentstack.com/contentstack.min.css" />
      <script src="https://ui.contentstack.com/bootstrap.min.js" crossOrigin="anonymous" async></script>
      <script src="https://ui.contentstack.com/contentstack.min.js" async></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
