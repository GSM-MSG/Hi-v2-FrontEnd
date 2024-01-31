import API from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { useRouter } from 'next/router'

export default function useLogout() {
  const tokenManager = new TokenManager()
  const router = useRouter()
  
  const logout = async () => {
    await API.delete('/auth', {
      headers: {
        Authorization: `Bearer ${tokenManager.accessToken}`,
        RefreshToken: tokenManager.refreshToken,
      },
    })
    tokenManager.removeTokens()
    router.push('/')
  }

  return logout
}
