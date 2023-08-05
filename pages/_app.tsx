import API from '@/apis/api'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { GAUTH_CLIENT_ID } from '@/utils/env'
import { GauthProvider } from '@msg-team/gauth-react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <RecoilRoot>
      <GauthProvider
        redirectUri='http://localhost:3000/callback'
        onSuccess={async (code: string) => {
          const {
            data: { accessToken, refreshToken },
          } = await API.post('/auth', {
            code,
          })

          localStorage.setItem('hi_accessToken', accessToken)
          localStorage.setItem('hi_refreshToken', refreshToken)

          router.push('/')
        }}
        clientId={GAUTH_CLIENT_ID}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GauthProvider>
    </RecoilRoot>
  )
}
