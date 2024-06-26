import { authQueryKeys, authUrl, del } from "@/apis"
import { useModal } from "@/hooks"
import { LoginModal } from "@/modals"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import * as S from './style'

interface AuthButtonProps {
  isLogin: boolean
  accessToken: string | null
  refreshToken: string | null
  removeTokens: () => void
}

export default function AuthButton({ isLogin, accessToken, refreshToken, removeTokens }: AuthButtonProps) {
  const [loginText, setLoginText] = useState<'로그인' | '로그아웃'>('로그인')
  const { openModal } = useModal()
  const { mutate: logout } = useMutation<void, AxiosError>({
    mutationKey: authQueryKeys.logout(),
    mutationFn: () =>
      del(authUrl.auth(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          RefreshToken: refreshToken
        },
      }),
    onSuccess: () => {
      removeTokens()
      toast.success('로그아웃 됐습니다')
    },
  })
  const onClick = () => {
    if (accessToken) logout()
    else openModal(<LoginModal />)
  }

  useEffect(() => {
    if (isLogin) setLoginText('로그아웃')
    else setLoginText('로그인')
  }, [isLogin])

return (
  <S.AuthButton onClick={onClick}>
    {loginText}
  </S.AuthButton>
)
  
}