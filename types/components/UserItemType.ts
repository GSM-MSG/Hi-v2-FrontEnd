import { useGetRoleReturnType } from '../hooks'

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
}
