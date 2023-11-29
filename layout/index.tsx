import API from '@/apis/api'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GAUTH_CLIENT_ID, REDIRECT_URI } from '@/utils/env'
import { GauthProvider } from '@msg-team/gauth-react'
import { useRouter } from 'next/router'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { HasLogin, IsModal } from '@/atoms/atom'
import { LayoutType } from '@/types/LayoutType'

export default function Layout({ children }: LayoutType) {
  const router = useRouter()
  const setHasLogin = useSetRecoilState(HasLogin)
  const isModal = useRecoilValue(IsModal)
  return (
    <GauthProvider
      redirectUri={REDIRECT_URI}
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
      <>
        <Header />
        {children}
        <Footer />
        {isModal && <>{isModal}</>}
      </>
    </GauthProvider>
  )
}
