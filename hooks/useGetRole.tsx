import { get, userQueryKeys, userUrl } from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { GetRoleType, RoleTypes, useGetRoleReturnType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export default function useGetRole(): useGetRoleReturnType {
  const tokenManager = new TokenManager()
  const { data } = useQuery<GetRoleType, AxiosError>({
    queryKey: userQueryKeys.myRole(),
    queryFn: () => get(userUrl.myRole()),
    enabled: !!tokenManager.accessToken,
  })
  const { role, userId } = data || {}

  const hasRole = (roleType: RoleTypes) => roleType === role

  return {
    isAdmin: hasRole('ROLE_ADMIN'),
    isTeacher: hasRole('ROLE_TEACHER'),
    isStudent: hasRole('ROLE_STUDENT'),
    userId,
  }
}
