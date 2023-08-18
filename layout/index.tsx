import API from '@/apis/api'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GAUTH_CLIENT_ID } from '@/utils/env'
import { GauthProvider } from '@msg-team/gauth-react'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { HasLogin } from '@/atoms/atom'
import { LayoutType } from '@/types/LayoutType'

export default function Layout({ children }: LayoutType) {
  const router = useRouter()
  const setHasLogin = useSetRecoilState(HasLogin)
  return (
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
        router.push('/', undefined, { shallow: true })
        setHasLogin(true)
      }}
      clientId={GAUTH_CLIENT_ID}
    >
      <Header />
      {children}
      <Footer />
    </GauthProvider>
  )
}