import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="main">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
export default MyApp
