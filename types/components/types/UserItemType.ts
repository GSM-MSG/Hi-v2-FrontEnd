import { RoleTypes } from '@/types'

export interface UserItemType {
  userId: string
  email: string
  name: string
  grade?: number
  classNum?: number
  number?: number
  profileImageUrl: string
  role: RoleTypes
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
}
