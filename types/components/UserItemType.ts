import { useGetRoleReturnType } from '../hooks'

export interface UserItemType {
  userId: string
  email: string
  name: string
  grade: number
  classNum: number
  number: number
  profileImageUrl: string
  role: string
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
}
