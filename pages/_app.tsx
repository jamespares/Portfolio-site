import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { appWithTranslation } from 'next-i18next';
import { LanguageProvider } from '../context/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PH1EW8CEX1"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PH1EW8CEX1');
            `
          }}
        />
        <Component {...pageProps} />
      </>
    </LanguageProvider>
  );
}

export default appWithTranslation(MyApp);