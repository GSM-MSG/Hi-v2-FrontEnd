import API from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { HasLogin } from '@/atoms/atom'
import { useSetRecoilState } from 'recoil'

export default function useLogout() {
  const setHasLogin = useSetRecoilState<boolean>(HasLogin)
  const tokenManager = new TokenManager()

  const logout = async () => {
    await API.delete('/auth', {
      headers: {
        Authorization: `Bearer ${tokenManager.accessToken}`,
        RefreshToken: tokenManager.refreshToken,
      },
    })
    setHasLogin(false)
    tokenManager.removeTokens()
  }

  return logout
}
