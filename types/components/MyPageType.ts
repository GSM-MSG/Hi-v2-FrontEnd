import { UserItemType } from './UserItemType'
export interface MyPageType extends UserItemType {
  reservation: {
    reservationId: string
    users: [
      {
        userId: string
        email: string
        name: string
        grade: number
        classNum: number
        number: number
        profileImageUrl: string
      }
    ]
    reservationNumber: number
    homeBaseId: string
    floor: number
    period: number
  }
}
