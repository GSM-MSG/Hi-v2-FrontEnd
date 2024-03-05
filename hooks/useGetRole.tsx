import { get, userQueryKeys, userUrl } from '@/apis'
import TokenManager from '@/apis/TokenManager'
import { GetRoleType, useGetRoleReturnType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export default function useGetRole(): useGetRoleReturnType {
  const tokenManager = new TokenManager()
  const { data } = useQuery<AxiosResponse<GetRoleType>>({
    queryKey: userQueryKeys.myRole(),
    queryFn: () => get(userUrl.myRole()),
    enabled: !!tokenManager.accessToken,
  })

  const hasRole = (role: string) => {
    return data?.data.role.includes(role)
  }

  return {
    isAdmin: hasRole('ROLE_ADMIN'),
    isTeacher: hasRole('ROLE_TEACHER'),
    isStudent: hasRole('ROLE_STUDENT'),
    userId: data?.data.userId,
    length: data?.data.role.length,
  }
}
