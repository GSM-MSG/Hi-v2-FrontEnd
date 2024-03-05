import Layout from '@/layout'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import localFont from 'next/font/local'

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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <main className={pretendard.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
        <ReactQueryDevtools initialIsOpen={true} />
        <ToastContainer position='top-right' theme='colored' autoClose={2000} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
