import Layout from '@/layout'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import localFont from 'next/font/local'
import { theme } from '@/styles/theme'

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
      </RecoilRoot>
    </QueryClientProvider>
  )
}
