import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="My App"
        description="This is my app"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://yourdomain.com',
          site_name: 'Celest3l',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp