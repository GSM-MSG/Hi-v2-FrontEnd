import API from '@/apis'
import { HasLogin } from '@/atoms'
import { getStorage } from '@/utils/Storage'
import { useRecoilState } from 'recoil'

export default function useLogout() {
  const [hasLogin, setHasLogin] = useRecoilState<boolean>(HasLogin)
  const accessToken = getStorage('hi_accessToken')
  const refreshToken = getStorage('hi_refreshToken')

  function logout() {
    API.delete('/auth', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        RefreshToken: refreshToken,
      },
    })
    setHasLogin(false)
    localStorage.clear()
  }

  return logout
}
