import TokenManager from '@/apis/TokenManager'
import { useRouter } from 'next/router'
import * as S from './style'
import HeaderLogo from './HeaderLogo'
import HeaderMenuList from './HeaderMenuList'
import AuthButton from './AuthButton'

export default function Header({isManager}: {isManager: boolean}) {
  const tokenManager = new TokenManager()
  const router = useRouter()

  return (
    <S.HeaderContainer>
      <HeaderLogo />
      <HeaderMenuList isManager={isManager} pathname={router.pathname} accessToken={tokenManager.accessToken} push={router.push}/>
      <AuthButton
        isLogin={!!tokenManager.accessToken}
        accessToken={tokenManager.accessToken}
        refreshToken={tokenManager.refreshToken} 
        removeTokens={tokenManager.removeTokens}
      />
    </S.HeaderContainer>
  )
}