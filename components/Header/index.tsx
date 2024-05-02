import TokenManager from '@/apis/TokenManager'
import { useGetRole } from '@/hooks'
import { useRouter } from 'next/router'
import AuthButton from './AuthButton'
import HeaderLogo from './HeaderLogo'
import HeaderMenuList from './HeaderMenuList'
import * as S from './style'

export default function Header({isManager}: {isManager: boolean}) {
  const tokenManager = new TokenManager()
  const router = useRouter()
  const { isStudent } = useGetRole()

  return (
    <S.HeaderContainer>
      <HeaderLogo />
      <HeaderMenuList isManager={!isStudent} pathname={router.pathname} accessToken={tokenManager.accessToken} push={router.push}/>
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