export interface UserItemType {
  userId: string
  email: string
  name: string
  grade: number
  classNum: number
  number: number
  profileImageUrl: string
  roles: []
  useStatus: 'AVAILABLE' | 'UNAVAILABLE'
  userlistRefetch?: (body?: any) => Promise<void>
}
