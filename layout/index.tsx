import API from '@/apis'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GAUTH_CLIENT_ID } from '@/utils/env'
import { GauthProvider } from '@msg-team/gauth-react'
import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { HasLogin, IsModal } from '@/atoms/atom'
import { setStorage } from '@/utils/Storage'
import {
  accessTokenStorage,
  refreshTokenStorage,
  accessExpiredAtStorage,
  refreshExpiredAtStorage,
} from '@/types/apis'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const setHasLogin = useSetRecoilState(HasLogin)
  const isModal = useRecoilValue(IsModal)
  return (
    <GauthProvider
      redirectUri='http://localhost:3000/callback'
      onSuccess={async (code: string) => {
        const {
          data: {
            accessToken,
            refreshToken,
            accessExpiredAt,
            refreshExpiredAt,
          },
        } = await API.post('/auth', {
          code,
        })

        setStorage(accessTokenStorage, accessToken)
        setStorage(refreshTokenStorage, refreshToken)
        setStorage(accessExpiredAtStorage, accessExpiredAt)
        setStorage(refreshExpiredAtStorage, refreshExpiredAt)

        router.push('/', undefined, { shallow: true })
        setHasLogin(true)
      }}
      clientId={GAUTH_CLIENT_ID}
    >
      <Header />
      {children}
      <Footer />
      {isModal && <>{isModal}</>}
    </GauthProvider>
  )
}
