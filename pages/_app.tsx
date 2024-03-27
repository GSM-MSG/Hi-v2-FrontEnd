import { Footer, Header } from '@/components'
import Layout from '@/layout'
import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Script from 'next/script'
import { useState } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import * as gtag from '../libs/gtag'

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <main className={pretendard.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
        <ReactQueryDevtools initialIsOpen={true} />
        <ToastContainer
          position='top-right'
          autoClose={700}
          transition={Slide}
          closeOnClick
          toastStyle={{
            backgroundColor: theme.color.white,
            color: theme.color.Grayscale.gray10,
          }}
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
