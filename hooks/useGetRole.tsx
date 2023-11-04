import { GetRoleTypes } from '@/types/components/GetRoleTypes'
import useFetch from './useFetch'
import { useEffect } from 'react'
import { useGetRoleReturnType } from '@/types/hooks/useGetRole'

export default function useGetRole(): useGetRoleReturnType {
  const { fetch, data } = useFetch<GetRoleTypes>({
    url: 'user/my-role',
    method: 'get',
  })

  const hasRole = (role: string) => {
    return data?.role.includes(role)
  }

  useEffect(() => {
    ;(async () => await fetch())()
  }, [])

  return {
    isAdmin: hasRole('ROLE_ADMIN'),
    isTeacher: hasRole('ROLE_TEACHER'),
    isStudent: hasRole('ROLE_STUDENT'),
    userId: data?.userId,
  }
}
