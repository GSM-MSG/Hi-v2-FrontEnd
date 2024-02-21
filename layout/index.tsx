import API from '@/apis/instance'
import { Footer, Header } from '@/components'
import { GAUTH_CLIENT_ID, REDIRECT_URI, setStorage } from '@/utils'
import { GauthProvider } from '@msg-team/gauth-react'
import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { IsModal } from '@/atoms'
import {
  accessTokenStorage,
  refreshTokenStorage,
  accessExpiredAtStorage,
  refreshExpiredAtStorage,
} from '@/types'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isModal = useRecoilValue(IsModal)

  return (
    <GauthProvider
      redirectUri={REDIRECT_URI}
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
