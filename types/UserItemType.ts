import { useGetRoleReturnType } from './hooks/useGetRole'

export interface UserItemType {
  userId: string
  email: string
  name: string
  grade: number
  classNum: number
  number: number
  profileImageUrl: string
  roles: string[]
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
  role?: useGetRoleReturnType
}
