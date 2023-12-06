import useFetch from './useFetch'
import { useEffect } from 'react'
import { useGetRoleReturnType } from '@/types/hooks'
import { GetRoleType } from '@/types/components'
import { useRecoilValue } from 'recoil'
import { HasLogin } from '@/atoms/atom'

export default function useGetRole(): useGetRoleReturnType {
  const { fetch, data } = useFetch<GetRoleType>({
    url: 'user/my-role',
    method: 'get',
  })

  const hasLogin = useRecoilValue(HasLogin)

  const hasRole = (role: string) => {
    return data?.role.includes(role)
  }

  useEffect(() => {
    ;(async () => await fetch())()
  }, [hasLogin])

  return {
    isAdmin: hasRole('ROLE_ADMIN'),
    isTeacher: hasRole('ROLE_TEACHER'),
    isStudent: hasRole('ROLE_STUDENT'),
    userId: data?.userId,
  }
}
