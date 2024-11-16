import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script 
            src="https://scripts.simpleanalyticscdn.com/latest.js"
            data-skip-dnt="true"
            strategy="lazyOnload"
          />
        </>
      )}
    </>
  )
}