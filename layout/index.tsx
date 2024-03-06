import { API } from '@/apis'
import { IsModal } from '@/atoms'
import { Footer, Header } from '@/components'
import { theme } from '@/styles/theme'
import {
  accessExpiredAtStorage,
  accessTokenStorage,
  refreshExpiredAtStorage,
  refreshTokenStorage,
} from '@/types'
import { GAUTH_CLIENT_ID, REDIRECT_URI, setStorage } from '@/utils'
import { ThemeProvider } from '@emotion/react'
import { GauthProvider } from '@msg-team/gauth-react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

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
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
        {isModal && <>{isModal}</>}
      </ThemeProvider>
    </GauthProvider>
  )
}
