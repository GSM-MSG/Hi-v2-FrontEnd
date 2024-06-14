import { RoleTypes } from '@/types'

export interface UserItemType {
  userId: string
  email: string
  name: string
  schoolNumber: string | null
  profileImageUrl: string
  role: RoleTypes
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
}
