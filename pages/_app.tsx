import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'
import mixpanel from 'mixpanel-browser'
import { useEffect } from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET
const mixpanelKey = process.env.MIXPANEL_KEY

// mixpanel.init('df1dbb298fa300d458ecef32bb7b161b', { debug: isDevelopment })
mixpanel.init('df1dbb298fa300d458ecef32bb7b161b')

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('Sending event ' + url)
      mixpanel.track(url, document.title)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
