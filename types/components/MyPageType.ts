import { UserItemType } from './UserItemType'
export interface MyPageType extends UserItemType {
  reservations: [
    {
      reservationId: string
      users: {
        userId: string
        email: string
        name: string
        grade: number
        classNum: number
        number: number
        profileImageUrl: string
        userStatus: 'AVAILABLE' | 'UNAVAILABLE'
      }[]
      checkStatus: boolean
      homeBase: {
        homeBaseId: string
        floor: number
        period: number
        homeBaseNumber: number
        maxCapacity: number
      }
    }
  ]
}
