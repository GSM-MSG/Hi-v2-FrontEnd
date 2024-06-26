import { authQueryKeys, authUrl, post } from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { TokensType } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function usePostLogin() {
  const router = useRouter()
  const gauthCode = router.query.code?.toString()

  const { mutate } = useMutation<
    TokensType,
    AxiosError,
    { code: string }
  >({
    mutationKey: authQueryKeys.login(),
    mutationFn: (code) => post(authUrl.auth(), code),
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        const tokenManager = new TokenManager()
        tokenManager.setTokens(data)
      }
      router.replace('')
      toast.success('로그인 되었습니다')
    },
    onError: () => {
      router.replace('')
      toast.error('로그인에 오류가 발생했습니다')
    },
  })

  useEffect(() => {
    if (!gauthCode) return
    mutate({ code: gauthCode })
  }, [gauthCode, mutate])
}
